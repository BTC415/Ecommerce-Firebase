import { JSXInputElement } from '../../../../types';

interface FormInputProps extends JSXInputElement {
  label?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  onChange,
  label,
  ...otherProps
}) => (
  <div className="form__input__container">
    {label && <label>{label}</label>}
    <input className="form__input" {...otherProps} onChange={onChange} />
  </div>
);

export default FormInput;
