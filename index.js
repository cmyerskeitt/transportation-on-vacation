function rentalCarCost(d) {
    let daily = 40.00
    if (d >= 7){
      return (d * daily) - 50
    } else if (d >=3){
      return (d * daily) - 20 
    } else {
      return d * daily
    }
}