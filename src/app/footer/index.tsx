interface Props {
  dictionary: Footer;
}
const Footer = ({ dictionary }: Props) => {
  return (
    <section className="bg-sky-blue-100 bg-opacity-60 text-blue-100 flex p-2.5 justify-center font-bold text-[10px] sm:text-xs text-center">
      {dictionary?.copyright}
    </section>
  );
};

export default Footer;
