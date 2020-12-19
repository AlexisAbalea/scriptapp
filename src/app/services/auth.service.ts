import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../data/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  userId: string;

  user: User = new User();

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, public router: Router) { }

  SERVER = environment.urlAddress;

  checkValidToken() {
      this.http.get(this.SERVER + '/api/connect').subscribe(succes => {
        console.log('token success');
      }, error => {
        localStorage.clear();
        this.router.navigate(['login']);
      });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    return token && this.jwtHelper.decodeToken(token).role === 'admin';
  }

  login(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(
        this.SERVER + '/api/auth/login',
        { email: email, password: password })
        .subscribe(
          (authData: { token: string, userId: string }) => {
            this.user.email = email;
            localStorage.setItem('token', authData.token);
            localStorage.setItem('user', JSON.stringify(this.user));
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

  setUserStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    } else {
      localStorage.clear();
      this.router.navigate(['login']);
    }
  }

  logout() {
    localStorage.removeItem("token");
    this.userId = null;
    this.token = null;
  }

  getAllUser(): Observable<any> {
      return this.http.get(this.SERVER + '/api/auth/allUser');
  }

  createUser(email, password) {
    return new Promise<void>((resolve, reject) => {
      this.http.post(this.SERVER + '/api/auth/signup', { email: email, password: password })
        .subscribe((retour) => {
            resolve();
          }, (error) => {
            reject(error);
          }
        );
    });
  }

  deleteUser(id) {
    return new Promise<void>((resolve, reject) => {
      this.http.delete(this.SERVER + '/api/auth/' + id)
        .subscribe((retour) => {
            resolve();
          }, (error) => {
            reject(error);
          }
        );
    });
  }

  changeMdp(email, password, ancienPassword) {
    return this.http.patch(this.SERVER + '/api/auth/changePassword', { email: email, password: password, oldpassword: ancienPassword });
  }
}
