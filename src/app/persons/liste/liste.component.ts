import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  persons: Person[];
  errorMessage = '';
  constructor(
    private personService: PersonsService
  ) { }

  ngOnInit(): void {
    this.personService.getPersonnes().subscribe(
      (persons) => {
        this.persons = persons;
      },
      (error) => {
        this.errorMessage = `Probléme de connexion au serveur`;
        // alert('Erreur');
        console.log(error);
      }
    );
  }

}
