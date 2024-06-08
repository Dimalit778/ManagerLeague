import { LeagueWhereInput } from "./LeagueWhereInput";
import { LeagueOrderByInput } from "./LeagueOrderByInput";

export type LeagueFindManyArgs = {
  where?: LeagueWhereInput;
  orderBy?: Array<LeagueOrderByInput>;
  skip?: number;
  take?: number;
};
