/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import CheckIcon from 'mdi-react/CheckIcon';
import PropTypes from 'prop-types';

const CheckBoxField = ({ label, color, name, field, form, ...props }) => {
  CheckBoxField.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    label: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
  };
  return (
    <label htmlFor={name}>
      <input {...field} type="checkbox" {...props} />
      <span
        className="checkbox-btn__checkbox-custom"
        style={color ? { background: color, borderColor: color } : {}}
      >
        <CheckIcon />
      </span>
      <span className="checkbox-btn__label">{label}</span>
    </label>
  );
};

export default CheckBoxField;
