export function convertHour(unix) {
  const date = new Date(unix * 1000);
  var hour = date.getHours();
  var ampm = '';

  if (hour > 12) {
    ampm = 'PM';
    hour = hour - 12;
  } else {
    if (hour == 0) {
      hour = 12;
    }
    ampm = 'AM';
  }

  return [hour, ampm];
}

export function convertDate(unix) {
  const dates = new Date(unix * 1000);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = dates.getDay();
  const date = dates.getDate();
  const month = dates.getMonth();

  return `${days[day]}, ${months[month]} ${date}`;
}
