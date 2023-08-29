
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 270],
  ["2016", 660, 1070, 340],
  ["2017", 1030, 1510, 310],
  ["2018", 700, 950, 209],
  ["2019", 1470, 760, 290],
  ["2020", 1060, 820, 280],
  ["2021", 1530, 940, 450],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  color: [("rgb(53, 139, 152"), "#188310"],
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="520px"
      data={data}
      options={options}
    />
  );
}
