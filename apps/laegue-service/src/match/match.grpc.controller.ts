import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MatchService } from "./match.service";
import { MatchGrpcControllerBase } from "./base/match.grpc.controller.base";

@swagger.ApiTags("matches")
@common.Controller("matches")
export class MatchGrpcController extends MatchGrpcControllerBase {
  constructor(protected readonly service: MatchService) {
    super(service);
  }
}
