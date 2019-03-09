import { FileoperationService } from './../services/fileoperation.service';
import { FileserviceService } from './../services/fileservice.service';
import { FormulariosService } from './../services/formularios.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { debug } from 'util';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  tiposDocumento : any = [];
  documento : any = {};
  selectedFiles : FileList;
  progresoArchivo : number = 0;
  downloadURL;
  nombreArchivo = "Seleccione un archivo...";
  constructor(private formulariosService: FormulariosService, private fileService : FileserviceService, private fileoperationService : FileoperationService) { }

  ngOnInit() {
    this.documento.tipo = 0;
    this.formulariosService.listaTiposDocumentos().subscribe((data) => {
      this.tiposDocumento = data;
    },
    (error) => {
      console.error("$Error obteniendo tipos de documentos, Error: {error}");
    })
  }

  registrarArchivo(){
    let uploadTask = this.subirArchivo();
    uploadTask.percentageChanges().subscribe(progreso => {
      this.progresoArchivo = progreso;
    });
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        this.fileoperationService.refToFile.getDownloadURL().subscribe(data => {
          this.downloadURL = data;
          this.documento.urlarchivo = this.downloadURL;
          this.documento.fechacreacion = Date.now();
          this.fileService.registrarArchivo(this.documento);
          this.documento = {};   
          this.documento.tipo = 0
          this.progresoArchivo = 0;
          this.nombreArchivo = "Seleccione un archivo...";
        })
      } )
      ).subscribe()
  }

  subirArchivo(){
    const file = this.selectedFiles.item(0);
    let filename = Date.now().toString() + file.name;
    const filePath = filename;
    return this.fileoperationService.uploadFile(filePath, file);
  }

  detectarArchivo(event){
    this.selectedFiles = event.target.files;
    this.nombreArchivo = this.selectedFiles.item(0).name;
  }
}
