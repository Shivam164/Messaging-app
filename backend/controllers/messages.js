const { Messages } = require('../Models/Messages');
const { Group } = require('../Models/Groups');
const { User } = require('../Models/User');

exports.allMessages = async (req, res, next) => {
    try {
      const messages = await Messages.find({ group : req.body.groupId })
        .populate("sender", "name image emailId")
        .populate("group");
      res.json(messages);
    } catch (error) {
      res.status(400);
      next(error);
    }
  };

exports.sendMessages = async (req, res, next) => {
    const { text, groupId } = req.body;


    console.log("body => ",req.body);
  
    if (!text || !groupId) {
      console.log("Invalid data passed into request");
      return res.sendStatus(400);
    }
  
    var newMessage = {
      sender: req.body.user._id,
      text: text,
        group: groupId,
    };
  
    try {
      var message = await Messages.create(newMessage);
  
      message = await message.populate("sender", "name image");
      message = await message.populate("group");
      message = await User.populate(message, {
        path: "group.users",
        select: "name image emailId",
      });
  
      await Group.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
  
      res.json(message);
    } catch (error) {
      console.log(error);
      res.status(400);
      next(error);
    }
  };