# Persons

Créer un nouveau projet Angular avec la commande ng new persons
Créer les composants à utiliser:
Liste, Détail, Item, Add avec la commande ng g c add

Créer un model Person avec les attributs Id, Firstname, Lastname et Email adresse
Créer le ROUTING et l'ajouter à appModule pour assurer la navigation entre les composants

Créer le service Persons avec la commande ng g s persons
Ajouter les méthodes getPersons, getPersonById, addPerson, updatePerson et deletePerson en utilisant les observables du bibliothèque Rxjs

Note : j'ai utilisé Git Bash  comme éditeur de commande

*************************************************************
Créer un formulaire pour Ajouter une personne

Note : j'ai utilisé visual Studio Code comme éditeur

*************************************************************
Créer et configurer REST API Back-End  en utilisant  json-server 
npm install --save json-server
npm run server
http://localhost:3000/persons

These are the available API endpoints that we can consume using Angular HttpClient:

GET /persons for getting the persons,
GET /persons/<id> for getting a single person by id,
POST /persons for creating a new person,
PUT /persons/<id> for updating a person by id,
PATCH /persons/<id> for partially updating a person by id,
DELETE /persons/<id> for deleting a person by id.

Note : j'ai utilisé Postman pour tester l'Api  http://localhost:3000/persons



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server Back End

Run `npm run server` for a dev server. Navigate to `http://localhost:3000/persons`.

## Development server Front End

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
