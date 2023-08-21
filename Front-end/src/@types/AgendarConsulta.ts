export type FormAgendarConsultaType = {
  //Data consulta:
  data: Date;
  //Id especialista com o qual será agendada a consulta:
  especialista: string;
  //Id paciente que está agendando a consulta:
  paciente: string;
  //Dois outros parâmetros que não são obrigatórios:
  desejaLembrete?: boolean;
  lembretes?: Array<number>;
};
