//importing types
import { FormOptions } from '../../../interfaces';
import { JSXSelectElement } from '../../../../types';

interface FormSelectProps extends JSXSelectElement {
  label?: string;
  options: FormOptions[];
}

const FormSelect: React.FC<FormSelectProps> = ({
  defaultValue,
  options,
  onChange,
  label,
  ...otherProps
}) => {
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
