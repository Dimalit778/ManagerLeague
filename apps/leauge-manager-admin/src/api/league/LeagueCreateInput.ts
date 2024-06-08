import { InputJsonValue } from "../../types";

export type LeagueCreateInput = {
  leagueCode?: string | null;
  leagueName?: string | null;
  members?: InputJsonValue;
  name?: string | null;
  rounds?: InputJsonValue;
};
