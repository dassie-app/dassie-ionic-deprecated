import { Injectable } from '@angular/core';
import _ from 'lodash/core';

@Injectable()
export class MockDataService {

  mockData = {
    countries: {
      1: {
        id: 1,
        name: "South Africa",
        description: "This is the description for South Africa",

      }
    },
    regions: {
      1: {
        id: 1,
        country: 1,
        name: "Waterval Boven",
        description: "This is the description for Waterval Boven",

      }
    },
    areas: {
      1: {
        id: 1,
        region: 1,
        name: "The Restaurant Area",
        description: "If you visit one crag at the Restaurant Area make it the Restaurant Crag itself! This was the first area to be developed at Boven, back in the early nineties, and still hosts some of the highest quality climbing in Boven, up to 29. The crags are situated around the Elandskrans Resort (now closed.)"

      }
    },
    crags: {
      1: {
        id: 1,
        area: 1,
        name: "The School",
        description: "A small crag, perhaps good for a warm up before going on to Restaurant or Triple Tier.",
        height: 15,
        aspect: "South East. Shady by late morning.",
        approach: "As for The Restaurant Crag (below). Either walk in from the base of the Restaurant Crag, or park just before the conference hall, there is a poor path leading down into the valley over a small wall. This path leads steeply down the hillside to the river. About 50m down you will see a small path on the left, heading slightly upwards till you find the first routes after 40m or so. " 
      },
      2: {
        id: 2,
        area: 1,
        name: "The Restaurant Crag ",
        description: "This crag did not make the front cover of Rotpunkt for nothing, one of Boven’s best. The clean leaning orange faces host some incredible routes, especially in the 20’s. Jambo and Bonar to name just a couple. ",
        height: 28,
        aspect: "Southeast. Shady by late morning. This crag is often dry when other crags are wet, it dries almost instantly and is gently overhanging.",
        approach: "If coming from town from Roc ‘n Rope. After a couple of kilometers the Elandskrans Resort is reached on the left, before the road becomes a gravel road. If from Tranquilitas It is on the right just after the start of the tar road. \nOn foot, pass the swimming pools, heading right towards the cliffs past a warning sign (steep cliffs etc.). Before reaching the viewpoint at the top of the Gaper buttress, turn sharp right and after 20 metres the path forks, go left and down steeply through trees over some slippery rocks. If you go down immediately beside (on right looking out) of the Gaper Buttress viewpoint you will end up in a gully that is the access for Gaper itself. "

      },
      3: {
        id: 3,
        area: 1,
        name: "Gaper Buttress",
        description: "The obvious buttress down and right past the swimming pools at Elandskrans. Only a few routes but hosts one of the best 24’s and 27 in Boven. When the campsite is busy, the top of this crag can be popular with gapers (tourists), hence the name",
        height: 27,
        aspect: "Southeast. Shady by late morning. Hardly ever wet. ",
        approach: "As for the Restaurant except take the trail going steeply down just to the right before walking onto the top of the Gaper viewpoint. "
      },
      4: {
        id: 4,
        area: 1,
        name: "Gaper Face",
        description: "The place to be if you love thin face climbing.",
        height: 15,
        aspect: "Some routes here are protected from the morning sun and it gets into full shade around lunch time.",
        approach: "As for Gaper Butress, just keep walking right and uphill from the base of the Gaper Buttress"
      },
      5: {
        id: 5,
        area: 1,
        name: "Easter Face",
        description: "Similar climbing to Gaper Face. Your finger strength should be up after these routes. ",
        height: 13,
        approach: "Walk in from the pools. Turn left before stepping onto Gaper Buttress. After about 100m a trail ducks right down the hill. Keep right and against the cliff face. The routes on this crag start by a huge boulder on your left. "
      },
      6: {
        id: 6,
        area: 1,
        name: "Monsoon Wall",
        description: "A fun little crag. A bit short but one or two nice lines",
        height: 15,
        aspect: "Monsoon Wall faces East with some of the routes situated on the south-facing angles or corners. Lots of (interesting) vegetation and trees at the base of this crag make for a shady belay place at any time.",
        approach: "From the swimming pools, walk down towards Gaper Buttress, past the warning sign. Follow the main path along the cliff top, after a 100 metres o so the path starts to descend, don’t go down, leaft the path and continue walking along the top of the cliffs until you are approx 250 metres from the pools. Look carefully and you will a ‘slot’ where a section of the cliff is detached. Hop across onto the block and you are at the top of the climbs. To get down, walk back along the cliff 8 metres, there is a small cairn (pile of stones) indicating the scramble down through the tree and into the gulley. Go down the gulley rightwards then back around left to the base of the climbs. You will arrive at the climbs beside Tropical Front."
      },

    },
    routes: {
      1: {
        id: 1,
        crag: 1,
        name: "Tranquilitas 1",
        description: "This is the description for Tranquilitas 1",
        grade: 26,
        stars: 5,
        bolts: 16,
        order: 0

      },
      2: {
        id: 2,
        crag: 1,
        name: "Tranquilitas 2",
        description: "This is the description for Tranquilitas 1",
        grade: 22,
        stars: 4,
        bolts: 16,
        order: 1

      },
      3: {
        id: 3,
        crag: 1,
        name: "Tranquilitas 3",
        description: "This is the description for Tranquilitas 1",
        grade: 23,
        stars: 3,
        bolts: 16,
        order: 2

      },
      4: {
        id: 4,
        crag: 2,
        name: "God No 1",
        description: "This is the description for God No 2",
        grade: 16,
        stars: 5,
        bolts: 16,
        order: 0

      },
      5: {
        id: 5,
        crag: 2,
        name: "God No 2",
        description: "This is the description for God No 3",
        grade: 18,
        stars: 3,
        bolts: 16,
        order: 1

      },
      6: {
        id: 6,
        crag: 2,
        name: "God No 3",
        description: "This is the description for God No 4",
        grade: 31,
        stars: 4,
        bolts: 16,
        order: 2

      },
      7: {
        id: 7,
        crag: 2,
        name: "God No 4",
        description: "This is the description for God No 5",
        grade: 28,
        stars: 2,
        bolts: 16,
        order: 3

      }
    },
    pitches: {
      1: {
        id: 1,
        route: 1,
        number: 1

      },
      2: {
        id: 2,
        route: 2,
        number: 1

      },
      3: {
        id: 3,
        route: 3,
        number: 1

      },
      4: {
        id: 4,
        route: 4,
        number: 1

      },
      5: {
        id: 5,
        route: 5,
        number: 1

      },
      6: {
        id: 6,
        route: 6,
        number: 1

      },
      7: {
        id: 7,
        route: 7,
        number: 1

      },
    }
  }
  constructor() { }

