import React, { Ref } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useForm } from "react-hook-form";

export function EmailFormDemo() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{
    email: string;
    termsOfService: boolean;
  }>({
    defaultValues: {
      email: "",
      termsOfService: false,
    },
    resolver: (data) => {
      return {
        values: data,
        errors: {
          email: /^\S+@\S+$/.test(data.email) ? null : "Invalid email",
        },
      };
    },
  });

  const onSubmit = (data: { email: string; termsOfService: boolean }) => {
    console.log(data);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            innerRef={register as Ref<HTMLInputElement>}
            invalid={!!errors.email}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="termsOfService"
              innerRef={register as Ref<HTMLInputElement>}
            />
            I agree to sell my privacy
          </Label>
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
