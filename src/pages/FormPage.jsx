import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "../components/ui/form";
import Stepper from "../components/Stepper";
import ContactInfo from "./steps/ContactInfo";
import DocumentUpload from "./steps/DocumentUpload";
import AdditionalInfo from "./steps/AdditionalInfo";

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm();

  const steps = [
    {
      1: <ContactInfo control={form.control} setCurrentStep={setCurrentStep} />,
    },
    {
      2: <DocumentUpload setCurrentStep={setCurrentStep} />,
    },
    {
      3: (
        <AdditionalInfo
          control={form.control}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full mb-10">
        <Stepper
          steps={steps}
          complete={currentStep === steps.length}
          currentStep={currentStep}
        />
      </div>

      <Form {...form}>
        <form className="flex flex-col gap-y-6">
          {steps[currentStep - 1][currentStep]}
        </form>
      </Form>
    </div>
  );
}
