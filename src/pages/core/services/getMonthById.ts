const months: any = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

export const getMonthById = (numberMonth: number) => {
  if ((numberMonth > 13) || (numberMonth < 0)) return;
  return months[numberMonth]
};
