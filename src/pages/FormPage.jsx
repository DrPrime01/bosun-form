import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "../components/ui/form";
import { Button } from "../components/ui/button";
import Stepper from "../components/Stepper";
import ContactInfo from "./steps/ContactInfo";
import DocumentUpload from "./steps/DocumentUpload";
import AdditionalInfo from "./steps/AdditionalInfo";
import ServiceAreaCoverage from "./steps/ServiceAreaCoverage";
import ProvidedServices from "./steps/ProvidedServices";
import axios from "axios";
import { API_URL } from "../constants";

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm();

  const serviceAreas = form.watch("serviceAreas");
  const providedServices = form.watch("providedServices");

  const steps = [
    {
      1: <ContactInfo control={form.control} setCurrentStep={setCurrentStep} />,
      name: "Contact Information",
    },
    {
      2: <DocumentUpload setCurrentStep={setCurrentStep} />,
      name: "Document Upload",
    },
    {
      3: (
        <ServiceAreaCoverage
          control={form.control}
          setCurrentStep={setCurrentStep}
          serviceAreas={serviceAreas}
        />
      ),
      name: "Service Area Coverage",
    },
    {
      4: (
        <ProvidedServices
          control={form.control}
          setCurrentStep={setCurrentStep}
          providedServices={providedServices}
        />
      ),
      name: "Provided Services",
    },
    {
      5: (
        <AdditionalInfo
          control={form.control}
          setCurrentStep={setCurrentStep}
        />
      ),
      name: "Additional Information",
    },
  ];

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        if (key.includes("File")) {
          formData.append(key, value[0]);
        } else formData.append(key, value);
      }
      await axios.post(`${API_URL}/forms/submit`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Success");
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full mb-10">
        <Stepper
          currentStep={steps[currentStep - 1]["name"]}
          value={Math.ceil((currentStep / steps.length) * 100)}
        />
      </div>

      <Form {...form}>
        <form
          className="flex flex-col gap-y-6 relative"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {steps[currentStep - 1][currentStep]}
          {currentStep === steps.length && (
            <Button
              type="submit"
              disabled={isLoading}
              className="md:max-w-[160px] w-fit md:w-full self-end absolute bottom-0 disabled:opacity-50"
            >
              {isLoading ? "Submitting" : "Submit"}
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}
