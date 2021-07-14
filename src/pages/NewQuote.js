import React,{useEffect} from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";


const NewQuote = () => {
    const history = useHistory(); // return history object
    
    const { sendRequest, status, error } = useHttp(addQuote);
    
    useEffect(() => {
        if (status === 'completed') {
            history.push("/quotes"); // programmatic Navigation
        }
    }, [status, history])
    
    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    };

  return (
    <React.Fragment>
      <QuoteForm onAddQuote={addQuoteHandler} isLoading={status==='pending'} />
    </React.Fragment>
  );
};

export default NewQuote;
