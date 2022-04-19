import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : string = "http://localhost:3001/users";
  constructor(private _http: HttpClient) { }

  //find all users
  public getUsers() : Observable<any> {
    return this._http.get(this.baseUrl);
  }

    //find user by id
    public getUser(id: string) : Observable<any> {
      const url = `${this.baseUrl}/${id}`
      return this._http.get(this.baseUrl);
    }



  //store user which will have { _id, name, age }
  public storeUser(formValue: any): Observable<any> {
    return this._http.post(this.baseUrl, formValue);
  }
  

  //delete user by using {_id}
  deleteData(id: string): Observable<any> {
    return this._http.delete(`${this.baseUrl}/delete/${id}`)
}


  updateData(data: any, id: string): Observable<any> {
    return this._http.patch(`${this.baseUrl}/update/${id}`, data)
}
}
