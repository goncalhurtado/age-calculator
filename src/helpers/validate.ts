import { date as DateType } from "../types/types";

export const validate = (date: DateType) => {
  const { day, month, year } = date;

  const dayInput = document.getElementById("dayInput") as HTMLInputElement;
  const dayLabel = document.getElementById("dayLabel") as HTMLLabelElement;
  const dayText = document.getElementById("dayText") as HTMLInputElement;

  const monthInput = document.getElementById("monthInput") as HTMLInputElement;
  const monthLabel = document.getElementById("monthLabel") as HTMLLabelElement;
  const monthText = document.getElementById("monthText") as HTMLInputElement;

  const yearInput = document.getElementById("yearInput") as HTMLInputElement;
  const yearLabel = document.getElementById("yearLabel") as HTMLLabelElement;
  const yearText = document.getElementById("yearText") as HTMLInputElement;

  if (day === 0 && month === 0 && year === 0) {
    dayInput.classList.add("is-invalid");
    dayLabel.classList.add("text-danger");

    monthInput.classList.add("is-invalid");

    monthLabel.classList.add("text-danger");
    yearInput.classList.add("is-invalid");
    yearLabel.classList.add("text-danger");

    dayText.innerHTML = "Please fill all the fields";
    return false;
  }

  if (day < 1 || day > 31) {
    dayInput.classList.add("is-invalid");
    dayLabel.classList.add("text-danger");
    dayText.innerHTML = "Invalid day";
    return false;
  }
  if (month < 1 || month > 12) {
    monthInput.classList.add("is-invalid");
    monthLabel.classList.add("text-danger");
    monthText.innerHTML = "Invalid month";

    return false;
  }
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  if (year < 1 || year > currentYear) {
    yearInput.classList.add("is-invalid");
    yearLabel.classList.add("text-danger");
    yearText.innerHTML = "Invalid year";

    return false;
  }
  const currentMonth = new Date().getMonth() + 1;
  const monthNumber = Number(month);

  if (year == currentYear && monthNumber > currentMonth) {
    monthInput.classList.add("is-invalid");
    monthLabel.classList.add("text-danger");
    monthText.innerHTML = "The date must be before the current date.";

    return false;
  }

  if (
    year == currentYear &&
    monthNumber == currentMonth &&
    day > new Date().getDate()
  ) {
    dayInput.classList.add("is-invalid");
    dayLabel.classList.add("text-danger");
    dayText.innerHTML = "The date must be before the current date.";

    return false;
  }

  return true;
};

export const clearValidation = () => {
  const dayInput = document.getElementById("dayInput") as HTMLInputElement;
  const dayLabel = document.getElementById("dayLabel") as HTMLLabelElement;
  const dayText = document.getElementById("dayText") as HTMLInputElement;

  const monthInput = document.getElementById("monthInput") as HTMLInputElement;
  const monthLabel = document.getElementById("monthLabel") as HTMLLabelElement;
  const monthText = document.getElementById("monthText") as HTMLInputElement;

  const yearInput = document.getElementById("yearInput") as HTMLInputElement;
  const yearLabel = document.getElementById("yearLabel") as HTMLLabelElement;
  const yearText = document.getElementById("yearText") as HTMLInputElement;

  dayInput.classList.remove("is-invalid");
  dayLabel.classList.remove("text-danger");
  dayText.innerHTML = "";

  monthInput.classList.remove("is-invalid");
  monthLabel.classList.remove("text-danger");
  monthText.innerHTML = "";

  yearInput.classList.remove("is-invalid");
  yearLabel.classList.remove("text-danger");
  yearText.innerHTML = "";
};
