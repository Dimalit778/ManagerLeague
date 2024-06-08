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
  AppMatch as PrismaAppMatch,
  AppRound as PrismaAppRound,
} from "@prisma/client";
import { AppMatchDto } from "../AppMatchDto";

export class AppMatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AppMatchCountArgs, "select">): Promise<number> {
    return this.prisma.appMatch.count(args);
  }

  async appMatches<T extends Prisma.AppMatchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppMatchFindManyArgs>
  ): Promise<PrismaAppMatch[]> {
    return this.prisma.appMatch.findMany<Prisma.AppMatchFindManyArgs>(args);
  }
  async appMatch<T extends Prisma.AppMatchFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppMatchFindUniqueArgs>
  ): Promise<PrismaAppMatch | null> {
    return this.prisma.appMatch.findUnique(args);
  }
  async createAppMatch<T extends Prisma.AppMatchCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppMatchCreateArgs>
  ): Promise<PrismaAppMatch> {
    return this.prisma.appMatch.create<T>(args);
  }
  async updateAppMatch<T extends Prisma.AppMatchUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppMatchUpdateArgs>
  ): Promise<PrismaAppMatch> {
    return this.prisma.appMatch.update<T>(args);
  }
  async deleteAppMatch<T extends Prisma.AppMatchDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppMatchDeleteArgs>
  ): Promise<PrismaAppMatch> {
    return this.prisma.appMatch.delete(args);
  }

  async getAppRound(parentId: string): Promise<PrismaAppRound | null> {
    return this.prisma.appMatch
      .findUnique({
        where: { id: parentId },
      })
      .appRound();
  }
  async GetAllMatchesInRound(args: string): Promise<AppMatchDto[]> {
    throw new Error("Not implemented");
  }
  async GetMatchesInRound(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
