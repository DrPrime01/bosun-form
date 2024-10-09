/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useFormContext, get, Controller } from "react-hook-form";
import Dropzone from "react-dropzone";

export default function FileUpload({
  name,
  showErrMsg = true,
  required,
  rules,
  label,
  inputClassName,
}) {
  const [uploadedFile, setUploadedFile] = useState();

  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext({ mode: "all" });
  const error = get(errors, name);

  const file = watch(name);

  useEffect(() => {
    if (file && file.length > 0) {
      const selectedFile = file[0];
      setUploadedFile(selectedFile);
    }
  }, [file]);

  return (
    <div className="flex flex-col gap-y-2">
      {label && <p className="text-sm text-gray-10">{label}</p>}

      <Controller
        name={name}
        control={control}
        rules={{ required, ...rules }}
        render={({ field }) => {
          const { onBlur, onChange } = field;
          return (
            <Dropzone
              onDrop={(acceptedFiles) => onChange(acceptedFiles)}
              accept={{ "application/pdf": [".pdf"] }}
              multiple={false}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <section>
                  <div
                    {...getRootProps({
                      className: `${inputClassName} ${
                        isDragActive ? "bg-[#F5FCD9]" : ""
                      } text-sm py-3 px-4 cursor-pointer rounded-[6px] border border-dashed border-border text-black bg-transparent w-full`,
                    })}
                  >
                    {uploadedFile ? (
                      uploadedFile.name
                    ) : (
                      <>
                        Drag and drop files here or{" "}
                        <span className="text-[#3766FF]">browse</span> to upload
                      </>
                    )}
                    <input
                      {...getInputProps({ onChange, onBlur })}
                      className="sr-only"
                      accept="application/pdf"
                    />
                  </div>
                </section>
              )}
            </Dropzone>
          );
        }}
      />

      {showErrMsg && error && (
        <div className="text-red-600">{error.message}</div>
      )}
    </div>
  );
}
