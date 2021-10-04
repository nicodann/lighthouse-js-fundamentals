////////capacity of at least 20, and be a school or community centre.

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



const chooseStations = function (stations) {

  let chosenStations = [];

  for (let entry of stations) {
   
    if (entry[1] >= 20) {
      
      if (entry[2] == 'school' || entry[2] == 'community centre'){
        
        chosenStations.push(entry[0]);
      }

      

    }
  }

  return chosenStations;

}

