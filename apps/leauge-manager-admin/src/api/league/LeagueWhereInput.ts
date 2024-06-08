import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type LeagueWhereInput = {
  id?: StringFilter;
  leagueCode?: StringNullableFilter;
  leagueName?: StringNullableFilter;
  members?: JsonFilter;
  name?: StringNullableFilter;
  rounds?: JsonFilter;
};
