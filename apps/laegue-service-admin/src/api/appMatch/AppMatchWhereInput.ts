import { AppRoundWhereUniqueInput } from "../appRound/AppRoundWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppMatchWhereInput = {
  appRound?: AppRoundWhereUniqueInput;
  awayScore?: IntNullableFilter;
  homeScore?: IntNullableFilter;
  id?: StringFilter;
  isFinished?: BooleanNullableFilter;
  matchPoints?: IntNullableFilter;
  result?: StringNullableFilter;
};
