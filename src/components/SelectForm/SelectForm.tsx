import React from "react";
import { useForm, useController } from "react-hook-form";
import Select from "react-select";
import { Button, FormGroup, Label } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  size: string;
  unit: string;
};

type Props = {
  defaultSize?: string;
  defaultUnit?: string;
};

const schema = yup.object().shape({
  size: yup.string().required("Size is required"),
  unit: yup.string().required("Unit is required"),
});

const SelectForm: React.FC<Props> = ({
  defaultSize = "",
  defaultUnit = "",
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      size: defaultSize,
      unit: defaultUnit,
    },
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data);
  };

  const unitOptions = [
    { value: "MB", label: "MB" },
    { value: "GB", label: "GB" },
    { value: "TB", label: "TB" },
  ];

  const {
    field: { value: unitValue, onChange: unitOnChange, ...restUnitField },
  } = useController({ name: "unit", control });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="size">Size</Label>
        <input type="text" id="size" {...control.register("size")} />
        {errors.size && <span>{errors.size.message}</span>}
      </FormGroup>

      <FormGroup>
        <Label for="unit">Unit</Label>
        <Select
          id="unit"
          {...restUnitField}
          options={unitOptions}
          value={
            unitValue
              ? unitOptions.find((x) => x.value === unitValue)
              : undefined
          }
          onChange={(option) => unitOnChange(option ? option.value : option)}
          {...restUnitField}
        />
        {errors.unit && <span>{errors.unit.message}</span>}
      </FormGroup>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SelectForm;
