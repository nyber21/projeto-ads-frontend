import { Injectable } from '@angular/core';
import {
  Categoria,
  CategoriaInput
} from '../../models/categoria.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private readonly API = `${environment.apiUrl}/lancamentos`;

  constructor(private http:Http)Lancamento

  listar(): Observable<Lancamento[]>{
    return this.http.get<Lancamento[]>(this.API);
  }

  buscarPorId(id: number): Observable<Lancamento> {
    return this.http.get<Lancamento>(`${this.API}/${id}`);
  }

  cadastrar(dados: LancamentoInput): Observable<Lancamento> {
    return this.http.post<Lancamento>(this.API,dados);
  }

  atualizar(id: number, dados: LancamentoInput): Observable<Lancamento> {
    return this.http.put<Lancamento>(`${this.API}/${id}`,dados);
  }
}
