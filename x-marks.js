const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  
  let position = [0,0];

  for (const move of moves) {
    console.log(move);
    if (move == 'north') {
      position[1] += 1;
    } else if (move == 'west') {
      position[0] -= 1;
    } else if (move == 'south') {
      position[1] -= 1;
    } else if ( move == 'east') {
      position[0] += 1;
    }
  }

  console.log(position);

  return position;
  
}

finalPosition(moves);



