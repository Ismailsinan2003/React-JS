import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //   const step = 1;

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      //   setStep(step + 1);
      //   setStep(step + 1);

      setStep((s) => s + 1);
      //   setStep((s) => s + 1);
    }
  }

  //   function handleStep() {
  //     setIsOpen(!isOpen);
  //   }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((is) => !is)}
        style={{ color: "red" }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage color="#fff" step={step}>
            {messages[step - 1]}
          </StepMessage>

          {/* Buttons */}

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ color, step, children }) {
  return (
    <div className="message" style={{ color: color }}>
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
