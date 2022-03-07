export const URL = "http://localhost:5000";

export interface LoginData {
  email: string;
  password: string;
}

export interface UserInfoData extends LoginData {
  firstName: string;
  lastName: string;
}

export interface TransactionTransferData {
  title: string;
  amount: number;
}

export type TransactionType = "income" | "expense";

export interface ItemData {
  _id: string;
  title: string;
  amount: number;
  type: TransactionType;
}