// a function to convert a string in format mm.dd.yyyy to a date object
function stringToDate(dateString) {
    var parts = dateString.split(".");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}