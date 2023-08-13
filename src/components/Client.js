import "./client.css";
import { Link } from "react-router-dom";

const Client = ({
  handleSubmit,
  handleChange,
  formData,
  formErrors,
  focused,
  handleFocus,
  handleRequired,
  handleClient,
}) => {
  return (
    <div className="client-container">
      <div className="client-title">პირადი ინფორმაცია</div>

      <form className="client-form">
        <div className="fullname-container">
          <div className="client-label">სახელი და გვარი</div>
          <input
            className={
              formErrors.fullName && focused.fullName.toString() === "true"
                ? "fullname-error"
                : "fullname"
            }
            value={formData.fullName}
            type="text"
            onChange={handleChange}
            name="fullName"
            onBlur={handleFocus}
            onFocus={handleRequired}
          ></input>
          {focused.fullName.toString() === "true" && (
            <span className="fullname-error-text">{formErrors.fullName}</span>
          )}
        </div>
        <div className="personalid-container">
          <div className="client-label">პირადი ნომერი</div>
          <input
            className={
              formErrors.personalId && focused.personalId.toString() === "true"
                ? "personalid-error"
                : "personalid"
            }
            value={formData.personalId}
            type="text"
            onChange={handleChange}
            name="personalId"
            onBlur={handleFocus}
            onFocus={handleRequired}
          ></input>

          {focused.personalId.toString() === "true" && (
            <span className="personalid-error-text">
              {formErrors.personalId}
            </span>
          )}
        </div>
        <div className="number-container">
          <div className="client-label">მობილური ტელეფონის ნომერი</div>
          <input
            className={
              formErrors.number && focused.number.toString() === "true"
                ? "number-error"
                : "number"
            }
            value={formData.number}
            type="text"
            onChange={handleChange}
            name="number"
            onBlur={handleFocus}
            onFocus={handleRequired}
          ></input>

          {focused.number.toString() === "true" && (
            <span className="number-error-text">{formErrors.number}</span>
          )}
        </div>
        <div className="email-container">
          <div className="client-label">ელ-ფოსტა</div>
          <input
            className={
              formErrors.email && focused.email.toString() === "true"
                ? "email-error"
                : "email"
            }
            value={formData.email}
            type="email"
            onChange={handleChange}
            name="email"
            onBlur={handleFocus}
            onFocus={handleRequired}
          ></input>

          {focused.email.toString() === "true" && (
            <span className="email-error-text">{formErrors.email}</span>
          )}
        </div>
        <div className="address-container">
          <div className="client-label">ფაქტობრივი მისამართი</div>
          <input
            className={
              formErrors.address && focused.address.toString() === "true"
                ? "address-error"
                : "address"
            }
            value={formData.address}
            type="text"
            onChange={handleChange}
            name="address"
            onBlur={handleFocus}
            onFocus={handleRequired}
          ></input>

          {focused.address.toString() === "true" && (
            <span className="address-error-text">{formErrors.address}</span>
          )}
        </div>
        <Link
          to={
            formErrors.fullName === undefined &&
            formErrors.personalId === undefined &&
            formErrors.number === undefined &&
            formErrors.email === undefined &&
            formErrors.address === undefined &&
            focused.fullName === true
              ? "/income"
              : "/client"
          }
        >
          <button className="next-btn" onClick={handleClient}>
            შემდეგი
          </button>
        </Link>
      </form>
      <Link to="/">
        <button className="client-goback">{"<"}</button>
      </Link>
    </div>
  );
};
export default Client;
