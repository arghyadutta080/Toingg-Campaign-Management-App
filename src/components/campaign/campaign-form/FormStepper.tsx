"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { formDataSequence } from "@/utils/constant/formData";
import InputComponent from "./InputComponent";
import { Campaign } from "@/lib/types/campaign";
import { createNewCampaign, getSupportedLanguages, getSupportedVoices } from "@/api/campaign";
import toast from "react-hot-toast";
import { checkCampaignFormValidation } from "@/utils/functions/validation";

const steps = new Array(formDataSequence.length);

const FormStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [formData, setFormData] = useState<Campaign>({
    title: "",
    voice: "",
    language: "",
    script: "",
    purpose: "",
    knowledgeBase: "",
    calendar: "",
    firstLine: "",
    tone: "",
    postCallAnalysis: false,
    postCallAnalysisSchema: {},
  });
  const [languages, setLanguages] = useState<string[]>([]);
  const [voices, setVoices] = useState<string[]>([]);
  const fetchedLangData = useRef(false);
  const fetchedVoiceData = useRef(false);

  useEffect(() => {
    const fetchLanguages = async () => {
      const languages = await getSupportedLanguages();
      if (!languages?.status) {
        toast.error("Failed to fetch languages");
      } else {
        console.log(languages?.result?.languages);
        setLanguages(languages?.result?.languages);
      }
    };
    if (!fetchedLangData.current) {
      fetchLanguages();
      fetchedLangData.current = true;
    }
  }, []);

  useEffect(() => {
    const fetchVoices = async () => {
      const voices = await getSupportedVoices();
      if (!voices?.status) {
        toast.error("Failed to fetch voices");
      } else {
        console.log(voices?.result?.voice.map((voice: any) => voice.name));
        setVoices(voices?.result?.voice.map((voice: any) => voice.name));
      }
    };
    if (!fetchedVoiceData.current) {
      fetchVoices();
      fetchedVoiceData.current = true;
    }
  }, []);

  const selectOptions = (name: string) => {
    if (name === "language" && languages.length > 0) {
      return languages;
    } else if (name === "voice" && voices.length > 0) {
      return voices;
    } else return [];
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const matchKeyWithValue = (
    key: keyof Campaign
  ): Campaign[keyof Campaign] | null => {
    if (key in formData) {
      return formData[key];
    }
    return null; // Return null if the key doesn't exist
  };

  const handleNext = () => {
    let newSkipped = skipped;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const createCampaign = async () => {
    if (!checkCampaignFormValidation(formData)) {
      toast.error("All fields are required");
      return;
    }
    const response = await createNewCampaign(formData);
    console.log(response);
    if (!response?.status) {
      toast.error(response?.detail);
      return
    }
    toast.success("Created campaign");
    console.log("Creating campaign", formData);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re done!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span className=" text-xl font-medium">Fill up Campaign Details</span>

          {formDataSequence[activeStep].map((input: any, index) => {
            return (
              <InputComponent
                key={index}
                label={input?.label}
                name={input?.name}
                value={`${matchKeyWithValue(input?.name)}`}
                checked={matchKeyWithValue(input?.name) as boolean}
                onChange={
                  input?.type === "checkbox"
                    ? () =>
                        setFormData({
                          ...formData,
                          postCallAnalysis: !matchKeyWithValue(input?.name),
                        })
                    : handleChange
                }
                type={input?.type}
                placeholder={input?.placeholder}
                options={selectOptions(input?.name)}
              />
            );
          })}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={createCampaign}>Finish</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default FormStepper;
