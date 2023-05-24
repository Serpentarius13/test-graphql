import { ChangeEvent, HTMLAttributes } from "react";
import cls from "./TextInput.module.scss";
import { classNames } from "@/features/classNames";

interface TextInputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (e: ChangeEvent) => unknown;
}

export default function TextInput({
  placeholder,
  onChange,
  value,
  className = "",
}: TextInputProps) {
  return (
    <label className={classNames(className, [cls.input])}>
      <span>{placeholder}</span>
      <input value={value} onChange={onChange} className="borderline" />
    </label>
  );
}
