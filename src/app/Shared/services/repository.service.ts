import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable()

/*
  Service class which contains basic CRUD-functions, that are called within modules that needs it.
*/ 
export class RepositoryService {

  constructor(private http: HttpClient, private envURL: EnvironmentUrlService) {}

  public getData(route : string){
    return this.http.get(this.createCompleteRoute(route, this.envURL.urlAdress))
  }

  public create(route : string, body){
    return this.http.post(this.createCompleteRoute(route, this.envURL.urlAdress),
                          body, 
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
      headers: new HttpHeaders({'Content-type':'application/json'})
    }
  }
}
