import { Injectable } from '@angular/core';
import { MockDataService } from './mock-data.service';

@Injectable()
export class ApiService {

  constructor(private mockData: MockDataService) { }

  getCountryById(id: number) {
    return this.mockData.getCountryById(id);
  }

  getRegionById(id: number) {
    return this.mockData.getRegionById(id);
  }

  getAreaById(id: number) {
    return this.mockData.getAreaById(id);
  }

  getCragById(id: number) {
    return this.mockData.getCragById(id);
  }

  getRouteById(id: number) {
    return this.mockData.getRouteById(id);
  }

  getPitchById(id: number) {
    return this.mockData.getPitchById(id);
  }

  getRegionsByCountry(countryId: number){
    return this.mockData.getRegionsByCountry(countryId);
  }

  getAreasByRegion(regionId: number){
    return this.mockData.getAreasByRegion(regionId);
  }

  getCragsByArea(areaId: number){
    return this.mockData.getCragsByArea(areaId);
  }

  getRoutesByCrag(cragId: number){
    return this.mockData.getRoutesByCrag(cragId);
  }

  getAllCountries(){
    return this.mockData.getAllCountries();
  }

  getAllRoutes(){
    return this.mockData.getAllRoutes();
  }

  getTicklistedRoutes(){
    return this.mockData.getTicklistedRoutes();
  }

}
