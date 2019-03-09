import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FileserviceService {

  constructor(private efiledb: AngularFirestore) { }

  obtenerListaDeArchivos(){
    return this.efiledb.collection('documents', ref => ref.orderBy('fechacreacion', 'desc')).valueChanges();
  }
  
  registrarArchivo(archivo){
    this.efiledb.collection('documents').add(archivo);
  }

}
