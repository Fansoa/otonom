const getBorderColorbyState = ({
  isFocused,
  error,
  defaultBorderColor,
}: {
  isFocused: boolean;
  error?: string | undefined;
  defaultBorderColor: string;
}): string => {
  if (error) return "rgb(239 68 68)";
  if (isFocused) return "rgb(79 70 229)";
  return defaultBorderColor;
};

export default getBorderColorbyState;
