import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

/** Importando as classes necessárias */
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { TutorialService } from './services/tutorial.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // adicionando o FormsModule para trabalhar com formulários para toda aplicação
    AngularFireModule.initializeApp(environment.firebaseConfig), // adicionando o AngularFireModule para toda aplicação
    AngularFireDatabaseModule, // adicionando o AngularFireDatabaseModule para toda aplicação
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
