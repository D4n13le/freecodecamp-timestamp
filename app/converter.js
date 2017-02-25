var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Obtober', 'November', 'December'];

exports.unixToNatural = function(unix) {
  if (isNaN(unix)) return null;

  var date = new Date(unix * 1000);

  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

exports.naturalToUnix = function(natural) {
  var results = /^(\w+) (\d+), (\d+)$/.exec(natural);

  if (!results) return null;

  var month = months.indexOf(results[1]);
  var day = results[2];
  var year = results[3];

  if (month < 0) return null;

  return (new Date(year, month, day)).getTime() / 1000;
};

exports.convert = function(value) {
  var unix, natural;

  if (/^(\w+) (\d+), (\d+)$/.test(value)) {
    natural = value;
    unix = exports.naturalToUnix(natural);
  } else {
    unix = value;
    natural = exports.unixToNatural(unix);
  }

  if ((natural == null) || (unix == null)) {
    natural = unix = null;
  }

  return {
    unix: unix,
    natural: natural
  };
};