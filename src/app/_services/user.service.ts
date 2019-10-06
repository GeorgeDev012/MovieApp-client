import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CSRFManagerService } from './csrf-manager.service';
import { UserAuthService } from './user-auth.service';
import { CookieService } from 'ngx-cookie-service';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient, private userAuthService: UserAuthService,
        private csrfManagerService: CSRFManagerService, private cookieService: CookieService) {}

    getAll() {
        return this.http.get<User[]>('http://127.0.0.1:8000/users');
    }

    register(user: User) {
        let headers = new HttpHeaders({
            'X-CSRFToken': this.csrfManagerService.getToken(),
            'Content-Type': 'application/json'
        })
        return this.http.post('http://127.0.0.1:8000/users/register/', user, { headers: headers });
    }

    login(username: string, password: string) {
        let headers = new HttpHeaders({
            'X-CSRFToken': this.csrfManagerService.getToken(),
            'Content-Type': 'application.json'
        });
        return this.http.post('http://127.0.0.1:8000/users/authenticate/', { username, password }, 
            { headers: headers, observe: 'response' })
    }

    logout() {
        let headers = new HttpHeaders({
            'X-CSRFToken': this.csrfManagerService.getToken(),
            'Content-Type': 'application/json',
            'Authorization': this.userAuthService.getJWTToken()
        });
        return this.http.post('http://127.0.0.1:8000/users/logout/', '',
            { headers: headers, observe: 'response'});
    }

    clearToken() {
        this.userAuthService.clearToken();
    }
    
    delete(id: number) {
        return this.http.delete(`http://127.0.0.1:8000/users/${id}/`)
    }

}

