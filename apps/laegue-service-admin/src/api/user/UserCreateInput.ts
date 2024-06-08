import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
