import { JsonValue } from "type-fest";

export type League = {
  createdAt: Date;
  id: string;
  leagueCode: string | null;
  leagueName: string | null;
  members: JsonValue;
  name: string | null;
  rounds: JsonValue;
  updatedAt: Date;
};
