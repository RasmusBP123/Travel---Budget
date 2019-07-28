import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { $ } from 'protractor';

@Injectable()

/*
  Service class which contains basic CRUD-functions, that are called within modules that needs it.
*/ 
export class RepositoryService {

  private headers : HttpHeaders;

  constructor(private http: HttpClient, private envURL: EnvironmentUrlService) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'})
  }

  public getData(accessPoint : string){
    return this.http.get(accessPoint, {headers: this.headers});
  }

   public getSingleData(accessPoint : string, id : number){
    return this.http.get(accessPoint + id, {headers: this.headers})
  }

  public create(accessPoint : string, payload : any){
    return this.http.post(accessPoint + 'create',
                          payload, 
                          {headers: this.headers});
  }

  public createPost(accessPoint : string, id : number, payload : any){
    return this.http.post(`${accessPoint}/${id}/create`,
                          payload, 
                          {headers: this.headers});
  }

  public update(accessPoint : string, id : number, payload){
    return this.http.patch(accessPoint + id, {headers : this.headers});
  }

  public delete(accessPoint : string, id : number){
    return this.http.delete(accessPoint + id, this.generateHeaders());
  }

  private generateHeaders(){
    return{
      headers: new HttpHeaders({'Content-type':'application/json; charset=utf-8'})
    }
  }
}
