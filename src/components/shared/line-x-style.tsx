import cx from "@/libs/cx";

interface Props {
  className?: string;
}
const LineXStyle = ({ className }: Props) => {
  return (
    <hr
      className={cx(
        "h-[3px] border-0 bg-gradient-to-r from-transparent via-sky-blue-200 to-transparent",
        className
      )}
    />
  );
};

export default LineXStyle;
