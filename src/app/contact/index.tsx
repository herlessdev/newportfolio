import LineXStyle from "@/components/shared/line-x-style";
interface Props {
  id: string;
  dictionary: Contact;
}

const Contact = ({ id, dictionary }: Props) => {
  const social_networks = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/herless-oliver-ramos-espinoza-08b237256",
    },
    {
      name: "freecodecamp",
      url: "https://www.freecodecamp.org/HerlessOliver",
    },
    {
      name: "github",
      url: "https://github.com/AdrianHates",
    },
    {
      name: "whatsapp",
      url: "https://wa.me/+51914315964",
    },
  ];
  return (
    <section id={id} className="pt-[75px] sm:pt-[100px] pb-[50px]">
      <h3 className="font-fondamento uppercase tracking-[3.5px] text-xl sm:text-3xl text-center text-sky-blue-200">
        {dictionary?.title}
      </h3>
      <LineXStyle className="my-10" />
      <form
        action="https://formspree.io/f/xzbnzbyn"
        method="POST"
        aria-labelledby="datos-contacto"
        className="text-center"
      >
        <div>
          <label
            htmlFor="email"
            className="text-base sm:text-xl tracking-[3px] font-fondamento text-black-200"
          >
            {dictionary?.form?.email?.name}:
          </label>
          <br />
          <input
            type="email"
            placeholder={dictionary?.form?.email?.name}
            name="email"
            required
            className="rounded-[5px] cursor-pointer border-none text-base sm:text-lg font-medium my-[15px] p-2.5 w-[85%] sm:w-[75%] bg-whites-100 h-10"
          ></input>
        </div>
        <div>
          <label
            htmlFor="mensaje"
            className="text-base sm:text-xl text-black-200 tracking-[3px] font-fondamento"
          >
            {dictionary?.form?.message?.name}:
          </label>
          <br />
          <textarea
            name="mensaje"
            placeholder={dictionary?.form?.message?.name}
            rows={5}
            cols={24}
            required
            className="border-none rounded-[5px] cursor-pointer text-base sm:text-lg font-medium my-[15px] p-2.5 w-[85%] sm:w-[75%] bg-whites-100"
          />
        </div>
        <button
          className="bg-black-100 shadow-[0px_0px_10px_1px_skyblue] rounded-[15px] text-white tracking-widest border-none cursor-pointer text-lg sm:text-xl font-semibold mx-0 mt-6 sm:mt-10 p-[12.5px] bg-[linear-gradient(to_right,transparent,transparent),linear-gradient(to_right,#4e89a7,#4e89a7)]
          bg-[position:0px_0px] bg-no-repeat bg-[length:0%_100%] hover:bg-[length:100%_100%] hover:scale-[1.02] transition-all duration-300
          "
          type="submit"
        >
          {dictionary?.form?.button?.name}
        </button>
      </form>
      <div className="flex justify-around pt-[50px] sm:justify-center items-center gap-0 sm:gap-28 overflow-hidden">
        {social_networks &&
          social_networks.map((s_network, i) => (
            <a
              key={i}
              href={s_network?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-9 sm:w-10 h-9 sm:h-10 hover:opacity-70 hover:scale-[1.05] transition-all duration-300 cursor-pointer"
                src={`icons/social/${s_network?.name}.svg`}
                alt={s_network?.name}
              />
            </a>
          ))}
      </div>
    </section>
  );
};

export default Contact;
