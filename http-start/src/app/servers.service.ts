import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) { }

  storeServer(servers: any[]) {
      const headers = new Headers({
          'Content-Type': 'aplication/json'
      });
    // return  this.http.post('https://udemy-ng-http-203b1.firebaseio.com/data.json', servers, {headers: headers});
    return  this.http.put('https://udemy-ng-http-203b1.firebaseio.com/data.json', servers, {headers: headers});
  }
  getServers() {
      return this.http.get('https://udemy-ng-http-203b1.firebaseio.com/data').map(
          (response: Response) => {
              const data = response.json();
              for (const server of data) {
                server.name = 'FETCHED_' + server.name;
              }
              return data;
          }
      ).catch(
          (error: Response) => {
              return Observable.throw('Something went wrong');
          }
      );
  }
  getAppName() {
      return this.http.get('https://udemy-ng-http-203b1.firebaseio.com/data/appName.json').map(
          (response: Response) => {
              return response.json();
          }
      );
  }

}
