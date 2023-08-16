import React, { useState } from "react";
import { Button } from "reactstrap";
import styles from "./stepper.module.scss";

interface IStep {
  label: string;
  description: string;
  content: string;
}

const Step: React.FC<IStep> = ({ label, description, content }) => (
  <div>
    <div className={styles.stepLabel}>{label}</div>
    <div className={styles.stepDescription}>{description}</div>
    <div className={styles.stepContent}>{content}</div>
  </div>
);

const Stepper: React.FC<{ steps: Array<IStep> }> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <div className={styles.stepper}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.stepperItem} ${
              index === activeStep ? styles.active : ""
            }`}
            onClick={() => setActiveStep(index)}
          >
            <div className={styles.stepperIndicator}>{index + 1}</div>
            <div className={styles.stepperStep}>
              <Step {...step} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.stepperContent}>{steps[activeStep].content}</div>

      <div className={styles.stepperButtons}>
        <Button
          color="primary"
          onClick={handlePrev}
          disabled={activeStep === 0}
        >
          Back
        </Button>
        <Button
          color="primary"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Stepper;
