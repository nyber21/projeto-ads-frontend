import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-categoria-form',
  styleUrl: './categoria-form.css',
  templateUrl: './categoria-form.html',
})
export class CategoriaForm {
  formulario = new FormGroup({
    descricao: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    tipo: new FormControl <'RECEITA' | 'DESPESA'> (
      'DESPESA',
      {nonNullable: true}
    ),
    ativo: new FormControl(true, {
      nonNullable: true
    })
  });
}
