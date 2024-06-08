import { AppUser } from "../appUser/AppUser";

export type League = {
  appUser?: AppUser | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
