/* eslint-disable react/prop-types */
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

const RenderField = ({ field, props }) => {
  const {
    type,
    iconSrc,
    iconAlt,
    name,
    placeholder,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
  } = props;
  switch (type) {
    case "input":
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <img
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2 size-6"
            />
          )}
          <FormControl>
            <Input
              name={name}
              placeholder={placeholder}
              className="shad-input border-0"
              {...field}
            />
          </FormControl>
        </div>
      );
    case "phone":
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="NG"
            placeholder={placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            inputClass="!w-full h-auto"
            className={`outline-none border-none rounded-md`}
            country={"ng"}
          />
        </FormControl>
      );
    case "time":
      return (
        <FormControl>
          <Input
            name={name}
            placeholder={placeholder}
            className="rounded-md border border-dark-500 bg-dark-400"
            {...field}
            type="time"
          />
        </FormControl>
      );
    case "date_picker":
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          <img
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            className="ml-2 size-6"
            alt="calendar"
          />
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              showTimeSelect={showTimeSelect ?? false}
              timeInputLabel="Time:"
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );
    case "skeleton":
      return renderSkeleton ? renderSkeleton(field) : null;
    case "select":
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case "textarea":
      return (
        <FormControl>
          <Textarea
            name={name}
            placeholder={placeholder}
            className="shad-textArea"
            disabled={props.disabled}
            {...field}
          />
        </FormControl>
      );
    case "checkbox":
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
  }
};

export default function CustomFormField(props) {
  const { control, name, label, type } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {type !== "checkbox" && <FormLabel>{label}</FormLabel>}
          <RenderField field={field} props={props} />
          <FormDescription className="text-xs" />
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}
