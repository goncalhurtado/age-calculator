const Input = () => {
  return (
    <div>
      <form>
        <div className="d-flex">
          <div className="p-2">
            <label className="form-label">Day</label>
            <input
              type="number"
              className="form-control"
              placeholder="DD"
            ></input>
            <div className="form-text"></div>
          </div>
          <div className="p-2">
            <label className="form-label">Month</label>
            <input
              type="number"
              className="form-control"
              placeholder="MM"
            ></input>
            <div className="form-text"></div>
          </div>
          <div className="p-2">
            <label className="form-label">Year</label>
            <input
              type="number"
              className="form-control"
              placeholder="YYYY"
            ></input>
            <div className="form-text"></div>
          </div>
        </div>
      </form>
      <div className="d-flex align-items-center ps-2 pe-2">
        <div className="hr"></div>
        <div className="btn btn-primary">Calculate</div>
      </div>
    </div>
  );
};

export default Input;
