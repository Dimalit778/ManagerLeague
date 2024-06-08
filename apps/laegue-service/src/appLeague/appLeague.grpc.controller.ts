import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppLeagueService } from "./appLeague.service";
import { AppLeagueGrpcControllerBase } from "./base/appLeague.grpc.controller.base";

@swagger.ApiTags("appLeagues")
@common.Controller("appLeagues")
export class AppLeagueGrpcController extends AppLeagueGrpcControllerBase {
  constructor(protected readonly service: AppLeagueService) {
    super(service);
  }
}
