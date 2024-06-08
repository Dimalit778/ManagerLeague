import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppRoundServiceBase } from "./base/appRound.service.base";

@Injectable()
export class AppRoundService extends AppRoundServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
