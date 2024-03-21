import { InputComponent } from './../../atoms/input/input.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, PasswordModule, DialogModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public model: FormGroup = new FormGroup({})
  private builder: FormBuilder = new FormBuilder()

  ngOnInit(): void {
    this.model = this.getNewModel()
  }

  private getNewModel() {
    return this.builder.group({
      email: [undefined, [Validators.required]],
      senha: [undefined, [Validators.required]]
    })
  }

}
