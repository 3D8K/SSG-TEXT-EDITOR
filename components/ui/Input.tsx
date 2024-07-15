import React, { ChangeEvent } from "react";
import { Input as AntdInput } from "antd";
import { InputProps as AntInputProps } from "antd/lib/input";
import styled from "styled-components";

interface CustomInputProps {
  isAtAllow?: boolean;
  isError?: boolean;
  isEmail?: boolean;
  isNoValid?: boolean;
  className?: string;
  defaultValue?: string | number | boolean | any;
  onChange?: (value: ChangeEvent<HTMLInputElement> | string) => void;
  isSearch?: boolean;
  isPaste?: boolean;
}

export const Input: React.FC<any> = ({
  isAtAllow = false,
  isError = false,
  isEmail = false,
  isNoValid = false,
  isPaste = false,
  isCopy = false,
  ...rest
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isNoValid) return e;
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (isNoValid) return e;
  };

  return (
    <CustomInput
      {...rest}
      maxLength={255}
      onKeyDown={rest.isSearch ? () => {} : handleKeyDown}
      style={{ ...rest.style }}
      onPaste={handlePaste}
      className={`font-normal borderedSelect ${isError ? "error-border" : ""} ${rest.className}`}
    />
  );
};

const CustomInput = styled(AntdInput)`
  border-radius: 12px;
  border: 1px solid #eaf0f5;
  box-shadow: 0px 0px 2px 0px #99b5c8cc inset !important;
  box-shadow: 0px 0px 4px -6px #e0eaf199 inset !important;
  font-size: 14px;

  &.error-border {
    border-color: red !important;
  }
`;
