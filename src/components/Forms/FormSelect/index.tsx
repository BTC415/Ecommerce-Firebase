//importing types
import { FormOptions } from '../../../interfaces';
import { JSXSelectElement } from '../../../../types';
//props interface
interface FormSelectProps extends JSXSelectElement {
  label?: string;
  options: FormOptions[];
}
//form select component
const FormSelect: React.FC<FormSelectProps> = ({
  defaultValue,
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
      <select onChange={onChange} {...otherProps} value={defaultValue}>
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
