/* eslint-disable react/prop-types */

// import CheckIcon from "./vectors/check-icon";

export default function Stepper({ value, currentStep }) {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-sm md:text-base font-medium">{currentStep}</p>
      <progress id="status" max="100" value={value} className="w-full">
        {value}%
      </progress>
    </div>
  );
}
