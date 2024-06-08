import { AppRoundWhereUniqueInput } from "../appRound/AppRoundWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type MatchWhereInput = {
  appRound?: AppRoundWhereUniqueInput;
  id?: StringFilter;
};
