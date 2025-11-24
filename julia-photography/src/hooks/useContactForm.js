import { useState } from 'react';

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    preferredDate: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Bitte gib deinen Namen an.';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gib deine E-Mail-Adresse an.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse an.';
    }

    // Inquiry type validation
    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Bitte wähle eine Art der Anfrage aus.';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Bitte erzähl mir ein bisschen über deine Pläne.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Die Nachricht sollte mindestens 10 Zeichen lang sein.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual submission logic)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      // Success
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        inquiryType: '',
        preferredDate: '',
        location: '',
        message: '',
      });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({
        submit: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
