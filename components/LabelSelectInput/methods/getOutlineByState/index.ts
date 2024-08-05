const getOutlineByState = (isFocused: boolean): string => {
  if (isFocused) return "1px solid rgb(79 70 229)";
  return "none";
};

export default getOutlineByState;
