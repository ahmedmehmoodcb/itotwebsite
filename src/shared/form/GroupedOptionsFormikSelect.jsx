import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const customStyles = {
  option: provided => ({
    ...provided,
    paddingLeft: '20px',
    fontSize: '13px',
  }),
  groupHeading: provided => ({
    ...provided,
    fontSize: '12px',
    fontWeight: 'bold',
  }),
};

function selectedValue(itemOptions, value) {
  let filtered = itemOptions.find(option => {
    if (typeof option.label === 'object') {
      return false;
    }
    if (option.options) {
      return option.options.find(item => item.value === value);
    }
    return option.value === value;
  });

  if (filtered && filtered.options) {
    filtered = filtered.options.find(item => item.value === value);
  }
  return filtered;
}

class GroupedOptionsFormikSelect extends Component {
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
      itemOptions,
      touched,
      value,
      error,
      className,
      placeholder,
      menuPosition,
      disabled,
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
          value={selectedValue(itemOptions, value)}
          placeholder={placeholder}
          classNamePrefix="react-select"
          isDisabled={disabled}
          styles={customStyles}
          menuPosition={menuPosition}
        />
        {touched && error && (
          <span className="form__form-group-error">{error}</span>
        )}
      </div>
    );
  }
}

GroupedOptionsFormikSelect.propTypes = {
  itemOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  menuPosition: PropTypes.string,
  disabled: PropTypes.bool,
};

GroupedOptionsFormikSelect.defaultProps = {
  touched: false,
  error: null,
  className: null,
  placeholder: null,
  menuPosition: null,
  disabled: false,
};

export default GroupedOptionsFormikSelect;
