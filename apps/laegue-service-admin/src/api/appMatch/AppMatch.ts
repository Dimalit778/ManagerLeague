import { AppRound } from "../appRound/AppRound";

export type AppMatch = {
  appRound?: AppRound | null;
  awayScore: number | null;
  createdAt: Date;
  homeScore: number | null;
  id: string;
  isFinished: boolean | null;
  matchPoints: number | null;
  result: string | null;
  updatedAt: Date;
};
