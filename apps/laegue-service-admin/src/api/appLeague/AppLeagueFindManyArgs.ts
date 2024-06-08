import { AppLeagueWhereInput } from "./AppLeagueWhereInput";
import { AppLeagueOrderByInput } from "./AppLeagueOrderByInput";

export type AppLeagueFindManyArgs = {
  where?: AppLeagueWhereInput;
  orderBy?: Array<AppLeagueOrderByInput>;
  skip?: number;
  take?: number;
};
