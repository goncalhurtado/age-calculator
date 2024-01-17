import { InputProps } from "../types/types";

const Input: React.FC<InputProps> = ({ date, setDate, setResult }) => {
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

    if (day === 0 || month === 0 || year === 0) {
      return alert("Please fill all the fields");
    }

    setDate({ day, month, year });
    setResult({
      days: day.toString(),
      months: month.toString(),
      years: year.toString(),
    });
    console.log("date", date);
  };

  return (
    <div>
      <form onSubmit={handleDate}>
        <div className="d-flex">
          <div className="inputCont">
            <label className="form-label">DAY</label>
            <input
              className="form-control"
              placeholder="DD"
              name="day"
              maxLength={2}
            ></input>
            <div className="form-text"></div>
          </div>
          <div className="inputCont">
            <label className="form-label">MONTH</label>
            <input
              className="form-control"
              placeholder="MM"
              name="month"
              maxLength={2}
            ></input>
            <div className="form-text"></div>
          </div>
          <div className="inputCont">
            <label className="form-label">YEAR</label>
            <input
              className="form-control textSecondary"
              placeholder="YYYY"
              name="year"
              maxLength={4}
            ></input>
            <div className="form-text"></div>
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
