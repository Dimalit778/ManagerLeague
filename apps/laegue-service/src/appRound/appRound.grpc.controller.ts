import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppRoundService } from "./appRound.service";
import { AppRoundGrpcControllerBase } from "./base/appRound.grpc.controller.base";

@swagger.ApiTags("appRounds")
@common.Controller("appRounds")
export class AppRoundGrpcController extends AppRoundGrpcControllerBase {
  constructor(protected readonly service: AppRoundService) {
    super(service);
  }
}
