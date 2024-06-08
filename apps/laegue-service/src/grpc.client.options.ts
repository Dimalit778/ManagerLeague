import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "user",
      "league",
      "round",
      "match",
      "appuser",
      "appleague",
      "appmatch",
      "appround"
    ],
    protoPath: [
      "src/user/user.proto",
      "src/league/league.proto",
      "src/round/round.proto",
      "src/match/match.proto",
      "src/appuser/appuser.proto",
      "src/appleague/appleague.proto",
      "src/appmatch/appmatch.proto",
      "src/appround/appround.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
