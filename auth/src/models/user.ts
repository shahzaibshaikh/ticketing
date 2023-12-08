import mongoose, { Mongoose } from "mongoose";
import { Password } from "../errors/services/password";

interface UserAttributes {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(user: UserAttributes): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
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

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    try {
      const hashed = await Password.toHash(this.get("password"));
      this.set("password", hashed);
    } catch (err) {
      // Handle error, perhaps log it
    }
  }
  done();
});

userSchema.statics.build = (user: UserAttributes) => {
  return new User(user);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };