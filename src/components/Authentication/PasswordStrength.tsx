import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Progress, Row, Col } from "reactstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

interface PasswordRequirementProps {
  meets: boolean;
  label: string;
}

const PasswordRequirement = ({ meets, label }: PasswordRequirementProps) => {
  const Icon = meets ? FaCheck : FaTimes;
  const color = meets ? "text-success" : "text-danger";

  return (
    <p className={color} style={{ marginTop: "5px" }}>
      <Icon size="1rem" strokeWidth={1.5} />
      <span style={{ marginLeft: "7px" }}>{label}</span>
    </p>
  );
};

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];
const getStrength = (password: string) => {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
};

export const PasswordStrength = () => {
  const [value, setValue] = useState("");
  const [interacted, setInteracted] = useState(false); // New state variable
  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Col key={index} sm={3}>
        <Progress
          style={{ transitionDuration: "0ms" }}
          value={
            value.length > 0 && index === 0
              ? 100
              : strength >= ((index + 1) / 4) * 100
              ? 100
              : 0
          }
          color={
            strength > 80 ? "success" : strength > 50 ? "warning" : "danger"
          }
          className="mb-2"
        />
      </Col>
    ));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!interacted) {
      setInteracted(true);
    }
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={value}
            onChange={handleInputChange}
            placeholder="Your password"
            required
          />
          {interacted && value.length === 0 && (
            <p className="text-danger" style={{ marginTop: "5px" }}>
              Please enter a password.
            </p>
          )}
        </FormGroup>
      </Form>

      <Row>{bars}</Row>

      <PasswordRequirement
        label="Has at least 6 characters"
        meets={value.length > 5}
      />
      {checks}
    </div>
  );
};
