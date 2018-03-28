import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AcronymService {

  constructor(private http: HttpClient) { }

  getAcronyms() {
    return this.http.get('assets/acronyms/acronyms.json', {responseType: 'json'});
  }

}
