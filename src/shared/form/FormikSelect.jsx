/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

const { Option } = Select;

class FormikSelect extends Component {
  handleChange = item => {
    // this is going to call setFieldValue and manually update values.topics
    const { onChange, name } = this.props;
    onChange(name, item);
  };

  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topics
    const { onBlur, name } = this.props;
    onBlur(name, true);
  };

  render() {
    const { itemOptions, touched, error, value, className, placeholder } =
      this.props;
    return (
      <div className={className}>
        <Select
          placeholder={placeholder}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={value}
          className="w-full"
        >
          {itemOptions.map(item => (
            <Option value={item.value}>{item.label}</Option>
          ))}
        </Select>
        {touched && error && <span className="form-field-error">{error}</span>}
      </div>
    );
  }
}

FormikSelect.propTypes = {
  itemOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

FormikSelect.defaultProps = {
  touched: false,
  error: "",
  className: "",
  placeholder: "",
};

export default FormikSelect;
