import mongoose, { Mongoose } from "mongoose";

interface UserAttributes {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<any> {
  build(user: UserAttributes): any;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.statics.build = (user: UserAttributes) => {
  return new User(user);
};

const User = mongoose.model<any, UserModel>("User", userSchema);

export { User };
