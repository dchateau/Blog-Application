const getFormattedDate = (date: Date): string => {
  const day: string =
    date.getDay().toString().length < 2
      ? "0" + date.getDay().toString()
      : date.getDay().toString();

  const month: string =
    date.getMonth().toString().length < 2
      ? `0${date.getMonth() + 1}`
      : date.getMonth().toString();

  return `${day}/${month}/${date.getFullYear()}`;
};

export default getFormattedDate;
