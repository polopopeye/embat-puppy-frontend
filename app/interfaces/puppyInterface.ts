export type PuppyInterface = {
  id?: string;

  completeName: boolean;
  description: string;
  profileImage: string;
  skills: Array<string>;

  createdAt?: Date;
  updatedAt?: Date;
};
