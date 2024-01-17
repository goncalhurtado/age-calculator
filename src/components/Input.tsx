const Input = () => {
  return (
    <div>
      <form>
        <div className="d-flex">
          <div className="inputCont">
            <label className="form-label">DAY</label>
            <input
              type="number"
              className="form-control"
              placeholder="DD"
            ></input>
            <div className="form-text"></div>
          </div>
          <div className="inputCont">
            <label className="form-label">MONTH</label>
            <input
              type="number"
              className="form-control"
              placeholder="MM"
            ></input>
            <div className="form-text"></div>
          </div>
          <div className="inputCont">
            <label className="form-label">YEAR</label>
            <input
              type="number"
              className="form-control textSecondary"
              placeholder="YYYY"
            ></input>
            <div className="form-text"></div>
          </div>
        </div>
      </form>
      <div className="d-flex align-items-center">
        <div className="hr"></div>
        <div className="btn btn-primary">Calculate</div>
      </div>
    </div>
  );
};

export default Input;
