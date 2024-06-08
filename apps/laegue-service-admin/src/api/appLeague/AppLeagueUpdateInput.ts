import { AppRoundUpdateManyWithoutAppLeaguesInput } from "./AppRoundUpdateManyWithoutAppLeaguesInput";
import { RoundUpdateManyWithoutAppLeaguesInput } from "./RoundUpdateManyWithoutAppLeaguesInput";

export type AppLeagueUpdateInput = {
  appRounds?: AppRoundUpdateManyWithoutAppLeaguesInput;
  isSelected?: boolean | null;
  joinCode?: string | null;
  leagueCode?: string | null;
  leagueName?: string | null;
  members?: string | null;
  rounds?: RoundUpdateManyWithoutAppLeaguesInput;
};
