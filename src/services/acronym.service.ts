import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acronym } from '../models/acronym';


@Injectable()
export class AcronymService {

  constructor(private http: HttpClient) { }

  getAcronyms() {
    return this.http.get('assets/acronyms/acronym-list.txt', {responseType: 'text'});
  }

}
