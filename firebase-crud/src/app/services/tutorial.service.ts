import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Tutorial from '../models/tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private dbPath = '/tutorials';

  tutorialsRef: AngularFireList<Tutorial> = null;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  /** Lista todos os tutoriais */
  getAll(): AngularFireList<Tutorial> {
    return this.tutorialsRef;
  }

  /** Cria um novo tutorial */
  create(tutorial: Tutorial): any {
    return this.tutorialsRef.push(tutorial);
  }

  /** Atualiza um tutorial */
  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  /** Deleta um tutorial */
  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  /** Deleta todos os tutoriais */
  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
}
