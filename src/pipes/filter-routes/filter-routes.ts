import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRoutes',
})
export class FilterRoutesPipe implements PipeTransform {
  returnArray: any[] = [];
  
  transform(routes: any[], grade : any, searchTerm : string) {
    if (!grade || grade === 'any'){
      if(searchTerm){
        return routes.filter((route)=>{return route.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1});
      } else {
        return routes;
      }
    } else {
      if(searchTerm){
        return routes.filter((route)=>{return route.grade === grade && route.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1});
      } else {
        return routes.filter((route)=>{return route.grade === grade});
      }
    }
  }
}
