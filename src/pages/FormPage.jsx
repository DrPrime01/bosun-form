import { useForm } from "react-hook-form";

import { Form } from "../components/ui/form";
import CustomFormField from "../components/custom-form-field";
import { SelectItem } from "../components/ui/select";
import FileUpload from "../components/file-upload";

export default function FormPage() {
  const form = useForm();
  return (
    <Form {...form}>
      <form className="flex flex-col gap-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomFormField
            name="first_name"
            type="input"
            label="First Name"
            control={form.control}
            placeholder="John"
          />
          <CustomFormField
            name="last_name"
            type="input"
            label="Last Name"
            control={form.control}
            placeholder="Doe"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomFormField
            name="email"
            type="input"
            label="Email"
            control={form.control}
            placeholder="johndoe@gmail.com"
          />
          <CustomFormField
            name="phone_number"
            type="phone"
            label="Phone Number"
            control={form.control}
          />
        </div>
        <CustomFormField
          name="company_name"
          type="input"
          label="Company's Name"
          control={form.control}
        />
        <h3 className="text-2xl md:text-3xl font-semibold">Document Upload</h3>
        <FileUpload name="w9" label="W9 Upload" />
        <FileUpload
          name="insurance_certificate"
          label="Certificate of Insurance Upload"
        />
        <div className="flex flex-col gap-y-1">
          <FileUpload name="trade_license" label="Trade License(s)" />
          <p className="text-gray-500 text-xs">
            If you have chosen any &quot;Licensed&quot; Services from the list
            below, please upload a valid copy of the trade license(s).
          </p>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold">
          Additional Information
        </h3>
        <CustomFormField
          name="communication_preference"
          type="select"
          label="Scheduling Communication Preference"
          control={form.control}
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
          control={form.control}
          placeholder="Jane Doe"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomFormField
            name="contact_email"
            type="input"
            label="Scheduling Contact Email"
            control={form.control}
            placeholder="janedoe@gmail.com"
          />
          <CustomFormField
            name="contact_phone_number"
            type="phone"
            label="Scheduling Contact Phone Number"
            control={form.control}
          />
        </div>
        <CustomFormField
          name="close_on_bank_holidays"
          type="select"
          label="Do you close on typical bank holidays?"
          control={form.control}
          placeholder="Please select"
        >
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </CustomFormField>
        <div className="flex flex-col gap-y-1">
          <CustomFormField
            name="weekly_capacity_naira"
            type="input"
            label="Weekly Capacity (#)"
            control={form.control}
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
            control={form.control}
          />
          <p className="text-gray-500 text-xs">
            Please provide the maximum number of accounts receivable per week in
            a given market
          </p>
        </div>
        <CustomFormField
          name="w2_employees_or_subcontract"
          type="textarea"
          label="Do you have W2 employees or do you sub-contract work to other vendors?"
          control={form.control}
        />
        <div className="flex flex-col gap-y-1">
          <CustomFormField
            name="no_of_employees_or_subcontractors"
            type="input"
            label="How many employees or subcontractors do you have in a single market?"
            control={form.control}
          />
          <p className="text-gray-500 text-xs">
            If your company operates nationally, please select the average
            number of employees you have in a single market, rather than
            providing your national total.
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <CustomFormField
            name="experience_with_institutional_buyers"
            type="input"
            label="Do you have experience working with institutional buyers?"
            control={form.control}
          />
          <p className="text-gray-500 text-xs">
            (ex. Invitation Homes, Zillow, Opendoor, etc) If so, whom?
          </p>
        </div>
        <CustomFormField
          name="terms"
          type="select"
          label="Divvy requires all work updates be made via third party work order system Site Capture. This includes before/after photos, bid submission, as well as on platform communication to your assigned Project Coordinator. Are you comfortable with using this technology for Work Order management and payments?"
          control={form.control}
          placeholder="Please select"
        >
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </CustomFormField>
        <CustomFormField
          name="net_30"
          type="select"
          label={`Our payment terms are "Net 30". Are you ok with this?`}
          control={form.control}
          placeholder="Please select"
        >
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </CustomFormField>
        <CustomFormField
          name="interest"
          type="select"
          label={`Are you interested in occupied maintenance, turns/rehab, both?`}
          control={form.control}
          placeholder="Please select"
        >
          <SelectItem value="occupied">Occupied maintenance</SelectItem>
          <SelectItem value="turns">Turns/Rehab</SelectItem>
          <SelectItem value="both">Both</SelectItem>
        </CustomFormField>
      </form>
    </Form>
  );
}
