function produceDrivingRange(drivingRange){
    return function(startBlock, endBlock){

            let startNumber = parseInt(startBlock)
            let endNumber = parseInt(endBlock)
            let resultRange = endNumber - startNumber
            let differenceRange = Math.abs(resultRange-drivingRange)

            if (resultRange <= drivingRange) {
                return `within range by ${differenceRange}`
            } else {
              //debugger
                return `${differenceRange} blocks out of range`
            }
    }
}


function produceTipCalculator(percentTip){
    return function(tripFare){
          return percentTip * tripFare
    }
}


//additional code

function createDriver(){
    let driverId=0
    return class{
        constructor(name){
          this.id =++driverId
          this.name = name
        }
    }
}
