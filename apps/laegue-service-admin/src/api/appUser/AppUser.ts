import { League } from "../league/League";
import { JsonValue } from "type-fest";

export type AppUser = {
  createdAt: Date;
  id: string;
  leagues?: Array<League>;
  name: string | null;
  profileImage: JsonValue;
  totalPoint: number | null;
  updatedAt: Date;
};
