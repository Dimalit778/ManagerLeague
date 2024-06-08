import { League as TLeague } from "../api/league/League";

export const LEAGUE_TITLE_FIELD = "id";

export const LeagueTitle = (record: TLeague): string => {
  return record.id?.toString() || String(record.id);
};
