import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AppMatchService } from "./appMatch.service";
import { AppMatchControllerBase } from "./base/appMatch.controller.base";

@swagger.ApiTags("appMatches")
@common.Controller("appMatches")
export class AppMatchController extends AppMatchControllerBase {
  constructor(
    protected readonly service: AppMatchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
