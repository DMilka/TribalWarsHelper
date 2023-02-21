const moment = require('moment');
class DateTimeHelper {
    static getActualDate = (format = null) => {
        if(!format) {
            return moment();
        } else {
            return moment().format(format)
        }
    }

    static formatDate = (date, format = 'YYYY-MM-DD') => {
        return moment(date).format(format);
    }
}

export default DateTimeHelper;