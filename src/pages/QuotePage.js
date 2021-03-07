import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import QuoteForm from "../components/QuoteForm";
import { getCurrency } from "../store/actions/contryInfoAction";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const QuotePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);
  return (
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
