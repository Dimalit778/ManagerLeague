import { AppLeague } from "../appLeague/AppLeague";

export type Round = {
  appLeague?: AppLeague | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
