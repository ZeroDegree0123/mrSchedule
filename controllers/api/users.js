const jwt = require("jsonwebtoken");
const User = require("../../models/user");

createJWT = (user) => {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
};

create = async (req, res) => {
  try {
    //Add user to DB
    const user = await User.create(req.body);
    //token will be a string
    const token = createJWT(user);
    //Serialize a string
    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports = {
  create,
};
