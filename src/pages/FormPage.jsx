import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "../components/ui/form";
import Stepper from "../components/Stepper";
import ContactInfo from "./steps/ContactInfo";
import DocumentUpload from "./steps/DocumentUpload";
import AdditionalInfo from "./steps/AdditionalInfo";
import ServiceAreaCoverage from "./steps/ServiceAreaCoverage";
import ProvidedServices from "./steps/ProvidedServices";

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
        <ServiceAreaCoverage
          control={form.control}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
    {
      4: (
        <ProvidedServices
          control={form.control}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
    {
      5: (
        <AdditionalInfo
          control={form.control}
          setCurrentStep={setCurrentStep}
        />
      ),
    },
  ];

  const onSubmit = async (data) => {
    console.log(data);
  };

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
        <form
          className="flex flex-col gap-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {steps[currentStep - 1][currentStep]}
        </form>
      </Form>
    </div>
  );
}
