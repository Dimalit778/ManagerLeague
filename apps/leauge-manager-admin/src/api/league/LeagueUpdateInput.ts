import { InputJsonValue } from "../../types";

export type LeagueUpdateInput = {
  leagueCode?: string | null;
  leagueName?: string | null;
  members?: InputJsonValue;
  name?: string | null;
  rounds?: InputJsonValue;
};
