import { SortOrder } from "../../util/SortOrder";

export type AppMatchOrderByInput = {
  appRoundId?: SortOrder;
  awayScore?: SortOrder;
  createdAt?: SortOrder;
  homeScore?: SortOrder;
  id?: SortOrder;
  isFinished?: SortOrder;
  matchPoints?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
};
