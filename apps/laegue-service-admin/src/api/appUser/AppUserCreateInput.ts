import { LeagueCreateNestedManyWithoutAppUsersInput } from "./LeagueCreateNestedManyWithoutAppUsersInput";
import { InputJsonValue } from "../../types";

export type AppUserCreateInput = {
  leagues?: LeagueCreateNestedManyWithoutAppUsersInput;
  name?: string | null;
  profileImage?: InputJsonValue;
  totalPoint?: number | null;
};
