import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons: Person[];
  link = 'http://localhost:3000/persons';
  constructor(
    private http: HttpClient
  ) {}

  getPersonnes(): Observable<Person[]> {
    return this.http.get<Person []>(this.link);
  }

  getPersonById(id: number): Observable<Person>{
    return this.http.get<Person>(this.link + `/${id}`);
  }

  addPerson(person: Person): Observable <any> {
    return this.http.post(this.link, person);
  }

  updatePerson(person: Person): Observable <any> {
    return this.http.put(this.link + `/${person.id}`, person);
  }

  deletePerson(person: Person): Observable <any> {
    return this.http.delete(this.link + `/${person.id}`);
  }
}
