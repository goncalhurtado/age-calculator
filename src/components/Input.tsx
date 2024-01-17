import { setResultFunc } from "../types/types";
import { validate, clearValidation } from "../helpers/validate";
import { calculateAge } from "../helpers/calculate";
interface InputProps {
  setResult: setResultFunc;
}

const Input: React.FC<InputProps> = ({ setResult }) => {
  const handleDate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      day: { value: number };
      month: { value: number };
      year: { value: number };
    };

    const day = target.day.value || 0;
    const month = target.month.value || 0;
    const year = target.year.value || 0;

    const newDate = { day, month, year };
    if (!validate(newDate)) return;

    calculateAge(newDate, setResult);
  };

  return (
    <div>
      <form onSubmit={handleDate}>
        <div className="d-flex">
          <div className="inputCont" id="day">
            <label className="form-label" id="dayLabel">
              DAY
            </label>
            <input
              className="form-control"
              placeholder="DD"
              name="day"
              maxLength={2}
              id="dayInput"
              onChange={() => clearValidation()}
            ></input>
            <p className="m-0 form-text text-danger" id="dayText"></p>
          </div>
          <div className="inputCont" id="month">
            <label className="form-label" id="monthLabel">
              MONTH
            </label>
            <input
              className="form-control "
              placeholder="MM"
              name="month"
              maxLength={2}
              id="monthInput"
              onChange={() => clearValidation()}
            ></input>
            <p className="m-0 form-text text-danger" id="monthText"></p>
          </div>
          <div className="inputCont" id="year">
            <label className="form-label" id="yearLabel">
              YEAR
            </label>
            <input
              className="form-control "
              placeholder="YYYY"
              name="year"
              maxLength={4}
              id="yearInput"
              onChange={() => clearValidation()}
            ></input>
            <p className="m-0 form-text text-danger" id="yearText"></p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="hr"></div>
          <button className="btn btn-primary" type="submit">
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
