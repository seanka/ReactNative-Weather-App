import { useState, useEffect } from 'react';

export function getDate() {
  const [date, setDate] = useState([]);

  const updateDate = () => {
    const dateNow = new Date();
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

    const month = dateNow.getMonth();
    const day = dateNow.getDate();
    const hour = dateNow.getHours();
    const mins = dateNow.getMinutes();
    setDate(`${months[month]} ${day} ${hour}:${mins}`);
  };

  useEffect(() => {
    updateDate();
  }, []);

  return [date];
}
