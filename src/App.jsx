import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInputs from "./components/UserInputs";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [result, setResult] = useState([]);
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =
    userInput.initialInvestment > 0 &&
    userInput.annualInvestment > 0 &&
    userInput.expectedReturn > 0 &&
    userInput.duration > 1;

  function handleChangeUserInput(identifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: +newValue,
      };
    });

    calculateResults(userInput);
  }

  function calculateResults(userInput) {
    const result = calculateInvestmentResults(userInput);
    setResult(result);
  }

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onInputChange={handleChangeUserInput} />
      {inputIsValid && <ResultsTable userInput={userInput} />}
      {!inputIsValid && (
        <p className="center">
          <p>Invalid User Input!</p>
          <ul>
            <li>Initial Investment should be greater than 0</li>
            <li>Annual Investment should be greater than 0</li>
            <li>Expected Return should be greater than 0</li>
            <li>Duration (in years) should be greater than 1</li>
          </ul>
        </p>
      )}
    </>
  );
}

export default App;
