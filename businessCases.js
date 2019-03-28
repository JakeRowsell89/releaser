const moment = require('moment')

module.exports = {

  logic: ticketNumber => {
    var today = moment();
    var tomorrow = moment().day(today.day() + 1)
    var tomorrowDay = tomorrow.day();

    if (ticketNumber.includes('REW-')) {
      if ([1, 4, 5].includes(tomorrowDay)) {
        return tomorrow.hours(9).minutes(0)
      }
      else {
        switch (tomorrowDay) {
          case 0:
            return moment().day(1).hours(9).minutes(0)
          case 6:
            return moment().day(8).hours(9).minutes(0)
          default:
            return moment().day(4).hours(9).minutes(0)
        }
      }
    }
    else {
      if ([2, 3, 4].includes(tomorrowDay)) {
        return tomorrow.hours(9).minutes(0)
      }
      else {
        if ([0, 1].includes(tomorrowDay)) {
          return moment().day(2).hours(9).minutes(0)
        }
        else {
          return moment().day(9).hours(9).minutes(0)
        }

      }

    }
  }

}