import { League as TLeague } from "../api/league/League";

export const LEAGUE_TITLE_FIELD = "leagueName";

export const LeagueTitle = (record: TLeague): string => {
  return record.leagueName?.toString() || String(record.id);
};
