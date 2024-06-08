import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type LeagueWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  id?: StringFilter;
};
