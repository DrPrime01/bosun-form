/* eslint-disable react/prop-types */
import Dropzone from "react-dropzone";
import { useFormContext, get, Controller } from "react-hook-form";

import { convertFileToUrl, isValidURL } from "@src/utils";
import PlusIcon from "../vectors/PlusIcon";
import { EditIconLight } from "../vectors/EditIcon";

export default function ImageUpload({
  name,
  required = true,
  label,
  className,
  placeholder,
}) {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = get(errors, name);

  const handleFile = (value) => {
    if (Array.isArray(value)) {
      return convertFileToUrl(value[0]);
    } else if (isValidURL(value)) {
      return value;
    } else {
      return "";
    }
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="text-left block w-full mb-2 text-sm">
          {label}
        </label>
      )}
      <Controller
        name={name}
        rules={{ required: required ? `${name} is required` : "" }}
        control={control}
        render={({ field }) => {
          const { value, onBlur, onChange } = field;
          return (
            <Dropzone onDrop={(acceptedFiles) => onChange(acceptedFiles)}>
              {({ getRootProps, getInputProps, isDragActive }) => (
                <section>
                  <div
                    {...getRootProps({
                      className: `${className} ${
                        isDragActive ? "bg-[#F5FCD9]" : ""
                      } cursor-pointer max-h-[120px] h-[120px] border border-[#E1E5EA] bg-[#FDFDFD] rounded-md flex items-center justify-center`,
                    })}
                  >
                    <input
                      {...getInputProps({ onChange, onBlur })}
                      className="sr-only"
                    />
                    {value && value.length > 0 ? (
                      <div className="w-full relative">
                        <div className="absolute inset-0 bg-black/55 items-center justify-center flex flex-col gap-0.5">
                          <EditIconLight />
                          <p className="text-white text-sm">Edit Image</p>
                        </div>
                        <img
                          src={handleFile(value)}
                          alt={value[0]?.name}
                          className="object-cover h-[120px] w-full"
                        />
                      </div>
                    ) : (
                      <div className="items-center flex flex-col gap-0.5 cursor-pointer">
                        <PlusIcon />
                        <p className="text-[#ABA9BC] text-sm">
                          {placeholder || "Add Image"}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
          );
        }}
      />
      <p className="self-end text-xs text-[#ABA9BC] mt-2">5MB</p>
      {error && <p className="text-red-600 text-xs mt-1">{error.message}</p>}
    </div>
  );
}