  getCountryById(id: number) {
    return this.mockData.countries[id];
  }

  getRegionById(id: number) {
    return this.mockData.regions[id];
  }

  getAreaById(id: number) {
    return this.mockData.areas[id];
  }

  getCragById(id: number) {
    return this.mockData.crags[id];
  }

  getRouteById(id: number) {
    return this.mockData.routes[id];
  }

  getPitchById(id: number) {
    return this.mockData.pitches[id];
  }

  getRegionsByCountry(countryId: number){
    return _.filter(this.mockData.regions, {'country': countryId});
  }

  getAreasByRegion(regionId: number){
    return _.filter(this.mockData.areas, {'region': regionId});
  }

  getCragsByArea(areaId: number){
    return _.filter(this.mockData.crags, {'area': areaId});
  }

  getRoutesByCrag(cragId: number){
    return _.filter(this.mockData.routes, {'crag': cragId});
  }

  getAllCountries(){
    let keys = _.keys(this.mockData.countries);
    let countries = keys.map(key => {
      return this.mockData.countries[key];
      //countries.push(this.mockData.countries[key])
    });
    return countries;
  }

  getTicklistedRoutes(){
    return _.filter(this.mockData.routes, {'ticklisted': true});
  }

  getSentRoutes(){
    return _.filter(this.mockData.routes, {'sent': true});
  }

}
