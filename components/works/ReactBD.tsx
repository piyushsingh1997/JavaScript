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
        Mar 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed cross-platform office booking mobile app using Flutter and Firebase as backend.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Responsible for development of website using MERN(MongoDB, Express.Js, React.Js, Node.Js) stack
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Involved in the project for developing Planning Tool using Google Sheets, Apps Script and Locker
          Studio for project managers        
          </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
