import { IUser } from "./User";

export type IMedia = {
  _id?: string;
  description: string;
  image: string;
  added_by: string | IUser;
};
