import { Prisma, User } from "build/prisma";

export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>;
  create(data: Prisma.UserCreateInput): Promise<User>;
}
