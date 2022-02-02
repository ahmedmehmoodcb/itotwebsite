/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Upload, Button } from "antd";
import { AiOutlineUpload } from "react-icons/ai";

class FileInputField extends PureComponent {
  handleChange = item => {
    // this is going to call setFieldValue and manually update values.topics
    const { onChange, name } = this.props;
    // item.file will select single file where item.files consist of multiple files selected
    onChange(name, item.file);
  };

  render() {
    const { name, placeholder, className, error, touched, value } = this.props;

    return (
      <div className={className}>
        <Upload
          name={name}
          listType="picture"
          onChange={this.handleChange}
          defaultFileList={value ? [value] : []}
        >
          <Button
            className="w-full flex gap-2"
            icon={<AiOutlineUpload size={16} />}
          >
            {placeholder}
          </Button>
        </Upload>
        {touched && error && <span className="form-field-error">{error}</span>}
      </div>
    );
  }
}

FileInputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.object,
};

FileInputField.defaultProps = {
  placeholder: "Click to Upload",
  touched: false,
  className: "",
  error: "",
  value: null,
};

export default FileInputField;
