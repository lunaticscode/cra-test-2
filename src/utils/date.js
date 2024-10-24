/**
 *
 * @param {Date} date
 */
export const convertDateToString = (date) => {
  return date.toISOString();
};

/**
 *
 * @param {string} str
 */
export const convertStringToDate = (str) => {
  return new Date(str);
};

export const DEFAULT_DATE = new Date();
