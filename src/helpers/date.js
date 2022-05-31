/* eslint-disable indent */
/* eslint-disable no-unused-vars */
export const formatDay = (day) => {
  let dayFormmatted = day;
  if (dayFormmatted < 10) {
    dayFormmatted = `0${day}`;
  }

  dayFormmatted.toString();
  return dayFormmatted;
};

export const formatMonth = (month) => {
  let monthFormated = month;
  if (monthFormated < 10) {
    monthFormated = `0${month}`;
  }
  monthFormated.toString();
  return monthFormated;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const dateFormated = `
    ${formatDay(date.getDate())}/${formatMonth(
    date.getMonth()
  )}/${date.getFullYear()}
  `;
  return dateFormated;
};
