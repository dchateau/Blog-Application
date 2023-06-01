const getFormattedDate = (date: Date): string => {
  const day =
    date.getDay().toString().length < 2 ? "0" + date.getDay() : date.getDay();
  const month =
    date.getMonth().toString().length < 2
      ? `0${date.getMonth() + 1}`
      : date.getMonth();

  return `${day}/${month}/${date.getFullYear()}`;
};

export default getFormattedDate;
