"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "./useDebounce";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  program: string;
  guests: string;
  healthIssue: string;
  extraInfo: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

interface UseBookingFormProps {
  createdFrom: string;
  includeProgram?: boolean;
}

export const useBookingForm = ({
  createdFrom,
  includeProgram = false,
}: UseBookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    program: "",
    guests: "1",
    healthIssue: "",
    extraInfo: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const debouncedEmail = useDebounce(formData.email, 500);
  const debouncedPhone = useDebounce(formData.phone, 500);

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Debounced Email Validation
  useEffect(() => {
    if (debouncedEmail && !validateEmail(debouncedEmail)) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email format",
      }));
    }
  }, [debouncedEmail]);

  // ✅ Debounced Phone Validation
  useEffect(() => {
    if (debouncedPhone && debouncedPhone.length < 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone must be at least 10 digits",
      }));
    }
  }, [debouncedPhone]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (includeProgram && !formData.program) {
      newErrors.program = "Please select a program";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target as {
      name: keyof FormData;
      value: string;
    };

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "naad",
          email: formData.email,
          Name: formData.fullName,
          Contact: formData.phone,
          Description: `
            Program: ${formData.program}
            Guests: ${formData.guests}
            Health Issue: ${formData.healthIssue}
            Extra Info: ${formData.extraInfo}
          `,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          created_from: createdFrom,
        }
      );

      if (data.Status) {
        setSubmitSuccess(true);

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          checkIn: "",
          checkOut: "",
          program: "",
          guests: "1",
          healthIssue: "",
          extraInfo: "",
        });

        setTimeout(() => setSubmitSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
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
