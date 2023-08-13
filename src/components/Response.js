import "./response.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import conection from "../services/connection";

const Result = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    conection
      .getAll()
      .then((response) => {
        console.log("got data");
        console.log(response);
        setResult(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="response-container">
      <div className="loan-info">
        {result[0] !== "rejected" && result[0] !== undefined ? (
          <div>
            <h4 className="congrats">გილოცავთ! თქვენი სესხი დამტკიცებულია.</h4>
            <ul className="final-info">
              <li>ხელზე ასაღები თანხა: {result[0].loan - result[0].excess}₾</li>
              <li>სესხის სრული ღირებულება: {result[0].loan}₾</li>
              <li>ყოველთვიური გადასახადი: {result[0].monthlyPay}₾</li>
              <li>საპროცენტო განაკვეთი: {result[0].percentage}%</li>
              <li>გადახდის დღე: ყოველი თვის {result[0].paydate} რიცხვი</li>
            </ul>
            <Link to="/" reloadDocument>
              <button className="response-btn">თავიდან</button>
            </Link>
          </div>
        ) : (
          <div className="rejected-container">
            <h4 className="rejected">
              განაცხადი უარყოფილია, კიდევ სცადეთ სხვა პარამეტრებით
            </h4>
            <Link to="/" reloadDocument>
              <button className="response-btn">თავიდან</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Result;
