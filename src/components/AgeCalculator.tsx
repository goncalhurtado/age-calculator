import Input from "./Input";
import Result from "./Result";
import { useState } from "react";

export const AgeCalculator = () => {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });
  const [result, setResult] = useState({
    years: "--",
    months: "--",
    days: "--",
  });
  console.log(date);
  return (
    <div className="ageCalculator">
      <Input setDate={setDate} setResult={setResult} />
      <Result result={result} />
    </div>
  );
};
