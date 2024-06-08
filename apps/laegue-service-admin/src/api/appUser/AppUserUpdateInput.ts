import { LeagueUpdateManyWithoutAppUsersInput } from "./LeagueUpdateManyWithoutAppUsersInput";
import { InputJsonValue } from "../../types";

export type AppUserUpdateInput = {
  leagues?: LeagueUpdateManyWithoutAppUsersInput;
  name?: string | null;
  profileImage?: InputJsonValue;
  totalPoint?: number | null;
};
