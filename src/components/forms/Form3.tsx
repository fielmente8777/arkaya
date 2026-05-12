"use client";
import useBookingForm from "@/hooks/useBookingForm";
import { ArrowUpIcons, FromDropDown } from "@/utils/icons";
import { countries } from "../../utils/constent";
import { CalendarIcon, CallIcon, MailIcon, UserIcon } from "@/utils/formIcons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import React, { useState } from "react";
import { PeopleIcon, ReserveIcon } from "@/utils/landingPageIcons";

interface Props {
  gridView?: boolean;
  className?: string;
}
const Form3 = ({ gridView, className = "" }: Props) => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
    includeNoOfPeople,
  } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,
    includeNoOfPeople: true,
    onSubmitSuccess: () => {},
  });
  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);

    if (start) {
      setFieldValue("checkIn", start.toISOString().split("T")[0]);
    }

    if (end) {
      setFieldValue("checkOut", end.toISOString().split("T")[0]);
    }
  };

  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      value: formData.name,
      onChange: handleChange,
      icon: <UserIcon />,
    },
    {
      name: "phone",
      label: "Ph Number",
      type: "tel",
      value: formData.phone,
      onChange: handleChange,
      icon: <CallIcon />,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      value: formData.email,
      onChange: handleChange,
      icon: <MailIcon />,
    },
    ...(includeNoOfPeople
      ? [
          {
            name: "noOfPeople",
            label: "No. of People",
            type: "number",
            value: formData.noOfPeople,
            onChange: handleChange,
            icon: <PeopleIcon />,
          },
        ]
      : []),
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className={`${gridView ? "flex flex-col divide-y divide-p1" : "grid md:grid-cols-5 items-center gap-3.5 "} py-3 px-4 divide-p1 ${className} bg-black text-white max-w-7xl mx-auto w-full`}
    >
      {formFields.map((field, index) => (
        <React.Fragment key={index}>
          {field.type === "date" ? (
            <div
              className={`flex items-center gap-2.5 ${gridView ? "py-4" : "max-md:pb-4 max-md:pt-2"}`}
              key={index}
            >
              <label className="text-white">{field.icon}</label>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={minDate}
                maxDate={maxDate}
                placeholderText={field.label}
                className={`${gridView ? "" : "border-p1  md:border-r"} outline-none w-full h-full bg-transparent text-base text-dark  placeholder:text-white focus:outline-none text-p2 uppercase `}
                wrapperClassName="w-full h-full !flex items-center"
              />
            </div>
          ) : field.type === "tel" ? (
            <div
              className={`flex items-center gap-2.5 ${gridView ? "py-4" : "max-md:pb-4 max-md:pt-2"}`}
              key={index}
            >
              <label className="text-white">{field.icon}</label>
              <div className="relative">
                <select
                  className="bg-transparent text-white px-2 uppercase appearance-none focus:outline-none [&>option]:text-black"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFieldValue("countryCode", e.target.value)}
                  style={{ width: `${formData.countryCode.length * 2}ch` }}
                  aria-label="Country Code"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.code} className="">
                      {country.code}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <FromDropDown />
                </span>
              </div>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className={`w-full text-white appearance-none placeholder:text-white focus:outline-none text-p2 uppercase ${gridView ? "" : "border-p1 md:border-r"}`}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ) : (
            <div
              className={`flex items-center gap-2.5 ${gridView ? "py-4" : "max-md:pb-4 max-md:pt-2"}`}
              key={index}
            >
              <label className="text-white">{field.icon}</label>
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.label}
                min={field.name === "noOfPeople" ? 1 : undefined}
                className={`w-full text-white appearance-none placeholder:text-white focus:outline-none text-p2 uppercase ${gridView ? "" : "border-p1 md:border-r"}`}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          )}

          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]}</p>
          )}
        </React.Fragment>
      ))}
      <button type="submit" className="bg-p1  text-white text-lg py-3">
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <span className="flex items-center justify-center gap-2.5">
            Reserve Table{" "}
            <span>
              <ReserveIcon />
            </span>{" "}
          </span>
        )}
      </button>
    </form>
  );
};

export default Form3;
