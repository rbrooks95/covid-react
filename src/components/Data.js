import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Data(props) {
  const [cases, setCases] = useState({ NewConfirmed: [], TotalConfirmed: [] });

  useEffect(function () {
    Axios.get("https://api.covid19api.com/summary").then((response) => {
      setCases({
        NewConfirmed: response.data.Global.NewConfirmed,
        TotalConfirmed: response.data.Global.TotalConfirmed,
      });
      console.log(response);
    });
  }, []);
  console.log(cases);
  return (
    <div>
      <Data Nconfirmed={cases.NewConfirmed} Tconfirmed={cases.TotalConfirmed} />
    </div>
  );
}
