interface Props {
  dictionary: Footer;
}
const Footer = ({ dictionary }: Props) => {
  return (
    <section className="bg-primary text-white font-[250px] text-opacity-[69%] flex p-2.5 justify-center text-[10px] sm:text-xs text-center">
      {dictionary?.copyright}
    </section>
  );
};

export default Footer;
