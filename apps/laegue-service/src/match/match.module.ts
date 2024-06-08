import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MatchModuleBase } from "./base/match.module.base";
import { MatchService } from "./match.service";
import { MatchController } from "./match.controller";
import { MatchGrpcController } from "./match.grpc.controller";
import { MatchResolver } from "./match.resolver";

@Module({
  imports: [MatchModuleBase, forwardRef(() => AuthModule)],
  controllers: [MatchController, MatchGrpcController],
  providers: [MatchService, MatchResolver],
  exports: [MatchService],
})
export class MatchModule {}
