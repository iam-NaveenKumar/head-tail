let guess = () => {
  const random = Math.random();

  let move = "";

  if (random < 1 / 2) {
    move = "head";
  } else {
    move = "tail";
  }

  return move;
};

let playgame = (playermove) => {
  const computermove = guess();

  let result = "";

  if (playermove === "head") {
    if (computermove === "head") {
      result = "yes it was heads and u win";
    } else if (computermove === "tail") {
      result = "no its incorrect";
    }
  } else if (playermove === "tail") {
    if (computermove === "tail") {
      result = "yes it was tails and u win";
    } else if (computermove === "head") {
      result = "no its incorrect";
    }
  }

  alert(`player move : ${playermove} 
  appears : ${computermove}
  result : ${result} `);
};
