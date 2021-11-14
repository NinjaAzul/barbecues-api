type Users = {
  id: string;
  email: string;
  updated_at: Date;
  created_at: Date;
};

declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: Users;
    token: string;
  }
}
