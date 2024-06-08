import { AppRoundWhereInput } from "./AppRoundWhereInput";
import { AppRoundOrderByInput } from "./AppRoundOrderByInput";

export type AppRoundFindManyArgs = {
  where?: AppRoundWhereInput;
  orderBy?: Array<AppRoundOrderByInput>;
  skip?: number;
  take?: number;
};
