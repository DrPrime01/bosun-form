/* eslint-disable react/prop-types */
import { useFormContext, get } from "react-hook-form";

export default function TimePicker({ label, name, required }) {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = get(errors, name);
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="text-left block w-full mb-2 text-sm">
          {label}
        </label>
      )}
      <input
        type="time"
        aria-label="Time"
        {...register(name, {
          required: required ? `${name} is required` : "",
        })}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error.message}</p>}
    </div>
  );
}
