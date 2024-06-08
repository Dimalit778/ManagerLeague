import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AppMatchModuleBase } from "./base/appMatch.module.base";
import { AppMatchService } from "./appMatch.service";
import { AppMatchController } from "./appMatch.controller";
import { AppMatchGrpcController } from "./appMatch.grpc.controller";
import { AppMatchResolver } from "./appMatch.resolver";

@Module({
  imports: [AppMatchModuleBase, forwardRef(() => AuthModule)],
  controllers: [AppMatchController, AppMatchGrpcController],
  providers: [AppMatchService, AppMatchResolver],
  exports: [AppMatchService],
})
export class AppMatchModule {}
