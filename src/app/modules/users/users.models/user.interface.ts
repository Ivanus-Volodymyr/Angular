import {IAddress} from "./user.address.interface";
import {ICompany} from "./user.company.interface";

export interface IUser {
  id: number;
  name : string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

