import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeComponent } from './persons/liste/liste.component';
import { EditComponent } from './persons/edit/edit.component';
import { AddComponent } from './persons/add/add.component';
import { DetailComponent } from './persons/detail/detail.component';
import { ItemComponent } from './persons/item/item.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    EditComponent,
    AddComponent,
    DetailComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
