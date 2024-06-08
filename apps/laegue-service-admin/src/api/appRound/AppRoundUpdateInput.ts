import { AppLeagueWhereUniqueInput } from "../appLeague/AppLeagueWhereUniqueInput";
import { AppMatchUpdateManyWithoutAppRoundsInput } from "./AppMatchUpdateManyWithoutAppRoundsInput";
import { MatchUpdateManyWithoutAppRoundsInput } from "./MatchUpdateManyWithoutAppRoundsInput";

export type AppRoundUpdateInput = {
  appLeague?: AppLeagueWhereUniqueInput | null;
  appMatches?: AppMatchUpdateManyWithoutAppRoundsInput;
  isFinished?: boolean | null;
  matches?: MatchUpdateManyWithoutAppRoundsInput;
  roundNumber?: number | null;
};
