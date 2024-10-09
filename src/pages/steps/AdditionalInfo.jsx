/* eslint-disable react/prop-types */
import { Button } from "../../components/ui/button";
import { SelectItem } from "../../components/ui/select";
import CustomFormField from "../../components/custom-form-field";

export default function AdditionalInfo({ control, setCurrentStep }) {
  return (
    <>
      <h3 className="text-2xl md:text-3xl font-semibold">
        Additional Information
      </h3>
      <CustomFormField
        name="communication_preference"
        type="select"
        label="Scheduling Communication Preference"
        control={control}
        placeholder="Please select"
      >
        <SelectItem value="email">Email</SelectItem>
        <SelectItem value="phone_call">Phone call</SelectItem>
        <SelectItem value="text">Text</SelectItem>
      </CustomFormField>
      <CustomFormField
        name="contact_name"
        type="input"
        label="Scheduling Contact Name"
        control={control}
        placeholder="Jane Doe"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomFormField
          name="contact_email"
          type="input"
          label="Scheduling Contact Email"
          control={control}
          placeholder="janedoe@gmail.com"
        />
        <CustomFormField
          name="contact_phone_number"
          type="phone"
          label="Scheduling Contact Phone Number"
          control={control}
        />
      </div>
      <CustomFormField
        name="close_on_bank_holidays"
        type="select"
        label="Do you close on typical bank holidays?"
        control={control}
        placeholder="Please select"
      >
        <SelectItem value="yes">Yes</SelectItem>
        <SelectItem value="no">No</SelectItem>
      </CustomFormField>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomFormField
          name="appointment_start_time"
          type="time"
          label="Appointment Start Time Monday-Friday"
          control={control}
          placeholder="Please select"
        />
        <CustomFormField
          name="appointment_end_time"
          type="time"
          label="Appointment End Time Monday-Friday"
          control={control}
          placeholder="Please select"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomFormField
          name="appointment_start_time_sat"
          type="time"
          label="Appointment Start Time Saturday"
          control={control}
          placeholder="Please select"
        />
        <CustomFormField
          name="appointment_end_time_sat"
          type="time"
          label="Appointment End Time Saturday"
          control={control}
          placeholder="Please select"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomFormField
          name="appointment_start_time_sun"
          type="time"
          label="Appointment Start Time Sunday"
          control={control}
          placeholder="Please select"
        />
        <CustomFormField
          name="appointment_end_time_sun"
          type="time"
          label="Appointment End Time Sunday"
          control={control}
          placeholder="Please select"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <CustomFormField
          name="weekly_capacity_naira"
          type="input"
          label="Weekly Capacity (#)"
          control={control}
        />
        <p className="text-gray-500 text-xs">
          Please provide the number of jobs per week in a given market
        </p>
      </div>
      <div className="flex flex-col gap-y-1">
        <CustomFormField
          name="weekly_capacity_dollar"
          type="input"
          label="Weekly Capacity ($)"
          control={control}
        />
        <p className="text-gray-500 text-xs">
          Please provide the maximum number of accounts receivable per week in a
          given market
        </p>
      </div>
      <CustomFormField
        name="w2_employees_or_subcontract"
        type="textarea"
        label="Do you have W2 employees or do you sub-contract work to other vendors?"
        control={control}
      />
      <div className="flex flex-col gap-y-1">
        <CustomFormField
          name="no_of_employees_or_subcontractors"
          type="input"
          label="How many employees or subcontractors do you have in a single market?"
          control={control}
        />
        <p className="text-gray-500 text-xs">
          If your company operates nationally, please select the average number
          of employees you have in a single market, rather than providing your
          national total.
        </p>
      </div>
      <div className="flex flex-col gap-y-1">
        <CustomFormField
          name="experience_with_institutional_buyers"
          type="input"
          label="Do you have experience working with institutional buyers?"
          control={control}
        />
        <p className="text-gray-500 text-xs">
          (ex. Invitation Homes, Zillow, Opendoor, etc) If so, whom?
        </p>
      </div>
      <CustomFormField
        name="terms"
        type="select"
        label="Divvy requires all work updates be made via third party work order system Site Capture. This includes before/after photos, bid submission, as well as on platform communication to your assigned Project Coordinator. Are you comfortable with using this technology for Work Order management and payments?"
        control={control}
        placeholder="Please select"
      >
        <SelectItem value="yes">Yes</SelectItem>
        <SelectItem value="no">No</SelectItem>
      </CustomFormField>
      <CustomFormField
        name="net_30"
        type="select"
        label={`Our payment terms are "Net 30". Are you ok with this?`}
        control={control}
        placeholder="Please select"
      >
        <SelectItem value="yes">Yes</SelectItem>
        <SelectItem value="no">No</SelectItem>
      </CustomFormField>
      <CustomFormField
        name="interest"
        type="select"
        label={`Are you interested in occupied maintenance, turns/rehab, both?`}
        control={control}
        placeholder="Please select"
      >
        <SelectItem value="occupied">Occupied maintenance</SelectItem>
        <SelectItem value="turns">Turns/Rehab</SelectItem>
        <SelectItem value="both">Both</SelectItem>
      </CustomFormField>
      <Button
        className="md:max-w-[160px] w-fit md:w-full"
        onClick={() => setCurrentStep((prev) => prev - 1)}
      >
        Previous
      </Button>
    </>
  );
}
