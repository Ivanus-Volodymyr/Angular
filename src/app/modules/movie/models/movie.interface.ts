import {IResults} from "./result.interface";

export interface IMovie {
  page: number
  results?: IResults[]
  total_pages?: number
}
