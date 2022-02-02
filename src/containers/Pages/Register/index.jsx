import React, { useState } from "react";
import { Steps } from "antd";
import SectionWrapper from "../../Common/containers/SectionWrapper";
import PersonalDetailsForm from "../../Components/Register/PersonalDetailsForm";
import SchoolDetailsForm from "../../Components/Register/SchoolDetailsForm";
import ClassRecordForm from "../../Components/Register/ClassRecordForm";

const { Step } = Steps;

const initialStepsData = [
  {
    id: 0,
    title: "Personal Details",
    status: "process",
  },
  {
    id: 1,
    title: "School Details",
    status: "wait",
  },
  {
    id: 2,
    title: "Class Record",
    status: "wait",
  },
];

function Register() {
  const [currentStep, setCurrentStep] = useState(2);
  const [steps, setSteps] = useState(initialStepsData);
  const [form, setForm] = useState(null);

  const changeStep = step => {
    const newSteps = steps.map(item => {
      if (item.id < step)
        return {
          ...item,
          status: "finish",
        };
      if (item.id === step)
        return {
          ...item,
          status: "process",
        };
      return item;
    });
    setSteps(newSteps);
    setCurrentStep(step);
  };

  return (
    <SectionWrapper>
      <Steps
        type="navigation"
        current={currentStep}
        onChange={changeStep}
        className="site-navigation-steps"
      >
        {steps.map(item => (
          <Step
            key={item.id}
            status={item.status}
            title={item.title}
            disabled={!["finish", "process"].includes(item.status)} // disabled for 'Finished' and 'Current Process'
          />
        ))}
      </Steps>
      {currentStep === 0 && (
        <PersonalDetailsForm
          form={form}
          setForm={setForm}
          changeStep={changeStep}
        />
      )}
      {currentStep === 1 && (
        <SchoolDetailsForm
          form={form}
          setForm={setForm}
          changeStep={changeStep}
        />
      )}
      {currentStep === 2 && (
        <ClassRecordForm
          form={form}
          setForm={setForm}
          changeStep={changeStep}
        />
      )}
    </SectionWrapper>
  );
}

export default Register;
