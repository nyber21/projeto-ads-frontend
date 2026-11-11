import { Categoria } from "./categoria.model";
import { Usuario } from "./usuario.model";

export interface Lancamento {
  id: number;
  descricao: string;
  valor: number;
  data_lancamento: Date;
  observacao: string;
  categoria_id: Categoria['id'];
  usuario_id: Usuario['id'];
}
export type LancamentoInput = Omit<Lancamento, 'id'>;