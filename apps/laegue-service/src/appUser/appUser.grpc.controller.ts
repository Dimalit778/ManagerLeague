import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppUserService } from "./appUser.service";
import { AppUserGrpcControllerBase } from "./base/appUser.grpc.controller.base";

@swagger.ApiTags("appUsers")
@common.Controller("appUsers")
export class AppUserGrpcController extends AppUserGrpcControllerBase {
  constructor(protected readonly service: AppUserService) {
    super(service);
  }
}
