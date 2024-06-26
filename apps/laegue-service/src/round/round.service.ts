import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoundServiceBase } from "./base/round.service.base";

@Injectable()
export class RoundService extends RoundServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
