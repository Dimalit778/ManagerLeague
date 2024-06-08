import { AppRoundListRelationFilter } from "../appRound/AppRoundListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoundListRelationFilter } from "../round/RoundListRelationFilter";

export type AppLeagueWhereInput = {
  appRounds?: AppRoundListRelationFilter;
  id?: StringFilter;
  isSelected?: BooleanNullableFilter;
  joinCode?: StringNullableFilter;
  leagueCode?: StringNullableFilter;
  leagueName?: StringNullableFilter;
  members?: StringNullableFilter;
  rounds?: RoundListRelationFilter;
};
