/* eslint-disable react/prop-types */
import { Button } from "../../components/ui/button";
import CustomFormField from "../../components/custom-form-field";

export default function ContactInfo({ control, setCurrentStep }) {
  return (
    <>
      <h3 className="text-2xl md:text-3xl font-semibold">
        Contact Information
      </h3>
      <div className="flex flex-wrap gap-4">
        <CustomFormField
          name="firstName"
          type="input"
          label="First Name"
          control={control}
          placeholder="John"
        />
        <CustomFormField
          name="lastName"
          type="input"
          label="Last Name"
          control={control}
          placeholder="Doe"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <CustomFormField
          name="email"
          type="input"
          label="Email"
          control={control}
          placeholder="johndoe@gmail.com"
        />
        <CustomFormField
          name="phoneNumber"
          type="phone"
          label="Phone Number"
          control={control}
        />
      </div>
      <CustomFormField
        name="companyName"
        type="input"
        label="Company's Name"
        control={control}
      />

      <Button
        type="button"
        className="md:max-w-[160px] w-fit md:w-full self-end"
        onClick={() => setCurrentStep((prev) => prev + 1)}
      >
        Next
      </Button>
    </>
  );
}
