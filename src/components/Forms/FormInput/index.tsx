//input props
interface FormInputProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
  placeholder: string;
  name: string;
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
