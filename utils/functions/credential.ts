import fs from "fs";
import { AccountCredentials } from "../../src/models/account-credentials";

export function loadCredential(account: string): {
  email: string;
  password: string;
} {
  const rawData = fs.readFileSync("src/data/credentials.json", "utf-8");
  const credentials: AccountCredentials = JSON.parse(rawData);
  const accountCredential = credentials[account];
  if (!accountCredential) {
    throw new Error("Not found account credential");
  }
  return accountCredential;
}
