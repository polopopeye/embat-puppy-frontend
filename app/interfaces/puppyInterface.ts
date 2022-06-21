export type PuppyInterface = {
  id?: string;

  completeName: boolean;
  description: string;
  profileImage: string;
  skills: Array<string>;

  heart?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
};
