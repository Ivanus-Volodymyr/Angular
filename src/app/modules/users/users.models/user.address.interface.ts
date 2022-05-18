import {IGeo} from "./user.geo.inteface";

export interface IAddress{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
