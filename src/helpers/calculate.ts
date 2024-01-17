import { date as DateType } from "../types/types";
import { setResultFunc } from "../types/types";

export const calculateAge = (date: DateType, setResult: setResultFunc) => {
  const birthDate = new Date(date.year, date.month - 1, date.day);
  const currentDate = new Date();

  const years = currentDate.getFullYear() - birthDate.getFullYear();
  const months = currentDate.getMonth() - birthDate.getMonth();
  const days = currentDate.getDate() - birthDate.getDate();

  let ageInYears = years;
  let ageInMonths = months;
  let ageInDays = days;

  if (months < 0 || (months === 0 && days < 0)) {
    ageInYears--;
    ageInMonths = months + 12;
  }

  if (days < 0) {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    );
    ageInDays = days + previousMonth.getDate();
  }

  setResult({
    years: ageInYears.toString(),
    months: ageInMonths.toString(),
    days: ageInDays.toString(),
  });
};
