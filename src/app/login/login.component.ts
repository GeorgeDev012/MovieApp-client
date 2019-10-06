import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import 'src/assets/js/form-validation.js';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { CSRFManagerService } from '../_services/csrf-manager.service';
declare var validateObject: any;

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})


export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;
    statusMessage: string;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private userAuthService: UserAuthService,
        private csrfManagerService: CSRFManagerService
        ) {
    }

    get f() { return this.loginForm.controls; }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: ['']
        })

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    
    onSubmit() {
        if(this.loginForm.invalid) {
            return;
        }
        
        this.userService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                response => {
                    this.userAuthService.setJWTToken(response);
                    this.statusMessage = 'Login successful! Just a moment ...';
                    setTimeout(() => {
                        this.router.navigate(['/']);
                    }, 1000);
                },
                error => {
                    this.statusMessage = error.error.message;
                }
            )
        
    }
}