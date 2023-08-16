//Tipagem dos dados que serão retornados pela API quando fizemos login:
export type LoginResultType = {
  data: LoginResultDataType
  status?: "string"
  // message?: "string"
}
export type LoginResultDataType = {
  auth: boolean,
  token: string,
  rota: string 
}

//Tipagem dos dados que são retornados pelo token:
export type tokenReturnDataType = {
  "id": string,
  "role": string,
  "iat"?: number | string,
  "exp"?: number | string
}