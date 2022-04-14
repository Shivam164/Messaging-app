const { Group } = require('../Models/Groups.js');
const { User } = require('../Models/User');

exports.accessGroup = async (req, res, next) => {
    const { userId } = req.body;
    console.log(req.body.user);
  
    if (!userId) {
      console.log("UserId param not sent with request");
      return res.sendStatus(400);
    }
  
    var isGroup = await Group.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.body.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");
  
    isGroup = await User.populate(isGroup, {
      path: "latestMessage.sender",
      select: "name pic email",
    });

    console.log(isGroup);
  
    if (isGroup.length > 0) {
      res.send(isGroup[0]);
    } else {
      var chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.body.user._id, userId],
      };
  
      try {
        const createdGroup = await Group.create(chatData);
        const FullChat = await Group.findOne({ _id: createdGroup._id }).populate(
          "users",
          "-password"
        );
        res.status(200).json(FullChat);
      } catch (error) {
        res.status(400);
        next(error);
      }
    }
  };

exports.fetchChats = async (req, res, next) => {
  console.log("in here");
  console.log(req.body);
try {
    Group.find({ users: { $elemMatch: { $eq: req.body.user._id } } })
    .populate("users", "-password")
    .populate("groupAdmin", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 })
    .then(async (results) => {
        results = await User.populate(results, {
        path: "latestMessage.sender",
        select: "name pic email",
        });
        res.status(200).send(results);
    });
} catch (error) {
  console.log("error ====> ", error);
    res.status(400);
    next(error);
}
};