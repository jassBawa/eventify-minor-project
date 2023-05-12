import { useState, useEffect } from 'react';

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        // Submit form if there are no errors
        setIsSubmitting(false);
      } else {
        // Reset submission state if there are errors
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting, values]);

  const handleChange = (event) => {

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting
  };
};

export default useFormValidation;
