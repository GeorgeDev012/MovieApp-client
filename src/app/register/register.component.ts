import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import 'src/assets/js/form-validation.js';
declare var validateObject: any;

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    statusMessage: string = '';
    constructor(private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router) { }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            username: [''],
            password: [''],
            first_name: [''],
            last_name: ['']
        })
    }

    addUser(): void {
        if (validateObject.validateRegisterForm()) {
            if (this.registerForm.invalid) return;
            this.userService.register(this.registerForm.value)
                .pipe(first())
                .subscribe(
                    data => {
                        this.statusMessage = 'User succesfully created. Use the login form with the username/password.',
                        this.router.navigate(['/login/'])
                    },
                    error => { 
                        this.statusMessage = 'Could not register user.',
                        console.log(error) 
                    }
                )
        }
    }

}