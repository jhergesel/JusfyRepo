import { useEffect, useRef, useState } from "react";
import * as S from "./index.styles";

type InputOtpProps = {
  numberOfDigits?: number;
  onComplete: (otp: string) => void;
  className?: string;
  disabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

const ONLY_NUMBERS_REGEX = /^\d+$/;
const DIGITS_OR_EMPTY_REGEX = /^\d*$/;

function InputOtp({
  numberOfDigits = 6,
  onComplete,
  className,
  disabled,
  isError,
  errorMessage,
}: InputOtpProps) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, numberOfDigits);
  }, [numberOfDigits]);

  const handleHiddenInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!ONLY_NUMBERS_REGEX.test(value)) return;

    const digits = value.slice(0, numberOfDigits).split("");
    const newOtp = new Array(numberOfDigits).fill("");

    digits.forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    if (newOtp.every(digit => digit !== "")) {
      onComplete(newOtp.join(""));
    }

    const lastFilledIndex = Math.min(digits.length - 1, numberOfDigits - 1);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (disabled) return;
    const value = element.value;

    if (!DIGITS_OR_EMPTY_REGEX.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < numberOfDigits - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every(digit => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (disabled) return;
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text/plain")
      .slice(0, numberOfDigits);

    if (!ONLY_NUMBERS_REGEX.test(pastedData)) return;

    const newOtp = new Array(numberOfDigits).fill("");

    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }

    setOtp(newOtp);

    if (newOtp.every(digit => digit !== "")) {
      onComplete(newOtp.join(""));
    }

    const lastFilledIndex = Math.min(pastedData.length, numberOfDigits - 1);
    inputRefs.current[lastFilledIndex].focus();
  };

  return (
    <div onPaste={handlePaste} className={className}>
      {/* Input oculto para autocomplete de SMS */}
      <input
        ref={hiddenInputRef}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          width: 0,
          height: 0,
        }}
        onChange={handleHiddenInputChange}
        tabIndex={-1}
        aria-hidden="true"
      />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {otp.map((data, index) => (
          <S.Input
            key={index}
            type="text"
            inputMode="numeric"
            pattern="\d"
            value={data}
            maxLength={1}
            ref={el => (inputRefs.current[index] = el as HTMLInputElement)}
            onChange={e => handleChange(e.target, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onFocus={e => e.target.select()}
            disabled={disabled}
            isError={isError}
          />
        ))}
      </div>

      {isError && errorMessage && (
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
      )}
    </div>
  );
}

export default InputOtp;
