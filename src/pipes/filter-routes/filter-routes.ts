import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRoutes',
})
export class FilterRoutesPipe implements PipeTransform {

  transform(routes: any[], grade : any) {
    if (!grade || grade === 'any'){
      return routes;
    } else {
      return routes.filter((route)=>{return route.grade === grade})
    }

  }
}
