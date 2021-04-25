import { JSXInputElement } from '../../../../types';
//input props
interface FormInputProps extends JSXInputElement {
  label?: string;
}
//form input component
const FormInput: React.FC<FormInputProps> = ({
  onChange,
  label,
  ...otherProps
}) => {
  return (
    <div className="form__input__container">
      {label && <label>{label}</label>}
      <input className="form__input" {...otherProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
