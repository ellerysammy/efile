import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkeararchivo'
})
export class LinkeararchivoPipe implements PipeTransform {

  transform(value: any, link: any): any {
    return "<a target='_blank' href='" + link.toString() + "'>" + value + "</a>";
  }

}
