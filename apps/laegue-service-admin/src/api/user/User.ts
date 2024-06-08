import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
