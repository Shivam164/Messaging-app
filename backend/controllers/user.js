const { User } = require('../Models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.findContact = async function(req, res, next){
    const { emailId } = req.body;

    console.log(req.body);

    try{
        const user = await User.findOne({emailId});

        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({message : "No Match Found"})
        }
    }catch(error){
        next(error);
    }
}

exports.addContact = async function(req, res, next){
    console.log("here");
    const { _id, name, emailId, image, userEmailId } = req.body;
    try{

        if(emailId === userEmailId){
            next(new ErrorResponse("You cannot add yourself", 403));
        }

        const user = await User.findOne({emailId : userEmailId});

        const result = user.allContacts.filter((singleUser) => {
            return (singleUser.email == emailId);
        })

        console.log(result);

        if(result.length !== 0){
            next(new ErrorResponse("Already in contacts", 403));
        }

        user.allContacts.unshift({
            _id : _id,
            name : name,
            email : emailId,
            image : image
        });

        await user.save();

        res.status(200).json({message : "Added to the contacts", user})
    }catch(error){
        next(error);
    }
}

exports.removeContact = async function(req, res, next){
    const {emailId, userEmailId} = req.body;
    try{
        const user = await User.findOne({emailId : userEmailId});
        const contacts = user.allContacts.filter((contact) => {
            return contact.email !== emailId;
        })

        user.allContacts = contacts;
        await user.save();
        res.status(200).json({message : "Removed Contact from contacts", user});
    }catch(error){
        console.log(error);
        next(error);
    }
}