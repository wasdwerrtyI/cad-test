import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Title } from "../../components/shared/Title/Title";
import {
  ContentContainer,
  ErrorMessage,
  FormContainer,
  FormField,
  Input,
  Label,
  PageContainer,
  SubmitButton,
  SuccessMessage,
  TextArea,
} from "./ContactUsStyled";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export function ContactUsPage() {
  const [serverMessage, setServerMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setServerMessage(result.message);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setServerMessage("Something went wrong. Please try again.");
      setIsSubmitted(true);
    }
  };

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        {!isSubmitted ? (
          <>
            {" "}
            <Title>Only CTA on the page</Title>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <FormField>
                <Label>Name *</Label>
                <Input
                  placeholder="Value"
                  {...register("name", { required: "Name is required" })}
                  $hasError={!!errors.name}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </FormField>
              <FormField>
                <Label>Email *</Label>
                <Input
                  type="email"
                  placeholder="Value"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email",
                    },
                  })}
                  $hasError={!!errors.email}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </FormField>
              <FormField>
                <Label>Message *</Label>
                <TextArea
                  placeholder="Value"
                  {...register("message", { required: "Message is required" })}
                  $hasError={!!errors.message}
                />
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </FormField>
              <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
          </>
        ) : (
          <SuccessMessage>{serverMessage}</SuccessMessage>
        )}
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
