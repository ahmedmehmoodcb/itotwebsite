/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

function RadioButtons({ name, options, ...rest }) {
  RadioButtons.propTypes = {
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  };

  RadioButtons.defaultProps = {
    name: '',
    options: [],
  };

  return (
    <Field name={name}>
      {({ field }) => {
        return options.map(option => {
          return (
            <React.Fragment key={option.label}>
              <label className="radio-btn">
                <input
                  className="radio-btn__radio"
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <span className="radio-btn__radio-custom" />
                <span className="radio-btn__label">{option.label}</span>
              </label>
            </React.Fragment>
          );
        });
      }}
    </Field>
  );
}

export default RadioButtons;
