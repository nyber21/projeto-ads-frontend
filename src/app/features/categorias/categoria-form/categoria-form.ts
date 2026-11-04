import { Component, effect, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Categoria } from '../../../models/categoria.model';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-categoria-form',
  styleUrl: './categoria-form.css',
  templateUrl: './categoria-form.html',
})
export class CategoriaForm {
  categoria = input<Categoria|null>(null);
  salvou = output<void>()
  cancelou = output<void>()
  erro = '';
  formulario = new FormGroup({
    descricao: new FormControl('',{
    nonNullable:true,
    validators:[
      Validators.required,
      Validators.minLength(3)
    ]}),
    tipo: new FormControl <'RECEITA' | 'DESPESA'> (
      'DESPESA',
      {nonNullable: true}
    ),
    ativo: new FormControl(true, {
      nonNullable: true
    })
  });
  constructor(private categoriaService:CategoriaService){
    effect(()=>{
      const categoria = this.categoria();
      this.erro = '';
      this.formulario.reset(categoria ? {
        descricao: categoria.descricao,
        tipo:categoria.tipo,
        ativo:categoria.ativo
      }:{
        descricao: '',
        tipo: 'DESPESA',
        ativo: true
      })
    })
  }
}
