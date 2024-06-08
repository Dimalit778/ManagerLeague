import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AppRoundModuleBase } from "./base/appRound.module.base";
import { AppRoundService } from "./appRound.service";
import { AppRoundController } from "./appRound.controller";
import { AppRoundResolver } from "./appRound.resolver";

@Module({
  imports: [AppRoundModuleBase, forwardRef(() => AuthModule)],
  controllers: [AppRoundController],
  providers: [AppRoundService, AppRoundResolver],
  exports: [AppRoundService],
})
export class AppRoundModule {}
