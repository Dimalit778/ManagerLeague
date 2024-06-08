import { AppLeagueWhereUniqueInput } from "../appLeague/AppLeagueWhereUniqueInput";
import { AppMatchCreateNestedManyWithoutAppRoundsInput } from "./AppMatchCreateNestedManyWithoutAppRoundsInput";
import { MatchCreateNestedManyWithoutAppRoundsInput } from "./MatchCreateNestedManyWithoutAppRoundsInput";

export type AppRoundCreateInput = {
  appLeague?: AppLeagueWhereUniqueInput | null;
  appMatches?: AppMatchCreateNestedManyWithoutAppRoundsInput;
  isFinished?: boolean | null;
  matches?: MatchCreateNestedManyWithoutAppRoundsInput;
  roundNumber?: number | null;
};
