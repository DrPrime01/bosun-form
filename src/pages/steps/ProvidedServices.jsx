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
import { VENDOR_SERVICES } from "../../constants";

export default function ProvidedServices({
  control,
  setCurrentStep,
  providedServices,
}) {
  return (
    <>
      <CustomFormField
        name="providedServices"
        label="Vendor Services"
        type="skeleton"
        control={control}
        renderSkeleton={() => (
          <>
            {items.map((item) => (
              <FormField
                key={item.id}
                control={control}
                name="providedServices"
                render={({ field }) => {
                  const valueArray = field.value || [];
                  return (
                    <FormItem
                      key={item.id.toLowerCase().split(" ").join("-")}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={valueArray.includes(item.id)}
                          onCheckedChange={(checked) => {
                            const updatedValues = checked
                              ? [...valueArray, item.id]
                              : valueArray.filter((value) => value !== item.id);
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
      {providedServices && (
        <CustomFormField
          name="providedServices"
          label="Vendor Services (Additional)"
          type="skeleton"
          control={control}
          renderSkeleton={() => (
            <>
              {VENDOR_SERVICES.map((item) => (
                <FormField
                  key={item.id}
                  control={control}
                  name="providedServices"
                  render={({ field }) => {
                    const valueArray = field.value || [];
                    return (
                      <FormItem
                        key={item.id.toLowerCase().split(" ").join("-")}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={valueArray.includes(item.id)}
                            onCheckedChange={(checked) => {
                              const updatedValues = checked
                                ? [...valueArray, item.id]
                                : valueArray.filter(
                                    (value) => value !== item.id
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
      )}
      <div className="flex items-center justify-between">
        <Button
          type="button"
          className="md:max-w-[160px] w-fit md:w-full"
          onClick={() => setCurrentStep((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          type="button"
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
    id: "Air Testing",
    label: "Air Testing",
  },
  {
    id: "Appliance Repair and Maintenance",
    label: "Appliance Repair and Maintenance",
  },
  {
    id: "Asbestos",
    label: "Asbestos",
  },
  {
    id: "Carpentry",
    label: "Carpentry",
  },
  {
    id: "Carpet Cleaning",
    label: "Carpet Cleaning",
  },
  {
    id: "Chimney Sweep",
    label: "Chimney Sweep",
  },
  {
    id: "Cleaning Services",
    label: "Cleaning Services",
  },
  {
    id: "Electrical",
    label: "Electrical",
  },
  {
    id: "Environmental Testing",
    label: "Environmental Testing",
  },
  {
    id: "Fence",
    label: "Fence",
  },
  {
    id: "Fireplaces",
    label: "Fireplaces",
  },
  {
    id: "Flooring",
    label: "Flooring",
  },
  {
    id: "Foundation/Structural",
    label: "Foundation/Structural",
  },
  {
    id: "Garage",
    label: "Garage",
  },
  {
    id: "Garage Repairs",
    label: "Garage Repairs",
  },
  {
    id: "General Contactor / Rehab",
    label: "PuGeneral Contactor / Rehab",
  },
  {
    id: "Handyman",
    label: "Handyman",
  },
  {
    id: "HVAC (Heating Ventilation and Air Conditioning)",
    label: "HVAC (Heating Ventilation and Air Conditioning)",
  },
  {
    id: "Landscaping and Grounds Maintenance",
    label: "Landscaping and Grounds Maintenance",
  },
  {
    id: "Lead",
    label: "Lead",
  },
  {
    id: "Locksmith Services",
    label: "Locksmith Services",
  },
  {
    id: "Maid",
    label: "Maid",
  },
  {
    id: "Maintenance",
    label: "Maintenance",
  },
  {
    id: "Other",
    label: "Other",
  },
  {
    id: "Painting",
    label: "Painting",
  },
  {
    id: "Pest Control",
    label: "Pest Control",
  },
  {
    id: "Plumbing",
    label: "Plumbing",
  },
  {
    id: "Pool",
    label: "Pool",
  },
  {
    id: "Restoration Services",
    label: "Restoration Services",
  },
  {
    id: "Roofing",
    label: "Roofing",
  },
  {
    id: "Septic/Sewer",
    label: "Septic/Sewer",
  },
  {
    id: "Trash Haul/Set Out",
    label: "Trash Haul/Set Out",
  },
  {
    id: "Water Extraction",
    label: "Water Extraction",
  },
  {
    id: "Water Remediation / Mold",
    label: "Water Remediation / Mold",
  },
  {
    id: "Window",
    label: "Window",
  },
  {
    id: "Yard Drainage",
    label: "Yard Drainage",
  },
];
