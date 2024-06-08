import { SortOrder } from "../../util/SortOrder";

export type AppLeagueOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isSelected?: SortOrder;
  joinCode?: SortOrder;
  leagueCode?: SortOrder;
  leagueName?: SortOrder;
  members?: SortOrder;
  updatedAt?: SortOrder;
};
