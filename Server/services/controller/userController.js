const User = require("../../model/userShema");

exports.find = async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (err) {
      res.send({err : err.message})
  }
};

exports.post = async (req, res) => {
  try {
    const user = new User(req.body);
    user.save();
    res.send(req.body);
  } catch (err) {
    res.send({err : err.message})
  }
};

exports.delete = async(req, res) => {
  try{
    const id = req.params.id
    await User.findByIdAndDelete(id)
    res.send('deleted success')
  }catch(err){
    res.send({err : message})
  }
};




exports.put = (req, res) => {
  res.send("this is put method");
};
