import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoundService } from "./round.service";
import { RoundGrpcControllerBase } from "./base/round.grpc.controller.base";

@swagger.ApiTags("rounds")
@common.Controller("rounds")
export class RoundGrpcController extends RoundGrpcControllerBase {
  constructor(protected readonly service: RoundService) {
    super(service);
  }
}
