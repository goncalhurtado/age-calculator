import Input from "./Input";
import Result from "./Result";
import { useState } from "react";

export const AgeCalculator = () => {
  const [result, setResult] = useState({
    years: "--",
    months: "--",
    days: "--",
  });
  return (
    <div className="ageCalculator">
      <Input setResult={setResult} />
      <Result result={result} />
    </div>
  );
};
