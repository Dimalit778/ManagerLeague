import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppLeagueServiceBase } from "./base/appLeague.service.base";

@Injectable()
export class AppLeagueService extends AppLeagueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
