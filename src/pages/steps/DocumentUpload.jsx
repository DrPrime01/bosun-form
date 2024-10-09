/* eslint-disable react/prop-types */
import { Button } from "../../components/ui/button";

import FileUpload from "../../components/file-upload";

export default function DocumentUpload({ setCurrentStep }) {
  return (
    <>
      <h3 className="text-2xl md:text-3xl font-semibold">Document Upload</h3>
      <FileUpload name="w9UploadFile" label="W9 Upload" />
      <FileUpload
        name="certificateOfInsuranceFile"
        label="Certificate of Insurance Upload"
      />
      <div className="flex flex-col gap-y-1">
        <FileUpload name="tradeLicenseFile" label="Trade License(s)" />
        <p className="text-gray-500 text-xs">
          If you have chosen any &quot;Licensed&quot; Services from the list
          below, please upload a valid copy of the trade license(s).
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Button
          className="md:max-w-[160px] w-fit md:w-full"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          type="button"
        >
          Previous
        </Button>
        <Button
          className="md:max-w-[160px] w-fit md:w-full"
          onClick={() => setCurrentStep((prev) => prev + 1)}
          type="button"
        >
          Next
        </Button>
      </div>
    </>
  );
}
