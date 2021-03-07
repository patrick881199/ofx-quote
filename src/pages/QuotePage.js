import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import QuoteForm from "../components/QuoteForm";
import { getCurrency } from "../store/actions/contryInfoAction";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const QuotePage = () => {
  const dispatch = useDispatch();

  //Call api to get dial code and currency info when page first load
  //and store the info in redux store
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  return (
    // add page animation using framer motion
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <QuoteForm />
    </motion.div>
  );
};

export default QuotePage;
