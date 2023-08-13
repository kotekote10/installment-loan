import "./income.css";
import { Link } from "react-router-dom";

const Income = ({
  handleSubmit,
  handleChange,
  formData,
  formErrors,
  focused,
  handleFocus,
  handleRequired,
  additionalIncome,
  setAdditionalIncome,
  hadleAdditionalIncomeChange,
  additionalErrors,
  setAdditionalErrors,
  handleAdditionalIncomeFocus,
  handleAdditionalIncomeRequired,
  additionalFocused,
  setAdditionalFocused,
  handleRemove,
  handleAdd,
}) => {
  const addForms = additionalIncome.map((data, index) => (
    <div key={index} className="additional-container">
      <div className="add-job-container">
        <div className="income-label">საქმიანობის სახე / მოკლე აღწერა</div>
        <input
          className={
            additionalErrors[index].job &&
            additionalFocused[index].job.toString() === "true"
              ? "add-job-error"
              : "add-job"
          }
          type="text"
          value={data.job}
          name="job"
          onChange={(event) => hadleAdditionalIncomeChange(event, index)}
          onBlur={(event) => handleAdditionalIncomeFocus(event, index)}
          onFocus={(event) => handleAdditionalIncomeRequired(event, index)}
        ></input>
        {additionalFocused[index].job.toString() === "true" && (
          <span className="job-error-text">{additionalErrors[index].job}</span>
        )}
      </div>
      <div className="add-job-income-container">
        <div className="add-income-container">
          <div className="income-label">თვიური შემოსავალი</div>
          <div className="add-income-gel">₾</div>
          <input
            className={
              additionalErrors[index].income &&
              additionalFocused[index].income.toString() === "true"
                ? "add-income-error"
                : "add-income"
            }
            type="text"
            value={data.income}
            name="income"
            onChange={(event) => hadleAdditionalIncomeChange(event, index)}
            onBlur={(event) => handleAdditionalIncomeFocus(event, index)}
            onFocus={(event) => handleAdditionalIncomeRequired(event, index)}
          ></input>
          {additionalFocused[index].income.toString() === "true" && (
            <span className="income-error-text">
              {additionalErrors[index].income}
            </span>
          )}
        </div>

        <div className="wayofrecieving-container">
          <div className="income-label">მიღების სახე</div>
          <select
            className={
              additionalErrors[index].wayOfRecieving &&
              additionalFocused[index].wayOfRecieving.toString() === "true"
                ? "add-wayofrecieving-error"
                : "add-wayofrecieving"
            }
            id="wayOfRecieving"
            value={data.wayOfRecieving}
            name="wayOfRecieving"
            onChange={(event) => hadleAdditionalIncomeChange(event, index)}
            onBlur={(event) => handleAdditionalIncomeFocus(event, index)}
            onFocus={(event) => handleAdditionalIncomeRequired(event, index)}
          >
            <option></option>
            <option>TBC bank</option>
            <option>Bank of Georgia</option>
            <option>Liberty bank</option>
            <option>ხელზე</option>
            <option>სხვა</option>
          </select>
        </div>
      </div>
      <div>
        {additionalIncome.length - 1 === index && (
          <button
            className="add-btn"
            onClick={(event) => handleAdd(event, index)}
            disabled={
              additionalIncome[index].job === "" ||
              additionalIncome[index].income === "" ||
              (additionalIncome[index].wayOfRecieving === "" &&
                Object.keys(additionalErrors[index]).length !== 0)
                ? true
                : false
            }
          >
            ველის დამატება
          </button>
        )}
        {additionalIncome.length > 1 && (
          <button className="remove-btn" onClick={() => handleRemove(index)}>
            ველის წაშლა
          </button>
        )}
      </div>
    </div>
  ));
  return (
    <div className="income-container">
      <div className="income-title">შემოსავლები და ვალდებულებები</div>

      <form className="income-form">
        <div className="main-header">ძირითადი შემოსავალი</div>
        <div className="company-position">
          <div className="company-container">
            <div className="income-label">სამუშაო ადგილი</div>
            <input
              className={
                formErrors.company && focused.company.toString() === "true"
                  ? "company-error"
                  : "company"
              }
              value={formData.company}
              type="text"
              onChange={handleChange}
              name="company"
              onBlur={handleFocus}
              onFocus={handleRequired}
            ></input>

            {focused.company.toString() === "true" && (
              <span className="company-error-text">{formErrors.company}</span>
            )}
          </div>
          <div className="position-container">
            <div className="income-label">პოზიცია</div>
            <input
              className={
                formErrors.position && focused.position.toString() === "true"
                  ? "position-error"
                  : "position"
              }
              value={formData.position}
              type="text"
              onChange={handleChange}
              name="position"
              onBlur={handleFocus}
              onFocus={handleRequired}
            ></input>

            {focused.position.toString() === "true" && (
              <span className="position-error-text">{formErrors.position}</span>
            )}
          </div>
        </div>
        <div className="salary-bank">
          <div className="salary-container">
            <div className="income-label">თვიური ანაზღაურება</div>
            <div className="income-gel">₾</div>
            <input
              className={
                formErrors.salary && focused.salary.toString() === "true"
                  ? "salary-error"
                  : "salary"
              }
              value={formData.salary}
              type="text"
              onChange={handleChange}
              name="salary"
              onBlur={handleFocus}
              onFocus={handleRequired}
            ></input>

            {focused.salary.toString() === "true" && (
              <span className="salary-error-text">{formErrors.salary}</span>
            )}
          </div>
          <div className="bank-container">
            <div className="income-label">მიღების სახე</div>
            <select
              className={
                formErrors.bank && focused.bank.toString() === "true"
                  ? "bank-error"
                  : "bank"
              }
              id="bank"
              value={formData.bank}
              onChange={handleChange}
              name="bank"
              onBlur={handleFocus}
              onFocus={handleRequired}
            >
              <option></option>
              <option>TBC bank</option>
              <option>Bank of Georgia</option>
              <option>Liberty bank</option>
              <option>ხელზე</option>
              <option>სხვა</option>
            </select>
          </div>
        </div>
        <div className="add-header">დამატებითი შემოსავლები</div>
        <div className="additional-income-container"> {addForms}</div>
        <div className="debt-send">
          <div className="debt-container">
            <div className="income-label">თვიური ვალდებულება</div>
            <div className="debt-income-gel">₾</div>
            <input
              className={
                formErrors.debt && focused.debt.toString() === "true"
                  ? "debt-error"
                  : "debt"
              }
              value={formData.debt}
              type="text"
              onChange={handleChange}
              name="debt"
            ></input>
          </div>
          <Link
            to={
              additionalErrors
                .map((x) => Object.keys(x).length)
                .reduce((partialSum, a) => partialSum + a, 0) === 0 &&
              Object.keys(formErrors).length === 0
                ? "/response"
                : "/income"
            }
          >
            <button className="send-btn" onClick={handleSubmit}>
              განაცხადის გაგზავნა
            </button>
          </Link>
        </div>
      </form>
      <Link to="/client">
        <button className="income-goback">{"<"}</button>
      </Link>
    </div>
  );
};
export default Income;
