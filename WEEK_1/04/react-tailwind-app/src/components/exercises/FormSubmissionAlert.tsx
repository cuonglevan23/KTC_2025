import React from "react";
import { useInputField } from "../../hooks";
import { Input, Button, Card } from "../ui";
import type { SubmitEventHandler } from "../../types";

export const FormSubmissionAlert: React.FC = () => {
  const { value, handleChange, reset } = useInputField("");

  const handleSubmit: SubmitEventHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      alert(`You submitted: ${value}`);
      reset();
    } else {
      alert("Please enter some text before submitting!");
    }
  };

  return (
    <Card title="Exercise 5: Form Submission Alert">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Enter your message..."
          required
        />
        <Button type="submit" className="w-full" disabled={!value.trim()}>
          Submit
        </Button>
      </form>
    </Card>
  );
};
