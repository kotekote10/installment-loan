const validate = (values) => {
  const errors = {};
  const onlyGeorgian = /^[ა-ჰ ]+$/;
  const fullNameTest = /^[ა-ჰ]+(?:\s[ა-ჰ]+)+$/;
  const onlyNumbers = /^[0-9 ]*$/;
  const personalIdTest = /^[0-9]*$/;
  const emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //
  if (!values.fullName) {
    errors.fullName = "ველის შევსება სავალდებულოა";
  } else if (!onlyGeorgian.test(values.fullName)) {
    errors.fullName = "გამოიყენე ქართული ასოები";
  } else if (!fullNameTest.test(values.fullName)) {
    errors.fullName = "მიუთითეთ სახელიც და გვარიც";
  } else if (values.fullName.length < 5) {
    errors.fullName = "გამოიყენე მინიმუმ 5 სიმბოლო";
  }
  //
  if (!values.personalId) {
    errors.personalId = "ველის შევსება სავალდებულია";
  } else if (!personalIdTest.test(values.personalId)) {
    errors.personalId = "გამოიყენე მხოლოდ ციფრები";
  } else if (values.personalId.length !== 11) {
    errors.personalId = "მიუთითეთ 11 ციფრიანი პირადი ნომერი";
  }
  //
  if (!values.email) {
    errors.email = "ველის შევსება სავალდებულოა";
  } else if (!emailValidation.test(values.email)) {
    errors.email =
      "მეილი უნდა შედგებოდეს ლათინური ასოებისგან და ექვემდებარებოდეს მეილის ფორმატს (youremail@example.com)";
  }
  //
  if (!values.number) {
    errors.number = "ველის შევსება სავალდებულოა";
  } else if (!onlyNumbers.test(values.number)) {
    errors.number = "გამოიყენე მხოლოდ ციფრები";
  } else if (values.number.replace(/[^0-9]/g, "").length !== 9) {
    errors.number = "მიუთითეთ 9 ციფრიანი მობილური ტელეფონის ნომერი";
  }
  //
  if (!values.address) {
    errors.address = "ველის შევსება სავალდებულოა";
  }
  //
  if (!values.company) {
    errors.company = "ველის შევსება სავალდებულოა";
  }
  //
  if (!values.position) {
    errors.position = "ველის შევსება სავალდებულოა";
  }
  //
  if (!values.salary) {
    errors.salary = "ველის შევსება სავალდებულოა";
  } else if (!onlyNumbers.test(values.salary)) {
    errors.salary = "გამოიყენე მხოლოდ ციფრები";
  }
  //
  if (!values.bank) {
    errors.bank = "ველის შევსება სავალდებულოა";
  }
  //
  if (!values.amount) {
    errors.amount = "ველის შევსება სავალდებულოა";
  } else if (!onlyNumbers.test(values.amount)) {
    errors.amount = "გამოიყენე მხოლოდ ციფრები";
  }
  //
  if (!values.months) {
    errors.months = "ველის შევსება სავალდებულოა";
  }
  //

  return errors;
};

export default validate;
