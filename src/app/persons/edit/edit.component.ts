import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  errorMessage = '';
  person: Person;
  constructor(
    private activatedRoute: ActivatedRoute,
    private personsService: PersonsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personsService.getPersonById(params.id).subscribe(
          (person) => {
            this.person = person;
          }
        );
      }
    );
  }

  savePerson(): void{
    this.personsService.updatePerson(this.person).subscribe(
      (reponse) => {
        const link = ['liste'];
        this.router.navigate(link);
      }
    );
  }

}
