//importing types
import { FormOptions } from '../../../state';
//props interface
interface FormSelectProps {
  label: string;
  options: FormOptions[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
//form select component
const FormSelect: React.FC<FormSelectProps> = ({
  options,
  onChange,
  label,
  ...otherProps
}) => {
  //return nothing if no options
  if (!Array.isArray(options) || options.length < 1) return null;
  return (
    <div className="form__row">
      {label && <label>{label}</label>}

      <select onChange={onChange} {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;
          return (
            <option key={index} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
