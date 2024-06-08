import { AppRoundCreateNestedManyWithoutAppLeaguesInput } from "./AppRoundCreateNestedManyWithoutAppLeaguesInput";
import { RoundCreateNestedManyWithoutAppLeaguesInput } from "./RoundCreateNestedManyWithoutAppLeaguesInput";

export type AppLeagueCreateInput = {
  appRounds?: AppRoundCreateNestedManyWithoutAppLeaguesInput;
  isSelected?: boolean | null;
  joinCode?: string | null;
  leagueCode?: string | null;
  leagueName?: string | null;
  members?: string | null;
  rounds?: RoundCreateNestedManyWithoutAppLeaguesInput;
};
