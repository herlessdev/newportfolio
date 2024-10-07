interface Props {
  id: string;
  dictionary: Home;
}

const Home = ({ id, dictionary }: Props) => {
  return (
    <div id={id} className="overflow-hidden w-full relative h-[100vh]">
      <div className="bg-[url('/bg-home.png')] bg-fixed bg-center bg-cover relative w-full h-full z-[1] flex items-center justify-center mx-auto">
        <div className="text-white max-w-[60ch] px-8 text-2xl text-opacity-80 font-montserrat font-medium">
          {dictionary?.description && (
            <>
              <p>
                {dictionary?.description?.first}{" "}
                <span className="text-gold-200 text-bold">
                  Herless Oliver Ramos Espinoza
                </span>
                {dictionary?.description?.second}
              </p>
              <br />
              <p>{dictionary?.description?.third}</p>
            </>
          )}
        </div>
        <div className="w-full h-full absolute bg-[black] opacity-50 z-[-1]"></div>
      </div>
    </div>
  );
};

export default Home;
