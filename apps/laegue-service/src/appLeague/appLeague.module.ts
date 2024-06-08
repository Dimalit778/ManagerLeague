import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AppLeagueModuleBase } from "./base/appLeague.module.base";
import { AppLeagueService } from "./appLeague.service";
import { AppLeagueController } from "./appLeague.controller";
import { AppLeagueGrpcController } from "./appLeague.grpc.controller";
import { AppLeagueResolver } from "./appLeague.resolver";

@Module({
  imports: [AppLeagueModuleBase, forwardRef(() => AuthModule)],
  controllers: [AppLeagueController, AppLeagueGrpcController],
  providers: [AppLeagueService, AppLeagueResolver],
  exports: [AppLeagueService],
})
export class AppLeagueModule {}
