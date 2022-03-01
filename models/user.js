const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    type: String,
    required: true,
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 3,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  //'this' is the user document | Mongoose cannot override
  if (!this.isModified("password")) return next();
  //update the password with the computed hash
  this.password = await bcrypt.hash(
    this.password,
    SALT_ROUNDS
  ); /*Now provide salt rounds | Up by 1 = 1 pow(2) */
  return next();
});

module.exports = mongoose.model("User", userSchema);
