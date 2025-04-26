export type AccountCredentials = {
  [key: string]: AccountCredential;
};

export type AccountCredential = {
  email: string;
  password: string;
};
