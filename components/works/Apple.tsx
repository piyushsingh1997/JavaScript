import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
Masters thesis        
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2023 - Sep 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          My masters thesis explores blockchain impact on Made in Italy products, addressing counterfeiting issues. It emphasizes blockchains role in supply chain management, discussing technologies like Web3, Smart contracts, NFTs, Hyperledger fabric etc. 
          Real-world cases of businesses using blockchain for product authentication and supply chain improvement are highlighted.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          The thesis highlights blockchain role in supply chain management, ensuring product origin through its tamper-proof structure. It also discusses various blockchain technologies, their pros and cons, and their relevance to Made in Italy, 
          including Web3, Smart contracts, and NFTs. 
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
