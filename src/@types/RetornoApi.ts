//Tipagem dos dados que serão retornados pela API quando fizemos login:
export type LoginResultType = {
  status?: string,
  data: LoginResultDataType
}
export type LoginResultDataType = {
  auth: boolean,
  token: string,
  rota: string 
}