import React, { useState } from "react";
import "../Stepper/steps.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Checkbox, FormControlLabel } from "@mui/material";
import Bmi from "../BMI/bmi";
import Fat from "../../Assets/Images/fat.png";

const steps = [
  {
    label: "",
    description: (
      <div className="box">
        <div className="row">
          <InputLabel required className="InputLabel">
            First Name
          </InputLabel>
          <Input />
          <InputLabel required className="InputLabel">
            Last Name
          </InputLabel>
          <Input />
        </div>

        <div className="row">
          <InputLabel required className="InputLabel">
            Age
          </InputLabel>
          <Input />
          <InputLabel className="InputLabel">Gender</InputLabel>
          <FormControlLabel
            value="top"
            style={{ color: "white" }}
            control={
              <Checkbox
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label="Male"
            labelPlacement="right"
          />
          <FormControlLabel
            value="top"
            control={
              <Checkbox
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label="Female"
            style={{ color: "white" }}
            labelPlacement="right"
          />
        </div>
      </div>
    ),
  },
  {
    label: "",
    description: <Bmi />,
  },
  {
    label: "",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Box style={{ width: "80%", marginLeft: "100px" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {/* {step.label} */}
              </StepLabel>
              <StepContent>
                <Typography style={{ marginLeft: "100px" }}>
                  {step.description}
                </Typography>
                <Box
                  sx={{ mb: 2 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "100px",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "#124e78",
                        fontWeight: "600",
                      }}
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "#124e78",
                        fontWeight: "600",
                      }}
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
};

export default Steps;
