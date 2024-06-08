import { AppRound as TAppRound } from "../api/appRound/AppRound";

export const APPROUND_TITLE_FIELD = "id";

export const AppRoundTitle = (record: TAppRound): string => {
  return record.id?.toString() || String(record.id);
};
