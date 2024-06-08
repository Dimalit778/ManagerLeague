import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeagueService } from "./league.service";
import { LeagueGrpcControllerBase } from "./base/league.grpc.controller.base";

@swagger.ApiTags("leagues")
@common.Controller("leagues")
export class LeagueGrpcController extends LeagueGrpcControllerBase {
  constructor(protected readonly service: LeagueService) {
    super(service);
  }
}
