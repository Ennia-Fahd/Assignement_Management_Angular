import { Injectable } from '@angular/core';
import { User } from '../login/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users : User[]=[];
  autenticatedUser:User|undefined;

  

  constructor() {
    this.users.push({userId:1,username:"Fahd",password:"Fahd",roles:["User","Admin"]});
    this.users.push({userId:2,username:"Ahmed",password:"Ahmed",roles:["User"]});
    this.users.push({userId:3,username:"Zainab",password:"Zainab",roles:["User"]});
   }

   login(username: string, password: string): Observable<User> {
    let user = this.users.find(u => u.username === username);

    if (!user) {
      console.error("User not found");
      return of({ error: 'User not found' } as any);
    }

    if (user.password !== password) {
      console.error("Password failed");
      return of({ error: 'Password failed' } as any);
    }
    return of(user);
  }

  public authenticate(user:User):Observable<boolean>{
    this.autenticatedUser=user;
    localStorage.setItem("authUser",JSON.stringify({username:user.username,roles:user.roles,jwt:"JWT_TOKEN"}));
    return of(true);
  }

  public hasRole(role:String):boolean{
    return this.autenticatedUser?.roles?.includes(role)?? false;
  }

  public isAuthenticated(){ //isLogged
    return this.autenticatedUser!=undefined
  }

  public isAdmin(){ //isAdmin
    return this.autenticatedUser?this.hasRole("Admin"):false;
  }

  public Logout():Observable<boolean>{
    this.autenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }
}
