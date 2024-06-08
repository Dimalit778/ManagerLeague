import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AppRoundService } from "./appRound.service";
import { AppRoundControllerBase } from "./base/appRound.controller.base";

@swagger.ApiTags("appRounds")
@common.Controller("appRounds")
export class AppRoundController extends AppRoundControllerBase {
  constructor(
    protected readonly service: AppRoundService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
