import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortRoutes',
})
export class SortRoutesPipe implements PipeTransform {

  transform(routes: any[], property: string, ascending: boolean) {
    if (ascending) {
      return routes.sort((a,b)=>{return a[property] - b[property]});
    } else {
      return routes.sort((a,b)=>{return b[property] - a[property]});
    }
  }
}
