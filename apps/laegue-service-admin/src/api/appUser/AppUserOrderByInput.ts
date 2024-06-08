import { SortOrder } from "../../util/SortOrder";

export type AppUserOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  profileImage?: SortOrder;
  totalPoint?: SortOrder;
  updatedAt?: SortOrder;
};
