import { calculateInvestmentResults, formatter } from "../util/investment.js";

// Component for displaying investment results
export default function Results({ input }) {
  // Calculate investment results based on input data.
  const resultsData = calculateInvestmentResults(input);
  // We determine the initial investment amount by subtracting the accrued interest and annual investment from the total cost at the end of the first year.
  const initialInvestment =
    resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          // Calculate total interest and invested capital for the current year
          const totalInterest =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          // Return a table row with data for the current year
          return (
            <tr key={yearData.year}>
              <th>{yearData.year}</th>
              <th>{formatter.format(yearData.valueEndOfYear)}</th>
              <th>{formatter.format(yearData.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalAmountInvested)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
