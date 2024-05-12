export default function UserInputs({ userInput, onInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            name="initial-investment"
            id="initial-investment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            name="annual-investment"
            id="annual-investment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
            required
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Initial Investment</label>
          <input
            type="number"
            name="expected-return"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={userInput.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}
