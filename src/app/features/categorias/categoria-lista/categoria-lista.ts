import { Component, OnInit } from '@angular/core';
import { CategoriaForm } from '../categoria-form/categoria-form';
import { Categoria } from '../../../models/categoria.model';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  imports: [CategoriaForm],
  selector: 'app-categoria-lista',
  styleUrl: './categoria-lista.css',
  templateUrl: './categoria-lista.html',
})
export class CategoriaLista implements OnInit{
  categorias!:Categoria[];
  constructor(private categoriaService: CategoriaService){

  }
  ngOnInit(): void {
    this.categorias = this.categoriaService.listar();
  }
}
