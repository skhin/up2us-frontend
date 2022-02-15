import React, { useState } from "react";
import Occasion from "../../components/Questions/occasion/Occasion";
import Price from "../../components/Questions/price/Price";
import Time from "../../components/Questions/time/Time";
import Connection from "../../components/Questions/connection/Connection";

const QuestionPage = () => {
  const [qNumber, setQNumber] = useState(1);
  const [establishment, setEstablishment] = useState({
    occasion: "",
    price: "",
    time: "",
    totalPax: "1",
  });

  return (
    <div>
      {qNumber === 1 ? (
        <Occasion
          setQNumber={setQNumber}
          establishment={establishment}
          setEstablishment={setEstablishment}
        />
      ) : qNumber === 2 ? (
        <Price
          setQNumber={setQNumber}
          establishment={establishment}
          setEstablishment={setEstablishment}
        />
      ) : qNumber === 3 ? (
        <Time
          setQNumber={setQNumber}
          establishment={establishment}
          setEstablishment={setEstablishment}
        />
      ) : qNumber === 4 ? (
        <Connection
          setQNumber={setQNumber}
          establishment={establishment}
          setEstablishment={setEstablishment}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default QuestionPage;
