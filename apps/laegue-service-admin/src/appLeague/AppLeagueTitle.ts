import { AppLeague as TAppLeague } from "../api/appLeague/AppLeague";

export const APPLEAGUE_TITLE_FIELD = "leagueName";

export const AppLeagueTitle = (record: TAppLeague): string => {
  return record.leagueName?.toString() || String(record.id);
};
