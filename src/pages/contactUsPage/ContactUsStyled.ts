import { styled } from "styled-components";

interface StyledInputProps {
  $hasError?: boolean;
}

export const SuccessMessage = styled.h2`
  font-size: 32px;
  color: #333;
  text-align: center;

  width: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  background-color: rgb(245, 245, 245);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 60px 20px;
  margin: 0 auto;
  width: 100%;
`;

export const FormContainer = styled.form`
  width: 100%;
  border: 1px solid #c7c7c7;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;
  padding: 30px;
  border-radius: 8px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  transition: color 0.2s ease;

  ${FormField}:focus-within & {
    color: #007aff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled.input<StyledInputProps>`
  width: 100%;
  padding: 14px;
  border: 2px solid ${(props) => (props.$hasError ? "#ff6b6b" : "#e0e0e0")};
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  color: #333;

  &:hover {
    border-color: ${(props) => (props.$hasError ? "#ff6b6b" : "#666")};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? "#ff6b6b" : "#007AFF")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError
          ? "rgba(255, 107, 107, 0.1)"
          : "rgba(0, 122, 255, 0.1)"};
  }

  &::placeholder {
    color: #999;
    transition: color 0.2s ease;
  }

  &:focus::placeholder {
    color: #bbb;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea<StyledInputProps>`
  width: 100%;
  padding: 14px;
  border: 2px solid ${(props) => (props.$hasError ? "#ff6b6b" : "#e0e0e0")};
  border-radius: 8px;
  min-height: 120px;
  resize: vertical;
  font-size: 16px;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  color: #333;
  font-family: inherit;

  &:hover {
    border-color: ${(props) => (props.$hasError ? "#ff6b6b" : "#666")};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => (props.$hasError ? "#ff6b6b" : "#007AFF")};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$hasError
          ? "rgba(255, 107, 107, 0.1)"
          : "rgba(0, 122, 255, 0.1)"};
  }

  &::placeholder {
    color: #999;
    transition: color 0.2s ease;
  }

  &:focus::placeholder {
    color: #bbb;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
    min-height: 100px;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: 4px;
  transition: opacity 0.2s ease;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 28px;
  background: #007aff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #0051ff;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 122, 255, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;
