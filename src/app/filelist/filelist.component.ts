import { FileserviceService } from './../services/fileservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent {

  archivos : any =  [];
  constructor(private fileService: FileserviceService) {
    this.obtenerTodos();
   }

  obtenerTodos(){
    this.fileService.obtenerListaDeArchivos().subscribe((data) => {
        if (data) {
          this.archivos = data;
        }
    },
    (error) => {
      console.error(error);
    });
  }

}
