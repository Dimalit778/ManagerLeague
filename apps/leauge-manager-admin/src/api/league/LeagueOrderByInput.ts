import { SortOrder } from "../../util/SortOrder";

export type LeagueOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  leagueCode?: SortOrder;
  leagueName?: SortOrder;
  members?: SortOrder;
  name?: SortOrder;
  rounds?: SortOrder;
  updatedAt?: SortOrder;
};
