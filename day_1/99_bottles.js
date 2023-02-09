function bottles_function(bottle_count) {
  if (bottle_count <= 1) {
    console.log("Time to get more bottles!")
  }
  let song = ""
  let initial_count = bottle_count
  if (initial_count == 1) {
    initial_count = "1 bottle"
  } else {
    initial_count = initial_count.toString() + " bottles";
  }
  while (bottle_count >= 2) {
    let bottles
    bottles = bottle_count.toString() + " bottles";
    song += `${bottles} of beer on the wall, ${bottles} of beer.
`
    if (bottle_count ===2){
      bottles = "1 bottle"
    } else {
      bottles = (bottle_count -1).toString() + " bottles";
    }
    song +=`Take one down and pass it around, ${bottles} of beer on the wall.
`
    bottle_count -= 1
  }
  song += `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, ${initial_count} of beer on the wall.`
  console.log(song)
}

bottles_function(1)