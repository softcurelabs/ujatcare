export const ViewRaw = ({
  labelClassName,
  label,
  valueClassName,
  value,
}: {
  labelClassName?: string;
  label: string;
  valueClassName?: string;
  value: string | number | null | Date;
}) => {
  return (
    <div className="mb-2">
      <span className={labelClassName + " fs-5"}>{label}:</span>
      <span className={valueClassName + " fs-5 ms-2"}>
        {value != null ? value.toString() : ""}
      </span>
    </div>
  );
};
