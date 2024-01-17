export type date = {
  day: number;
  month: number;
  year: number;
};

export type setDateFunc = (result: {
  day: number;
  month: number;
  year: number;
}) => void;

export type result = {
  days: string;
  months: string;
  years: string;
};

export type setResultFunc = (result: {
  days: string;
  months: string;
  years: string;
}) => void;

// export interface dateProps {
//   setDate: React.Dispatch<React.SetStateAction<date>>;
// }
