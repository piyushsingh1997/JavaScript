import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
         Software Developer      
        {/* <span className="text-textGreen tracking-wide">@ReactBD</span> */}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2023 - Jan 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developing and maintaining web and mobile applications using Flutter, Firebase, JavaScript, AppScript 
          ,Docker and other technologies.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks such as JavaScript, Flutter ,
          React, Firebase etc.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Was involved on the development of booking application using Flutter and Firebase as Backend
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
