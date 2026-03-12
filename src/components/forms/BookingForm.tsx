"use client";
import { experiencesList } from "@/app/experiences-at-naad/components/experiencespagedata";
import { useWebContext } from "@/context-api/WebContext";
import { useUnifiedBookingForm } from "@/hooks/useUnifiedBookingForm";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BookingFormProps {
  onSuccess?: () => void;
}

const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-500"
  >
    <path
      d="M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM5 8V6H19V8H5Z"
      fill="currentColor"
    />
    <path
      d="M7 12H9V14H7V12ZM11 12H13V14H11V12ZM15 12H17V14H15V12ZM7 15H9V17H7V15ZM11 15H13V17H11V15ZM15 15H17V17H15V15Z"
      fill="currentColor"
    />
  </svg>
);

const time = [
  "9:30am – 10:30am",
  "10:30am – 11:30am",
  "11:30am – 12:30pm",
  "12:30pm – 1:30pm",
  "1:30pm – 2:30pm",
  "2:30pm – 3:30pm",
  "3:30pm – 4:30pm",
  "4:30pm – 5:30pm",
  "5:30pm – 6:30pm",
  "6:30pm – 7:30pm",
  "7:30pm – 8:30pm",
  "8:30pm – 9:30pm",
];

const BookingForm = ({ onSuccess }: BookingFormProps) => {
  const { isOpenPopUpForm, setIsOpenPopUpForm } = useWebContext();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitSuccess,
    setFieldValue,
  } = useUnifiedBookingForm({
    createdFrom: "Webform",
    includeProgram: true,
    onSubmitSuccess: () => {
      if (isOpenPopUpForm) setIsOpenPopUpForm(false);
      if (onSuccess) onSuccess();
      window.open("/thank-you", "_blank");
    },
  });

  // Handle date change for check-in
  const handleCheckInChange = (date: Date | null) => {
    setStartDate(date);
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      setFieldValue("checkIn", formattedDate);

      // If check-out date is before check-in date, clear it
      if (endDate && date > endDate) {
        setEndDate(null);
        setFieldValue("checkOut", "");
      }
    } else {
      setFieldValue("checkIn", "");
    }
  };

  // Handle date change for check-out
  const handleCheckOutChange = (date: Date | null) => {
    setEndDate(date);
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      setFieldValue("checkOut", formattedDate);
    } else {
      setFieldValue("checkOut", "");
    }
  };

  // Get today's date for minDate
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="relative shadow-inner after:content-[''] after:absolute after:inset-0 after:z-[-2] after:bg-white/40 after:backdrop-blur-xs md:p-8 max-md:px-4 max-md:py-4 rounded-xl border border-[#D9D9D9]">
      <h3 className="text-2xl font-semibold secondary-font mb-6 text-primary">
        Booking Inquiry
      </h3>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="text-xs text-[#1e1e1e] uppercase">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-white mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Contact + Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-[#1e1e1e] uppercase">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="+91 - 9999999999"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-[#1e1e1e] uppercase">Email</label>
            <input
              type="email"
              placeholder="doe@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Dates with React DatePicker */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-[#1e1e1e] uppercase">
              Check-in Date
            </label>
            <div className="relative mt-1">
              <DatePicker
                selected={startDate}
                onChange={handleCheckInChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={today}
                placeholderText="mm/dd/yyyy"
                dateFormat="dd/MM/yyyy"
                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                wrapperClassName="w-full bg-white"
              />
              {/* <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <CalendarIcon />
              </div> */}
            </div>
          </div>

          <div>
            <label className="text-xs text-[#1e1e1e] uppercase">
              Check-out Date
            </label>
            <div className="relative mt-1">
              <DatePicker
                selected={endDate}
                onChange={handleCheckOutChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate || today}
                placeholderText="dd/MM/yyyy"
                dateFormat="dd/MM/yyyy"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                wrapperClassName="w-full bg-white"
              />
              {/* <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <CalendarIcon />
              </div> */}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Program */}
          <div>
            <label className="text-xs text-[#1e1e1e] uppercase">Program</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select a program</option>
              {experiencesList.map((experience) => (
                <option key={experience.name} value={experience.name}>
                  {experience.name}
                </option>
              ))}
            </select>
            {errors.program && (
              <p className="text-red-500 text-sm mt-1">{errors.program}</p>
            )}
          </div>
          {/* Preferred time to call  */}
          <div>
            <label className="text-xs text-[#1e1e1e] uppercase">
              Preferred time to call
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full mt-1 bg-white px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select preferred time</option>
              {time.map((t, index) => (
                <option key={index} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.program && (
              <p className="text-red-500 text-sm mt-1">{errors.time}</p>
            )}
          </div>
        </div>
        {/* Guests */}
        <div>
          <label className="text-xs text-[#1e1e1e] uppercase">
            No of Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full mt-1 bg-white px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Health Issue */}
        <div>
          <label className="text-xs text-[#1e1e1e] uppercase">
            Any Health Issue?
          </label>
          <textarea
            name="healthIssue"
            value={formData.healthIssue}
            onChange={handleChange}
            rows={3}
            className="w-full mt-1 bg-white px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Extra Info */}
        <div>
          <label className="text-xs text-[#1e1e1e] uppercase">
            Anything else we should know?
          </label>
          <textarea
            name="extraInfo"
            value={formData.extraInfo}
            onChange={handleChange}
            rows={3}
            className="w-full bg-white mt-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary w-full text-white px-8 py-3 rounded-full mt-4 hover:opacity-90 transition disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
            </span>
          ) : submitSuccess ? (
            "Thank you!"
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
