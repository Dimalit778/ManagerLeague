import { AppRound } from "../appRound/AppRound";

export type Match = {
  appRound?: AppRound | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
