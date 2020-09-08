const convertLastModifiedTime = (date) => {
  const current = new Date();
  const year = date.getFullYear() - current.getFullYear();
  const month = date.getMonth() - current.getMonth();
  const day = date.getDate() - current.getDate();
  const hours = date.getHours() - current.getHours();
  const minutes = date.getMinutes() - current.getMinutes();

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
