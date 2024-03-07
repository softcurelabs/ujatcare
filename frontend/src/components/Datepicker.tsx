import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface HyperDatepickerProps {
  name?: string;
  value: Date;
  onChange: (date: any) => void;
  hideAddon?: boolean;
  inputClass?: string;
  dateFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  register?: any;
  showTimeSelect?: boolean;
  tI?: number;
  timeCaption?: string;
  timeFormat?: string;
  showTimeSelectOnly?: boolean;
  monthsShown?: number;
  inline?: boolean;
  disabled?: boolean;
}

const HyperDatepicker = (props: HyperDatepickerProps) => {
  return (
    <>
      {/* date picker control */}
      {props.showTimeSelectOnly ? (
        <DatePicker
          name={props.name}
          timeIntervals={props.tI}
          selected={props.value}
          onChange={(date) => props.onChange(date)}
          showTimeSelect={props.showTimeSelect}
          timeFormat={"hh:mm a"}
          timeCaption={props.timeCaption}
          dateFormat={"hh:mm"}
          className="is-invalid"
          minDate={props.minDate}
          scrollableYearDropdown={true}
          scrollableMonthYearDropdown={true}
          maxDate={props.maxDate}
          disabled={props.disabled}
          monthsShown={props.monthsShown}
          wrapperClassName="is-invalid"
          showTimeSelectOnly={props.showTimeSelectOnly}
          inline={props.inline}
          autoComplete="off"
        />
      ) : (
        <DatePicker
          name={props.name}
          timeIntervals={props.tI}
          selected={props.value}
          onChange={(date) => props.onChange(date)}
          showTimeSelect={props.showTimeSelect}
          timeFormat={"hh:mm a"}
          timeCaption={props.timeCaption}
          dateFormat={props.dateFormat}
          minDate={props.minDate}
          disabled={props.disabled}
          wrapperClassName="is-invalid"
          maxDate={props.maxDate}
          showMonthDropdown={true}
          showYearDropdown={true}
          scrollableMonthYearDropdown={true}
          monthsShown={props.monthsShown}
          showTimeSelectOnly={props.showTimeSelectOnly}
          inline={props.inline}
          autoComplete="off"
        />
      )}
    </>
  );
};

export default HyperDatepicker;
