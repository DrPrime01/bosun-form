/* eslint-disable react/prop-types */
import { Button } from "../../components/ui/button";

import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
} from "../../components/ui/form";
import { Checkbox } from "../../components/ui/checkbox";
import CustomFormField from "../../components/custom-form-field";

export default function ServiceAreaCoverage({ control, setCurrentStep }) {
  return (
    <>
      <CustomFormField
        name="serviceAreas"
        label="Vendor Service Areas"
        type="skeleton"
        control={control}
        renderSkeleton={() => (
          <>
            {items.map((item) => (
              <FormField
                key={item.id}
                control={control}
                name="serviceAreas"
                render={({ field }) => {
                  const valueArray = field.value || []; // Ensure field.value is an array
                  return (
                    <FormItem
                      key={item.id.toLowerCase().split(" ").join("-")}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={valueArray.includes(item.id)} // Use the valueArray
                          onCheckedChange={(checked) => {
                            const updatedValues = checked
                              ? [...valueArray, item.id] // Add item to the array
                              : valueArray.filter(
                                  (value) => value !== item.id // Remove item from the array
                                );
                            field.onChange(updatedValues);
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </>
        )}
      />
      <div className="flex items-center justify-between">
        <Button
          className="md:max-w-[160px] w-fit md:w-full"
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          className="md:max-w-[160px] w-fit md:w-full"
          onClick={() => setCurrentStep((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </>
  );
}

const items = [
  {
    id: "atlanta",
    label: "Atlanta",
  },
  {
    id: "Atlanta",
    label: "Atlanta",
  },
  {
    id: "Cincinnati",
    label: "Cincinnati",
  },
  {
    id: "Cleveland",
    label: "Cleveland",
  },
  {
    id: "Dallas-Fort Worth",
    label: "Dallas-Fort Worth",
  },
  {
    id: "Fort Lauderdale/Palm Beach",
    label: "Fort Lauderdale/Palm Beach",
  },
  {
    id: "Fort Myers",
    label: "Fort Myers",
  },
  {
    id: "Houston",
    label: "Houston",
  },
  {
    id: "Jacksonville",
    label: "Jacksonville",
  },
  {
    id: "Macon/Warner Robins",
    label: "Macon/Warner Robins",
  },
  {
    id: "Memphis",
    label: "Memphis",
  },
  {
    id: "Miami-Dade",
    label: "Miami-Dade",
  },
  {
    id: "Minneapolis",
    label: "Minneapolis",
  },
  {
    id: "Orlando",
    label: "Orlando",
  },
  {
    id: "Phoenix",
    label: "Phoenix",
  },
  {
    id: "Pueblo",
    label: "Pueblo",
  },
  {
    id: "San Antonio",
    label: "San Antonio",
  },
  {
    id: "St. Louis",
    label: "St. Louis",
  },
  {
    id: "Tampa",
    label: "Tampa",
  },
];