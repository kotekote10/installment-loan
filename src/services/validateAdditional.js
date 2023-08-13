const validateAdditional = (values, index) => {
  const toValidate = values[index];
  const errors = {};
  const onlyNumbers = /^[0-9 ]*$/;

  if (toValidate.job || toValidate.income || toValidate.wayOfRecieving) {
    if (!toValidate.job) {
      errors.job = "ველის შევსება სავალდებულოა";
    }
    //
    if (!toValidate.income) {
      errors.income = "ველის შევსება სავალდებულოა";
    } else if (!onlyNumbers.test(toValidate.income)) {
      errors.income = "გამოიყენე მხოლოდ ციფრები";
    }
    //
    if (!toValidate.wayOfRecieving) {
      errors.wayOfRecieving = "ველის შევსება სავალდებულოა";
    }
  }

  return errors;
};

export default validateAdditional;
