const convertLastModifiedTime = (inputDate, current) => {
  current = new Date(Date.now());

  const year = current.getFullYear() - inputDate.getFullYear();
  const month = current.getMonth() - inputDate.getMonth();
  const day = current.getDate() - inputDate.getDate();
  const hours = current.getHours() - inputDate.getHours();
  const minutes = current.getMinutes() - inputDate.getMinutes();

  if (year === 1) {
    return "1 year";
  } else if (year > 1) {
    return `${year} years`;
  } else if (month === 1) {
    return "1 month";
  } else if (month > 1) {
    return `${month} months`;
  } else if (day === 1) {
    return "1 day";
  } else if (day > 1) {
    return `${day} days`;
  } else if (hours === 1) {
    return "1 hour";
  } else if (hours > 1) {
    return `${hours} hours`;
  } else if (minutes === 1) {
    return "1 minute";
  } else if (minutes > 1) {
    return `${minutes} minutes`;
  } else {
    return "less than a minute";
  }
};

export { convertLastModifiedTime };
