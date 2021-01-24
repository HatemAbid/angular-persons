import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() person: Person;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  detailPerson(): void{
    this.router.navigate(['detail', this.person.id]);
  }

}
