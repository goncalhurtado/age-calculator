export type date = {
    day: number;
    month: number;
    year: number;
  };
  export interface InputProps {
    date: date;
    setDate: React.Dispatch<React.SetStateAction<date>>;
    setResult: React.Dispatch<React.SetStateAction<result>>;
}


  export type result = {
    days: string;
    months: string;
    years: string;
  };

export interface ResultProps {
    result: result;
}