import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppMatchService } from "./appMatch.service";
import { AppMatchGrpcControllerBase } from "./base/appMatch.grpc.controller.base";

@swagger.ApiTags("appMatches")
@common.Controller("appMatches")
export class AppMatchGrpcController extends AppMatchGrpcControllerBase {
  constructor(protected readonly service: AppMatchService) {
    super(service);
  }
}
