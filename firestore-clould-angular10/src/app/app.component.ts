import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** Barra de progresso */
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage){}

  /** Sem o botão enviar */
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe das porcentagens
    this.uploadPercent = task.percentageChanges();
    // retorna a URL
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }

  /************************************************************** */

  /** Com botão enviar */
  filePath = "";
  textInput = "Selecionar arquivo";

  uploadPegar(event) {    
    this.filePath = event.target.files[0];
    this.textInput = event.target.files[0].name;
  }
  uploadImagem(){
    const nameFile = '/img/images'+Math.random()+this.textInput; 
    // const name = nameFile.split('.') 
    const fileRef = this.storage.ref(nameFile);
    const task = this.storage.upload(nameFile, this.filePath);
     
    // observe das porcentagens
    this.uploadPercent = task.percentageChanges();
    // retorna a URL
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }
}
