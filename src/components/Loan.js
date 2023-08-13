import "./loan.css";
import { Link } from "react-router-dom";

const Loan = ({
  handleSubmit,
  handleChange,
  formData,
  formErrors,
  setFormErrors,
  focused,
  setFocused,
  handleFocus,
  handleRequired,
  validateLoan,
}) => {
  const chooseDate = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];

  return (
    <div className="loan-container">
      <form className="loan-form">
        <div className="amount-container">
          <div className="loan-label">სესხის რაოდენობა</div>
          <div className="loan-gel">₾</div>
          <input
            className={
              formErrors.amount && focused.amount.toString() === "true"
                ? "amount-error"
                : "amount"
            }
            value={formData.amount}
            type="text"
            onChange={handleChange}
            name="amount"
            onBlur={handleFocus}
            onFocus={handleRequired}
          ></input>

          {focused.amount.toString() === "true" && (
            <span className="amount-error-text">{formErrors.amount}</span>
          )}
        </div>
        <div className="months-container">
          <div className="loan-label">გადანაწილება თვეებზე</div>
          <select
            className={
              formErrors.months && focused.months.toString() === "true"
                ? "months-error"
                : "months"
            }
            id="months"
            value={formData.months}
            onChange={handleChange}
            name="months"
            onBlur={handleFocus}
            onFocus={handleRequired}
          >
            <option></option>
            <option>6</option>
            <option>9</option>
            <option>12</option>
            <option>15</option>
            <option>18</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>
        <div className="paydate-container">
          <div className="loan-label">აირჩიეთ გადახდის რიცხვი</div>
          <select
            className={
              formErrors.paydate && focused.paydate.toString() === "true"
                ? "paydate-error"
                : "paydate"
            }
            id="paydate"
            value={formData.paydate}
            onChange={handleChange}
            name="paydate"
            onBlur={handleFocus}
            onFocus={handleRequired}
          >
            {chooseDate.map((date, i) => (
              <option key={i}>{date}</option>
            ))}
          </select>
        </div>
        <Link
          to={
            formErrors.amount === undefined &&
            formErrors.months === undefined &&
            focused.amount === true
              ? "/client"
              : "/"
          }
        >
          <button className="go-to-client" onClick={validateLoan}>
            შემდეგი
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Loan;
