import { AppLeagueWhereUniqueInput } from "../appLeague/AppLeagueWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type RoundWhereInput = {
  appLeague?: AppLeagueWhereUniqueInput;
  id?: StringFilter;
};
