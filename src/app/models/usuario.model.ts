export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha_hash: string;
    perfil: string;
    ativi: boolean;
}

export type UsuarioInput = Omit<Usuario, 'id'>;