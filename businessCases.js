

module.exports = {

    logic: ticketNumber => {
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        var tomorrowDay = tomorrow.getDay();
        if (ticketNumber.includes('REW-')) {
            if ([1,4,5].includes(tomorrowDay)) {
              return {releaseDate: tomorrow }
            }
            else {
                switch(tomorrowDay) {
                    case 0:
                      return {releaseDate: moment().day(1) }
                    case 6:
                      return {releaseDate: moment().day(8) }
                    default:
                      return {releaseDate: moment().day(4) }
                }   
            }
        }
        else {
            if ([2,3,4].includes(tomorrowDay)) {
                return {releaseDate: tomorrow }
              }
              else {
                if ([0,1].includes(tomorrowDay)) {
                  return {releaseDate: moment().day(2)} 
                }
                else { 
                  return {releaseDate: moment().day(9)}
                }
                
              }

        }
    }

}