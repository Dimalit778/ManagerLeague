import { AppMatchWhereInput } from "./AppMatchWhereInput";
import { AppMatchOrderByInput } from "./AppMatchOrderByInput";

export type AppMatchFindManyArgs = {
  where?: AppMatchWhereInput;
  orderBy?: Array<AppMatchOrderByInput>;
  skip?: number;
  take?: number;
};
