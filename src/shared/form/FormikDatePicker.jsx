import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import moment from 'moment';

class DatePickerField extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    touched: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    error: PropTypes.string,
    minDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    excludeDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    highlightDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  };

  static defaultProps = {
    placeholder: '',
    id: '',
    touched: false,
    error: '',
    value: moment().format('YYYY/MM/DD'),
    minDate: '',
    excludeDates: [],
    highlightDates: [],
  };

  handleChange = (date, e) => {
    e.preventDefault();
    const { onChange, name } = this.props;
    if (date && moment(date).isValid())
      onChange(name, moment(date).format('YYYY/MM/DD'));
    else onChange(name, null);
  };

  handleBlur = () => {
    const { onBlur, name } = this.props;
    onBlur(name, true);
  };

  render() {
    const {
      touched,
      error,
      value,
      minDate,
      excludeDates,
      highlightDates,
      placeholder,
      id,
    } = this.props;

    const selected = value ? moment(value, 'YYYY/MM/DD').toDate() : null;

    return (
      <div className="date-picker">
        <DatePicker
          className="form__form-group-datepicker"
          id={id}
          selected={selected}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          showYearDropdown
          dateFormat="yyyy/MM/dd"
          dropDownMode="select"
          popperPlacement="center"
          placeholderText={placeholder}
          withPortal={isMobileOnly}
          minDate={minDate}
          excludeDates={excludeDates}
          highlightDates={highlightDates}
          autoComplete="off"
        />
        {touched && error && (
          <span className="form__form-group-error">{error}</span>
        )}
      </div>
    );
  }
}

const FormikDatePickerField = props => {
  FormikDatePickerField.propTypes = {
    error: PropTypes.string,
  };
  FormikDatePickerField.defaultProps = {
    error: null,
  };
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field] = useField(props);
  return <DatePickerField {...field} {...props} />;
};

export default FormikDatePickerField;
