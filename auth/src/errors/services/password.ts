import bcrypt from "bcrypt";

export class Password {
  static async toHash(password: string) {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds).then(function (hash) {
      return hash;
    });
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    const match = await bcrypt.compare(storedPassword, suppliedPassword);
    return match;
  }
}
