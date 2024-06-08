/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AppUser as PrismaAppUser,
  League as PrismaLeague,
} from "@prisma/client";

export class AppUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AppUserCountArgs, "select">): Promise<number> {
    return this.prisma.appUser.count(args);
  }

  async appUsers<T extends Prisma.AppUserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserFindManyArgs>
  ): Promise<PrismaAppUser[]> {
    return this.prisma.appUser.findMany<Prisma.AppUserFindManyArgs>(args);
  }
  async appUser<T extends Prisma.AppUserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserFindUniqueArgs>
  ): Promise<PrismaAppUser | null> {
    return this.prisma.appUser.findUnique(args);
  }
  async createAppUser<T extends Prisma.AppUserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserCreateArgs>
  ): Promise<PrismaAppUser> {
    return this.prisma.appUser.create<T>(args);
  }
  async updateAppUser<T extends Prisma.AppUserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserUpdateArgs>
  ): Promise<PrismaAppUser> {
    return this.prisma.appUser.update<T>(args);
  }
  async deleteAppUser<T extends Prisma.AppUserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppUserDeleteArgs>
  ): Promise<PrismaAppUser> {
    return this.prisma.appUser.delete(args);
  }

  async findLeagues(
    parentId: string,
    args: Prisma.LeagueFindManyArgs
  ): Promise<PrismaLeague[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leagues(args);
  }
}
