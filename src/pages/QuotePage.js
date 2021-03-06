import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import QuoteForm from "../components/QuoteForm";
import { getCurrency } from "../store/actions/contryInfoAction";

const QuotePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);
  return (
    <div className="quotepage">
      <QuoteForm />
    </div>
  );
};

export default QuotePage;
