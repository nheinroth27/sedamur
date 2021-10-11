import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private route: Router) {
    this.loginForm = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.loginForm.value.usuario;
    const password = this.loginForm.value.password;

    if ( usuario  == 'sedamur' && password == 'dan.skx347z') {
      //Redireccionamos al escritorio
      this.cargaFalsa();
      this.loginForm.reset();
    }
    else{
      //Mensaje de error
      this.error();
    }

  }

  error(){
    this._snackBar.open('Usuario y/o Contraseña inválidos','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition:'bottom'
    })
  }

  cargaFalsa(){
    this.loading = true;
    setTimeout(() => {


      this.route.navigate(['escritorio']);
    }, 1500);
  }

}
