const { User } = require('../Models/User');

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