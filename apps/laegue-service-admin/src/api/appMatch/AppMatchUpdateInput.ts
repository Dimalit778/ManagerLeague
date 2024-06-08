import { AppRoundWhereUniqueInput } from "../appRound/AppRoundWhereUniqueInput";

export type AppMatchUpdateInput = {
  appRound?: AppRoundWhereUniqueInput | null;
  awayScore?: number | null;
  homeScore?: number | null;
  isFinished?: boolean | null;
  matchPoints?: number | null;
  result?: string | null;
};
