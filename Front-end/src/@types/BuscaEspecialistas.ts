//Tipagem dos dados que serão enviados à API quando bucarmos especialista pelo estado e/ou especialidade:
export type FormBuscarEspecialistasType = {
  estado: string,
  especialidade: string
}