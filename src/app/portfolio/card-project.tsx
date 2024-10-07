interface Props {
  button: {
    name: string;
    href: string;
  };
  title: string;
  tecnology: string[];
}
const CardProject = ({ button, title, tecnology }: Props) => {
  return (
    <div className="group flex flex-col bg-sky-blue-100 border-[5px] overflow-hidden border-[skyblue] mx-[20px] rounded-[.5rem] gap-[1rem] py-[0.5rem] relative text-center text-[20px]">
      <h6 className="font-bold">{title}</h6>
      <div className="w-full overflow-hidden border-[#000] rounded-[3px] border-[1px]">
        <img
          className="w-[350px] h-[230px] object-cover group-hover:scale-105 transition-all duration-300"
          loading="lazy"
          alt={title}
          src={`projects/${title.toLowerCase()}.png`}
        />
      </div>
      <div className="my-4">
        <a
          className="bg-black-100 rounded-[5px] text-[15px] px-[1rem] py-[0.5rem] tracking-[2px] text-whites-100 font-bold z-[9999] relative hover:bg-gold-200 transition-all duration-300"
          href={button?.href}
          rel="noreferrer"
          target="_blank"
        >
          {button?.name}
        </a>
      </div>
      <div className="flex-wrap gap-[1rem] px-[18px] absolute top-1/2 translate-y-[-50%] left-0 flex opacity-0 group-hover:opacity-100 transition-all duration-300 z-[9999]">
        {tecnology &&
          tecnology.map((x, i) => (
            <img src={`icons/${x}.svg`} key={i} className="w-[50px] h-[50px]" />
          ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black-100 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"></div>
    </div>
  );
};

export default CardProject;
