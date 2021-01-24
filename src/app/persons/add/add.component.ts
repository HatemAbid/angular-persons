import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  errorMessage = '';
  constructor(
    private personsService: PersonsService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  addPerson(formulaire: NgForm): void{
    // this.personsService.addPerson(formulaire.value);
    // this.router.navigate(['liste']);
    this.personsService.addPerson(formulaire.value).subscribe(
      (reponse) => {
        const link = ['liste'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = `Probléme de connexion au serveur`;
        // alert('Erreur');
        console.log(error);
      }
    );
  }

}
