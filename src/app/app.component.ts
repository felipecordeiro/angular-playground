import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playground';
  form: FormGroup
  generos: string[] = ['Masculino', 'Feminino']

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      nome: [null, [Validators.required, Validators.maxLength(20)]],
      idade: [null, [Validators.required, Validators.min(18), Validators.max(100)]],
      descricao: [null, [Validators.required, Validators.minLength(5)]],
      data: [null, [Validators.required]],
      genero: [null, [Validators.required]]
    })
  }
}
