import bcrypt from "bcrypt";

export class Password {
  static async toHash(password: string) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  static async compare(suppliedPassword: string, storedPassword: string) {
    const match = await bcrypt.compare(suppliedPassword, storedPassword);
    return match;
  }
}
