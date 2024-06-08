import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RoundModuleBase } from "./base/round.module.base";
import { RoundService } from "./round.service";
import { RoundController } from "./round.controller";
import { RoundGrpcController } from "./round.grpc.controller";
import { RoundResolver } from "./round.resolver";

@Module({
  imports: [RoundModuleBase, forwardRef(() => AuthModule)],
  controllers: [RoundController, RoundGrpcController],
  providers: [RoundService, RoundResolver],
  exports: [RoundService],
})
export class RoundModule {}
