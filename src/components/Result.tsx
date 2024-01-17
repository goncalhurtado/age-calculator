import { result } from "../types/types";

export interface ResultProps {
  result: result;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <div>
      <div className="d-flex">
        <h3 className="ps-2 pe-2">{result.years}</h3>
        <h2 className="">Years</h2>
      </div>
      <div className="d-flex">
        <h3 className="ps-2 pe-2">{result.months}</h3>
        <h2 className="">Months</h2>
      </div>
      <div className="d-flex">
        <h3 className="ps-2 pe-2">{result.days}</h3>
        <h2 className="">Days</h2>
      </div>
    </div>
  );
};

export default Result;
