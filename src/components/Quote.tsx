import axios from "axios";
import React, { useEffect, useState } from "react";

// interface pour le type de citation
interface QuoteInterface {
  _id: string;
  content: string;
  author: string;
}

const Quote: React.FC = () => {
  const [quoteData, setQuoteData] = useState<QuoteInterface[]>([]);

  useEffect(() => {
    axios
      .get("https://api.quotable.io/quotes/random")
      .then((res) => setQuoteData(res.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des citations : ", error)
      );
  }, []);

  return (
    <div className="header">
      <div className="quote">
        {quoteData.length > 0 &&
          quoteData.map((quote) => (
            <div key={quote._id}>
              <h2>" {quote.content} "</h2>
              <h4>•┈┈┈••✦ {quote.author} ✦••┈┈┈•</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Quote;
