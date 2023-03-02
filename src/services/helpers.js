const moment = require("jalali-moment");

exports.formatDate = (date) => {
    return moment(date).locale("fa").format("D MMM YYYY");
};

exports.stripTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)/g, " ")
}