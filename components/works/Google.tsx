import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        {/* <span className="text-textGreen tracking-wide">@Google</span> */}
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2022 - Feb 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Responsible for development & modifications of business intelligence solutions (web interfaces,
          database, reporting) by programing in Microsoft SQL server & zend framework(PHP).
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          I improved the user interface of the "Filler" website by integrating new functionalities and enhancing existing ones. 
          This was achieved through the utilization of Microsoft SQL Server(backend) and PHP(frontend).
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Created excel reports for clients by designing procedures, functions and queries that fetches data from MSSQL databases.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
