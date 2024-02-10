import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";

interface DatepickerInputProps {
  onClick?: () => void;
  value?: string;
  inputClass: string;
  name?: string;
  register?: any;
  children?: React.ReactNode;
}

/* Datepicker with Input */
const DatepickerInput = forwardRef<HTMLInputElement, DatepickerInputProps>(
  (props, ref) => {
    const onDateValueChange = () => {
      // console.log("date value changed");
    };
    return (
      <input
        name={props.name}
        type="text"
        className={classNames("form-control", props.inputClass)}
        onClick={props.onClick}
        value={props.value}
        onChange={onDateValueChange}
        ref={ref}
      />
    );
  }
);

/* Datepicker with Addon Input */
const DatepickerInputWithAddon = forwardRef<
  HTMLInputElement,
  DatepickerInputProps
>((props, ref) => (
  <div className="input-group input-group-sm" ref={ref}>
    <input
      type="text"
      name={props.name}
      className={classNames("form-control", props.inputClass)}
      onClick={props.onClick}
      value={props.value}
      readOnly
    />
    <span className="input-group-text bg-blue border-blue text-white">
      <i className="mdi mdi-calendar-range"></i>
    </span>
  </div>
));

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
  // handle custom input
  // ;
  const input =
    (props.hideAddon || false) === true ? (
      <DatepickerInput
        name={props.name}
        inputClass={props.inputClass!}
        value={props.value?.toDateString()}
      />
    ) : (
      <DatepickerInputWithAddon
        name={props.name}
        inputClass={props.inputClass!}
        value={props.value?.toDateString()}
      />
    );

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
          dateFormat={"MM/dd/yyyy"}
          minDate={props.minDate}
          disabled={props.disabled}
          wrapperClassName="is-invalid"
          maxDate={props.maxDate}
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
