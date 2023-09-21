import { IUser } from "./User";

type ILike = {
  userId: string;
  userName: string;
  userImage: string;
};

type IComment = {
  userId: string;
  userName: string;
  userImage: string;
};

export type IMedia = {
  _id?: string;
  owner: string;
  description: string;
  image: string;
  userImage: string;
  added_by: string | IUser;
  like: ILike[];
  comments: IComment[];
};
