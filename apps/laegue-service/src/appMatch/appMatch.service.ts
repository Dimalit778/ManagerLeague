import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppMatchServiceBase } from "./base/appMatch.service.base";

@Injectable()
export class AppMatchService extends AppMatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
