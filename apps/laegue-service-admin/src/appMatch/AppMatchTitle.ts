import { AppMatch as TAppMatch } from "../api/appMatch/AppMatch";

export const APPMATCH_TITLE_FIELD = "result";

export const AppMatchTitle = (record: TAppMatch): string => {
  return record.result?.toString() || String(record.id);
};
