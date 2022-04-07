const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const ConverTimeToMDY = (time) => {
  const date = new Date(time);
  const days =
    date.getDate().toString().length === 1
      ? `0${date.getDate()}`
      : date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${monthList[month - 1]}-${days}-${year}`;
};
