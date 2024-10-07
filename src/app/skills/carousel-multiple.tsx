import cx from "@/libs/cx";
import { motion } from "framer-motion";

interface Props {
  items: {
    name: string;
    type?: string;
    className?: string;
  }[];
}

const CarouselMultiple = ({ items }: Props) => {
  return (
    <div className="flex pt-[100px] items-center justify-start overflow-hidden">
      {items &&
        items.map((item, i) => (
          <motion.div
            key={i}
            className={cx("relative group flex items-center justify-center")}
            animate={{
              x: [0, `-${100 * (i + 1)}%`, `${(items.length - i) * 100}%`, 0],
            }}
            transition={{
              duration: 10,
              times: [
                0,
                (i + 1) / (items.length + 1),
                (i + 1) / (items.length + 1),
                1,
              ],
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              className={cx("w-16 mx-16", item?.className)}
              src={`/icons/${item?.name}.${item?.type ? item?.type : "svg"}`}
              alt={item?.name}
            />
            <div className="capitalize absolute p-1.5 pointer-events-none text-white font-medium font-montserrat rounded-md bg-sky-blue-200 left-1/2 text-sm translate-x-[-50%] bottom-1/2 translate-y-[-25%] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bottom-[100%]">
              {item?.name}
              <div className="border-l-[5px] border-r-[5px] border-t-[5px] w-0 h-0 border-t-sky-blue-200 border-l-transparent border-r-transparent absolute top-[100%] left-1/2 translate-x-[-50%]" />
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default CarouselMultiple;
