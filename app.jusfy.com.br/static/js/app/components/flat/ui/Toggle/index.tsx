import { useState } from "react";
import * as S from "./styles";

type ToggleProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  "data-testid"?: string;
  variant?: 'default' | 'menu';
};

function Toggle({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled = false,
  className,
  "data-testid": testId,
  variant = 'default',
}: ToggleProps) {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : uncontrolledChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newChecked = !checked;
    
    if (!isControlled) {
      setUncontrolledChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };

  return (
    <S.ToggleContainer
      className={className}
      data-testid={testId}
      onClick={handleToggle}
      checked={checked}
      disabled={disabled}
      variant={variant}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <S.ToggleThumb checked={checked} disabled={disabled} />
    </S.ToggleContainer>
  );
}

export default Toggle;
