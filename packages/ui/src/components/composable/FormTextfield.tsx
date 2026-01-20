import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface FormTextfieldProps {
  form: UseFormReturn<any>;
  type?: string;
  step?: string | number;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  className?: string;
}

export function FormTextfield({
  form,
  type = "text",
  step,
  name,
  label,
  placeholder,
  description,
  className,
}: FormTextfieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === "number" ? (
              <Input
                type="number"
                step={step}
                placeholder={placeholder}
                {...field}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
              />
            ) : type === "textarea" ? (
              <Textarea
                className={className}
                placeholder={placeholder}
                {...field}
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                value={field.value ?? ""}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

interface FormTextSelectProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  options?: Array<{ value: string; label: string }>;
  description?: string;
  placeholder?: string;
  className?: string;
}

export function FormTextSelect({
  form,
  name,
  label,
  options,
  description,
  placeholder,
  className,
}: FormTextSelectProps) {
  return (
    <FormField
      key={name}
      control={form.control}
      name={name}
      render={({ field: formField }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={formField.onChange} value={formField.value}>
            <FormControl>
              <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
