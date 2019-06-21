import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable()

/*
  Service class which contains basic CRUD-functions, that are called within modules that needs it.
*/ 
export class RepositoryService {

  private headers : HttpHeaders;
  private accessPointUrl = "http://localhost:53452/api/expense/";

  constructor(private http: HttpClient, private envURL: EnvironmentUrlService) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
  }

  public getData(){
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

/*   public getSingleData(route : string, id : number){
    return this.http.get(this.accessPointUrl + '{{id}}', {headers: this.headers})
  } */

  public create(payload : string){
    return this.http.post(this.accessPointUrl,
                          payload, 
                          this.generateHeaders());
  }

  public update(route : string, body){
    return this.http.put(this.createCompleteRoute(route, this.envURL.urlAdress),
                          body, 
                          this.generateHeaders());
  }

  public delete(route : string){
    return this.http.delete(this.createCompleteRoute(route, this.envURL.urlAdress));
  }

  private createCompleteRoute(route: string, envAddress: string): string {
    return '${envAddress}/${route}'
  }

  private generateHeaders(){
    return{
      headers: new HttpHeaders({'Content-type':'application/json; charset=utf-8'})
    }
  }
}
