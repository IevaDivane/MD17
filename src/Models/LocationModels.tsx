export type Location = {
  info:LocationInfo;
  results:LocationResults[];
}
export type LocationInfo = {
  count:number;
  pages:number;
  next:string;
  prev:string;
}
export type LocationResults = {
  id:number;
  name:string;
  type:string;
  dimension:string;
  residents:string[];
  url:string;
  created:string;
}
