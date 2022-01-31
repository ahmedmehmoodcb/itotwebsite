import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

const FormikFileInput = ({
  textArea,
  textRight,
  className,
  touched,
  error,
  disabled,
  placeholder,
  ...props
}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field] = useField(props);
  return (
    <div className={`form__form-group-input-wrap ${className}`}>
      <input
        type="file"
        title=" "
        {...field}
        {...props}
        // className="inputfile"
        disabled={disabled}
        placeholder={placeholder}
      />
      {touched && error && (
        <span className="form__form-group-error">{error}</span>
      )}
    </div>
  );
};

FormikFileInput.propTypes = {
  textArea: PropTypes.bool,
  textRight: PropTypes.bool,
  touched: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

FormikFileInput.defaultProps = {
  textArea: false,
  textRight: false,
  touched: false,
  disabled: false,
  className: null,
  placeholder: null,
  error: null,
};

export default FormikFileInput;
