import { useState } from "react";
import "./App.css";
import Client from "./components/Client";
import Income from "./components/Income";
import Loan from "./components/Loan";
import Response from "./components/Response";
import validate from "./services/validate";
import validateAdditional from "./services/validateAdditional";
import { Route, Routes } from "react-router-dom";
import connection from "./services/connection";

const App = () => {
  const [formData, setFormData] = useState({
    amount: "",
    months: "",
    paydate: "7",
    fullName: "",
    personalId: "",
    number: "",
    email: "",
    address: "",
    company: "",
    position: "",
    salary: "",
    bank: "",
    debt: "",
  });

  const [additionalIncome, setAdditionalIncome] = useState([
    {
      job: "",
      income: "",
      wayOfRecieving: "",
    },
  ]);

  const [focused, setFocused] = useState({
    amount: false,
    months: false,
    paydate: false,
    fullName: false,
    personalId: false,
    number: false,
    email: false,
    address: false,
    company: false,
    position: false,
    salary: false,
    bank: false,
    debt: false,
  });

  const [additionalFocused, setAdditionalFocused] = useState([
    {
      job: false,
      income: false,
      wayOfRecieving: false,
    },
  ]);

  const [formErrors, setFormErrors] = useState({});

  const [additionalErrors, setAdditionalErrors] = useState([{}]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function hadleAdditionalIncomeChange(event, index) {
    const { name, value } = event.target;
    const data = [...additionalIncome];
    data[index][name] = value;
    setAdditionalIncome(data);
  }

  function handleAdditionalIncomeFocus(event, index) {
    event.preventDefault();
    const { name } = event.target;
    const errors = [...additionalErrors];
    const toValidate = [...additionalIncome];
    errors[index] = validateAdditional(toValidate, index);
    setAdditionalErrors(errors);
    const toFocus = [...additionalFocused];
    toFocus[index][name] = true;
    setAdditionalFocused(toFocus);
  }

  function handleAdditionalIncomeRequired(event, index) {
    event.preventDefault();
    const { name } = event.target;
    const errors = [...additionalErrors];
    const toValidate = [...additionalIncome];
    errors[index] = validateAdditional(toValidate, index);
    setAdditionalErrors(errors);
    const toFocus = [...additionalFocused];
    toFocus[index][name] = false;
    setAdditionalFocused(toFocus);
  }

  function handleRemove(index) {
    const removed = [...additionalIncome];
    removed.splice(index, 1);
    setAdditionalIncome(removed);
    console.log("removed");
  }

  function handleAdd(event, index) {
    event.preventDefault();
    const addIncome = [...additionalIncome];
    const addFocus = [...additionalFocused];
    const addErrors = [...additionalErrors];
    addFocus.push({
      job: false,
      income: false,
      wayOfRecieving: false,
    });
    addIncome.push({
      job: "",
      income: "",
      wayOfRecieving: "",
    });
    addErrors.push({});

    if (
      Object.keys(additionalErrors[index]).length === 0 &&
      additionalIncome[index].job !== "" &&
      additionalIncome[index].income !== "" &&
      additionalIncome[index].wayOfRecieving !== ""
    ) {
      setAdditionalIncome(addIncome);
      setAdditionalErrors(addErrors);
      setAdditionalFocused(addFocus);
    }
  }

  function handleFocus(event) {
    event.preventDefault();
    setFormErrors(validate(formData));
    const { name } = event.target;
    setFocused((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
  }
  function handleRequired(event) {
    event.preventDefault();
    setFormErrors(validate(formData));
    const { name } = event.target;
    setFocused((prev) => {
      return {
        ...prev,
        [name]: false,
      };
    });
  }

  function validateLoan() {
    setFormErrors(validate(formData));
    setFocused({
      amount: true,
      months: true,
      paydate: true,
      fullName: false,
      personalId: false,
      number: false,
      email: false,
      address: false,
      company: false,
      position: false,
      salary: false,
      bank: false,
      debt: false,
    });
  }

  function handleClient() {
    setFormErrors(validate(formData));
    setFocused({
      amount: false,
      months: false,
      paydate: false,
      fullName: true,
      personalId: true,
      number: true,
      email: true,
      address: true,
      company: false,
      position: false,
      salary: false,
      bank: false,
      debt: false,
    });
  }

  function handleSubmit() {
    setFormErrors(validate(formData));
    setFocused({
      amount: false,
      months: false,
      paydate: false,
      fullName: false,
      personalId: false,
      number: false,
      email: false,
      address: false,
      company: true,
      position: true,
      salary: true,
      bank: true,
      debt: true,
    });
    const toValidate = [...additionalIncome];
    const errors = [...additionalErrors];
    const focused = [...additionalFocused];
    toValidate.map((data, index) => {
      errors[index] = validateAdditional(toValidate, index);
      focused[index] = { job: true, income: true, wayOfRecieving: true };
    });
    const data = { ...formData, additional: [...additionalIncome] };
    const addErrorLength = additionalErrors
      .map((x) => Object.keys(x).length)
      .reduce((partialSum, a) => partialSum + a, 0);
    addErrorLength > 0 &&
      Object.keys(formErrors).length > 0 &&
      setAdditionalFocused(focused);
    setAdditionalErrors(errors);

    if (addErrorLength === 0 && Object.keys(formErrors).length === 0) {
      connection
        .submitData(data)
        .then(console.log("data sent succesfully", data))
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="app">
      {/* <pre>{JSON.stringify(additionalErrors, undefined, 2)}</pre>
      <pre>{JSON.stringify(formErrors, undefined, 2)}</pre> */}

      <Routes>
        <Route
          path="/"
          element={
            <Loan
              handleChange={handleChange}
              formData={formData}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              focused={focused}
              setFocused={setFocused}
              handleFocus={handleFocus}
              handleRequired={handleRequired}
              validateLoan={validateLoan}
            />
          }
        />
        <Route
          path="/client"
          element={
            <Client
              handleChange={handleChange}
              formData={formData}
              handleClient={handleClient}
              formErrors={formErrors}
              focused={focused}
              handleFocus={handleFocus}
              handleRequired={handleRequired}
            />
          }
        />
        <Route
          path="/income"
          element={
            <Income
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
              formErrors={formErrors}
              focused={focused}
              handleFocus={handleFocus}
              handleRequired={handleRequired}
              additionalIncome={additionalIncome}
              setAdditionalIncome={setAdditionalIncome}
              hadleAdditionalIncomeChange={hadleAdditionalIncomeChange}
              additionalErrors={additionalErrors}
              setAdditionalErrors={setAdditionalErrors}
              handleAdditionalIncomeFocus={handleAdditionalIncomeFocus}
              handleAdditionalIncomeRequired={handleAdditionalIncomeRequired}
              additionalFocused={additionalFocused}
              setAdditionalFocused={setAdditionalFocused}
              handleRemove={handleRemove}
              handleAdd={handleAdd}
            />
          }
        />
        <Route
          path="/response"
          element={
            <Response
              setFormData={setFormData}
              setAdditionalIncome={setAdditionalIncome}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
