import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor(private efiledb: AngularFirestore) { }

  listaTiposDocumentos(){
    return this.efiledb.collection('tipodocumento').valueChanges();
  }
}
