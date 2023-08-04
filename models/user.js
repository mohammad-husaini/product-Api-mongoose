import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
