import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LeagueModuleBase } from "./base/league.module.base";
import { LeagueService } from "./league.service";
import { LeagueController } from "./league.controller";
import { LeagueResolver } from "./league.resolver";

@Module({
  imports: [LeagueModuleBase, forwardRef(() => AuthModule)],
  controllers: [LeagueController],
  providers: [LeagueService, LeagueResolver],
  exports: [LeagueService],
})
export class LeagueModule {}
