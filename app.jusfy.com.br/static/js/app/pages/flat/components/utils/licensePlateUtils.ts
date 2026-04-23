export const maskLicensePlate = (value: string): string => {
  const regularPlatePartialRegex = /^([a-zA-Z]{3})([0-9][0-9]+)$/;
  const returnString = value
    .toUpperCase()
    .replace(/[^a-zA-Z0-9-]/g, '')
    .replace(regularPlatePartialRegex, '$1-$2');
  const cutoff = returnString.includes('-') ? 8 : 7;
  return returnString.substring(0, cutoff);
};

export const validateLicensePlate = (plate: string): boolean => {
  const normalizedPlate = plate.replace(/-/g, '');
  const validateRegularPlate = (p: string) => /^[A-Z]{3}[0-9]{4}$/.test(p);
  const validateMercosurPlate = (p: string) =>
    /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/.test(p);

  return (
    validateRegularPlate(normalizedPlate) ||
    validateMercosurPlate(normalizedPlate)
  );
};
