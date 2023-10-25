import React from "react";

export type InputTypes = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string;
  labelPlaceholder?: string
}