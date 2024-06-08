import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AppLeagueService } from "./appLeague.service";
import { AppLeagueControllerBase } from "./base/appLeague.controller.base";

@swagger.ApiTags("appLeagues")
@common.Controller("appLeagues")
export class AppLeagueController extends AppLeagueControllerBase {
  constructor(
    protected readonly service: AppLeagueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
