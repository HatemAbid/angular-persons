import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  errorMessage = '';
  person: Person;
  constructor(
    private personsService: PersonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personsService.getPersonById(params.id).subscribe(
          (person) => {
            this.person = person;
          },
          (error) => {
            this.errorMessage = `Probléme de connexion au serveur`;
            // alert('Erreur');
            console.log(error);
          }
        );
      }
    );
  }

  editPerson(): void{
    this.router.navigate(['edit', this.person.id]);
  }

  deletePerson(): void{
    let res = confirm('Are you sure?');
    if (res){
      this.personsService.deletePerson(this.person).subscribe(
        (reponse) => {
          const link = ['liste'];
          this.router.navigate(link);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
