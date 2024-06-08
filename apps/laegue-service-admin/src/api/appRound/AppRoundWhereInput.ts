import { AppLeagueWhereUniqueInput } from "../appLeague/AppLeagueWhereUniqueInput";
import { AppMatchListRelationFilter } from "../appMatch/AppMatchListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AppRoundWhereInput = {
  appLeague?: AppLeagueWhereUniqueInput;
  appMatches?: AppMatchListRelationFilter;
  id?: StringFilter;
  isFinished?: BooleanNullableFilter;
  matches?: MatchListRelationFilter;
  roundNumber?: IntNullableFilter;
};
