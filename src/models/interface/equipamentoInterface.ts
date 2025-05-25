export interface Equipamento {
  id?: number;
  nomeEquip: string;
  descricaoEquip: string;
  dataManutencao: Date;
  proximaManutencao: Date;
  codigoEquip: number;
  marcaEquip: string;
  rangeTipo: number;
  numeroSerie: string;
  modelo: string;
}
