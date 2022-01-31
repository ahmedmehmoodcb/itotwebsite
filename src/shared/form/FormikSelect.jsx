import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class FormikSelect extends Component {
  handleChange = value => {
    // this is going to call setFieldValue and manually update values.topics
    const { onChange, name } = this.props;
    onChange(name, value.value);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topics
    const { onBlur, name } = this.props;
    onBlur(name, true);
  };

  render() {
    const {
      value,
      itemOptions,
      touched,
      error,
      labelKey,
      className,
      placeholder,
      disabled,
      menuPosition,
      menuPlacement,
      menuShouldBlockScroll,
    } = this.props;
    return (
      <div
        styles={{ height: 22 }}
        className={`form__form-group-input-wrap ${className}`}
      >
        <Select
          id="color"
          options={itemOptions}
          multi
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={itemOptions.filter(option => {
            if (labelKey) {
              return option.label === value;
            }
            if (typeof option.label === 'object') {
              return false;
            }
            return option.value === value;
          })}
          placeholder={placeholder}
          classNamePrefix="react-select"
          isDisabled={disabled}
          menuPosition={menuPosition}
          menuPlacement={menuPlacement}
          menuShouldBlockScroll={menuShouldBlockScroll}
        />
        {touched && error && (
          <span className="form__form-group-error">{error}</span>
        )}
      </div>
    );
  }
}

FormikSelect.propTypes = {
  itemOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  labelKey: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  menuPosition: PropTypes.string,
  menuPlacement: PropTypes.string,
  menuShouldBlockScroll: PropTypes.bool,
};

FormikSelect.defaultProps = {
  labelKey: false,
  touched: false,
  error: null,
  className: null,
  placeholder: null,
  disabled: false,
  menuPosition: 'absolute',
  menuPlacement: 'auto',
  menuShouldBlockScroll: false,
};

export default FormikSelect;
