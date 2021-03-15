const checkEmailValidity = (email: string): boolean => {
  const EXPRESSION = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return EXPRESSION.test(String(email).toLowerCase());
};

const capitalizeFirstLetter = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1);
};

const convertNumberToPercent = (portion: number, total: number): number => {
  return portion / total * 100;
};

export {checkEmailValidity, capitalizeFirstLetter, convertNumberToPercent};
