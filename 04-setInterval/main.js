// setInterval

let seconds = 0
const setIntervalID = setInterval(() => {
  seconds += 2
  console.log(seconds)
  if(seconds >= 10){
    clearInterval(setIntervalID)
  }
}, 1000 * 2);