import { AppRound } from "../appRound/AppRound";
import { Round } from "../round/Round";

export type AppLeague = {
  appRounds?: Array<AppRound>;
  createdAt: Date;
  id: string;
  isSelected: boolean | null;
  joinCode: string | null;
  leagueCode: string | null;
  leagueName: string | null;
  members: string | null;
  rounds?: Array<Round>;
  updatedAt: Date;
};
