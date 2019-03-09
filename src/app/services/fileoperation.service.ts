import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileoperationService {

  constructor(private fbStorage : AngularFireStorage) { }

  public refToFile : AngularFireStorageReference;

  uploadFile(filePath, file){
    this.refToFile = this.fbStorage.ref(filePath);
    return this.fbStorage.upload(filePath, file);
  }
}
