export function convertDate(unix) {
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
