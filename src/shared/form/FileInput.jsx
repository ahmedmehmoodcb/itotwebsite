/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FileIcon from 'mdi-react/FileIcon';

class FileInputField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string,
      }),
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    value: null,
  };

  render() {
    const { onChange, name, value } = this.props;

    return (
      <div style={{ textAlign: 'center' }} className="box">
        <input
          type="file"
          name={name}
          id={name}
          className="inputfile inputfile-4"
          data-multiple-caption="{count} files selected"
          multiple
          onChange={e => {
            e.preventDefault();
            // convert files to an array
            const files = [...e.target.files];
            onChange({ file: files[0], name: files[0].name });
          }}
        />
        <label htmlFor={name}>
          <figure>
            <FileIcon size={100} />
          </figure>
          <span>{value.name || 'Choose a file'}</span>
        </label>
      </div>

      // </div>
      // <div className="form__form-group-file">
      //   <label htmlFor={name}>
      //     Choose the file
      //     <input
      //       type="file"
      //       name={name}
      //       id={name}
      //       onChange={e => {
      //         e.preventDefault();
      //         // convert files to an array
      //         const files = [...e.target.files];
      //         onChange({ file: files[0], name: files[0].name });
      //       }}
      //     />
      //   </label>
      //   <span>{value.name}</span>
      // </div>
    );
  }
}

const renderFileInputField = props => {
  const { input, meta } = props;
  return (
    <div className="form__form-group-input-wrap">
      <FileInputField {...input} />
      {meta.touched && meta.error && (
        <span className="form__form-group-error">{meta.error}</span>
      )}
    </div>
  );
};

renderFileInputField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderFileInputField.defaultProps = {
  meta: null,
};

export default renderFileInputField;
