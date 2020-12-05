import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  userId: string;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    return token && this.jwtHelper.decodeToken(token).role === 'admin';
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/auth/login',
        { email: email, password: password })
        .subscribe(
          (authData: { token: string, userId: string }) => {
            localStorage.setItem('token', authData.token);
            this.token = authData.token;
            this.userId = authData.userId;
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  logout() {
    localStorage.removeItem("token");
    this.userId = null;
    this.token = null;
  }

  getAllUser(): Observable<any> {
      return this.http.get('http://localhost:3000/api/auth/allUser');
  }

  createUser(email, password) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/auth/signup', { email: email, password: password })
        .subscribe((retour) => {
            resolve();
          }, (error) => {
            reject(error);
          }
        );
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/auth/' + id)
        .subscribe((retour) => {
            resolve();
          }, (error) => {
            reject(error);
          }
        );
    });
  }
}
