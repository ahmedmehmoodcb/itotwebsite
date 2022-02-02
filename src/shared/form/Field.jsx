/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import { Input } from "antd";

const FormikField = ({
  textArea,
  textRight,
  className,
  touched,
  error,
  disabled,
  placeholder,
  ...props
}) => {
  FormikField.propTypes = {
    textArea: PropTypes.bool,
    textRight: PropTypes.bool,
    touched: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
  };
  FormikField.defaultProps = {
    textArea: false,
    textRight: false,
    touched: false,
    disabled: false,
    className: null,
    placeholder: null,
    error: null,
  };
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field] = useField(props);
  return (
    <div className={`sm:w-full md:w-2/3 ${className}`}>
      {textArea && (
        <Input.TextArea
          {...field}
          {...props}
          maxLength={120}
          disabled={disabled}
          placeholder={placeholder}
        />
      )}
      {!textArea && (
        <Input
          {...field}
          {...props}
          className={textRight ? "text-right" : ""}
          disabled={disabled}
          placeholder={placeholder}
        />
      )}
      {touched && error && <span className="form-field-error">{error}</span>}
    </div>
  );
};

export default FormikField;
