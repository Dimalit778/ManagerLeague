import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeagueServiceBase } from "./base/league.service.base";

@Injectable()
export class LeagueService extends LeagueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
