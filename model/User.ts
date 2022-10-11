import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  publicKey: {
    type: String,
    requeired: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
    unique: true,
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;