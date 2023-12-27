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
          Involved in backend responsibilities, working with Microsoft SQL Server for effective
          data management and excels for reports        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Responsible for development & modifications of business intelligence solutions (web
in terfaces, database functionalities, reporting) by programing in relational
database Microsoft SQL server environment & in php using MVC framework
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Craft Excel reports for clients by designing procedures, functions, and queries to fetch data from MSSQL databases. 
          Customize these reports using VBA scripting to meet the specific needs of each client. 
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
