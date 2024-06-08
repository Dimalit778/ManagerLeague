import { AppLeague } from "../appLeague/AppLeague";
import { AppMatch } from "../appMatch/AppMatch";
import { Match } from "../match/Match";

export type AppRound = {
  appLeague?: AppLeague | null;
  appMatches?: Array<AppMatch>;
  createdAt: Date;
  id: string;
  isFinished: boolean | null;
  matches?: Array<Match>;
  roundNumber: number | null;
  updatedAt: Date;
};
