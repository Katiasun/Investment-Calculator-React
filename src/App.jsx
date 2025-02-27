import Header from "./components/Header";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput";
import "./util/investment.js";
import { useState } from "react";

function App() {
  // Use the useState hook to store the state of user-entered data
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Check whether the entered investment duration is valid (greater than or equal to 1)
  const inputIsValid = userInput.duration >= 1;

  // Function to handle changes in input data
  function handleChange(inputIdentifier, newValue) {
    // Update the userInput state, preserving the previous values ​​and changing only the required field
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // Update the value of the corresponding field, bringing it to a number
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
