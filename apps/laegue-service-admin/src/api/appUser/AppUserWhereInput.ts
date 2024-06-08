import { StringFilter } from "../../util/StringFilter";
import { LeagueListRelationFilter } from "../league/LeagueListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AppUserWhereInput = {
  id?: StringFilter;
  leagues?: LeagueListRelationFilter;
  name?: StringNullableFilter;
  profileImage?: JsonFilter;
  totalPoint?: IntNullableFilter;
};
