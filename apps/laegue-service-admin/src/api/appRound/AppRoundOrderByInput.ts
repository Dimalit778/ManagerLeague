import { SortOrder } from "../../util/SortOrder";

export type AppRoundOrderByInput = {
  appLeagueId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isFinished?: SortOrder;
  roundNumber?: SortOrder;
  updatedAt?: SortOrder;
};
