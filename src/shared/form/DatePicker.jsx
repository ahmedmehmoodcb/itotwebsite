import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import { isMobileOnly } from 'react-device-detect';
import PropTypes from 'prop-types';
import moment from 'moment';

class DatePickerField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
    minDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
  };

  static defaultProps = {
    id: '',
    minDate: null,
  };

  handleChange = (date, e) => {
    e.preventDefault();
    const { onChange } = this.props;
    onChange(date);
  };

  render() {
    const { name, value, id, minDate } = this.props;

    const selected = value ? moment(value, 'YYYY/MM/DD').toDate() : null;

    return (
      <div className="date-picker">
        <DatePicker
          className="form__form-group-datepicker"
          id={id}
          name={name}
          value={value}
          selected={selected}
          onChange={this.handleChange}
          showYearDropdown
          dateFormat="yyyy/MM/dd"
          dropDownMode="select"
          popperPlacement="center"
          withPortal={isMobileOnly}
          minDate={minDate}
        />
      </div>
    );
  }
}

const renderDatePickerField = props => {
  const { input, id, minDate } = props;
  return <DatePickerField {...input} id={id} minDate={minDate} />;
};

renderDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

renderDatePickerField.defaultProps = {
  minDate: null,
};

export default renderDatePickerField;
