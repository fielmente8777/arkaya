"use client";
import { landingPageData } from "@/app/landing-page/components/landingPageData";
import { useWebContext } from "@/context-api/WebContext";
import useClickOutside from "@/hooks/useClickOutside";
import { useUnifiedBookingForm } from "@/hooks/useUnifiedBookingForm";
import { countries } from "@/utils/constent";
import {
  ArrowUpIcons,
  DropDownIcon,
  FillMail,
  FillPhoneIcon,
  UserIcon,
} from "@/utils/icons";
import { useRef, useState } from "react";

interface QuickBookingFormProps {
  gridView?: boolean;
  rounded?: boolean;
  onSuccess?: () => void;
}

const Form2: React.FC<QuickBookingFormProps> = ({
  gridView = false,
  rounded = false,
  onSuccess,
}) => {
  const villas = landingPageData?.packagesNaadData?.packagesData?.map(
    (item) => item.name
  );

  const [isVillaDropdownOpen, setIsVillaDropdownOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const villaDropDownRef = useRef<HTMLDivElement | null>(null);
  const { setIsOpenPopUpForm2, isOpenPopUpForm2 } = useWebContext();
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitSuccess,
    setFieldValue,
  } = useUnifiedBookingForm({
    createdFrom: "landing-page",
    includeVilla: true,
    onSubmitSuccess: () => {
      if (isOpenPopUpForm2) setIsOpenPopUpForm2(false);
      if (onSuccess) onSuccess();
      window.open("/thank-you", "_blank");
    },
  });

  useClickOutside(villaDropDownRef, () => {
    if (isVillaDropdownOpen) {
      setIsVillaDropdownOpen(false);
    }
  });

  const handleVillaSelect = (villa: string) => {
    setFieldValue("villa", villa);
    setIsVillaDropdownOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid ${
        !gridView ? "md:grid-cols-10" : "gap-2 bg-transparent"
      } grid-cols-2 max-md:gap-2 md:divide-x divide-[#E0E0E0]`}
    >
      {/* Full Name Field */}
      <div
        className={`col-span-2 relative h-full flex flex-col ${
          rounded && "lg:rounded-l-full"
        } bg-transparent max-md:py-4`}
      >
        <input
          type="text"
          name="fullName"
          aria-label="Full Name*"
          placeholder="Full Name"
          onChange={handleChange}
          value={formData.fullName}
          className="outline-none w-full h-full bg-transparent text-base text-dark placeholder:text-[#9C9C9C] pl-4"
        />
        <span className="md:right-2 right-4 absolute md:bottom-4">
          <UserIcon />
        </span>
        {errors.fullName && (
          <span className="text-red-500 text-xs px-1 w-full absolute -bottom-5">
            {errors.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Field */}
      <div
        className={`col-span-2 w-full flex flex-col bg-transparent max-md:py-4`}
      >
        <div className="flex relative items-center w-full h-full pl-4">
          <select
            aria-label="Country Code"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="text-dark placeholder:text-[#9C9C9C] focus:outline-none w-full bg-transparent"
            style={{ width: `${countryCode.length * 2}ch` }}
          >
            {countries.map((country, index) => (
              <option key={index} value={country.code} className="bg-gray-100">
                {country.code}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="phone"
            aria-label="Phone Number*"
            placeholder="Ph Number"
            onChange={handleChange}
            value={formData.phone}
            className="ps-1 outline-none no-spinner appearance-auto w-full h-full text-base text-dark placeholder:text-[#9C9C9C] bg-transparent"
          />
          <span className="md:right-2 right-4 absolute md:bottom-4">
            <FillPhoneIcon />
          </span>
        </div>
        {errors.phone && (
          <span className="text-red-500 text-xs px-1 w-full absolute -bottom-5">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div
        className={`col-span-2 relative h-full flex flex-col justify-center bg-transparent max-md:py-4`}
      >
        <div className="flex items-center justify-between pl-4">
          <input
            type="email"
            name="email"
            aria-label="Email Id*"
            placeholder="Email Id"
            onChange={handleChange}
            value={formData.email}
            className="outline-none w-full h-full bg-transparent text-base text-dark placeholder:text-[#9C9C9C]"
          />
          <span className="md:right-2 right-4 absolute md:bottom-4">
            <FillMail />
          </span>
        </div>
        {errors.email && (
          <span className="text-red-500 text-xs px-1 w-full absolute -bottom-5">
            {errors.email}
          </span>
        )}
      </div>

      {/* Villa Dropdown */}
      <div
        className={`relative col-span-2 ${
          gridView && "pb-4"
        } max-md:pb-4 w-full flex flex-col bg-white`}
        ref={villaDropDownRef}
      >
        <button
          type="button"
          onClick={() => setIsVillaDropdownOpen(!isVillaDropdownOpen)}
          className={`w-full h-full ps-4 md:pe-6 pe-4 py-3.5 text-left flex items-center justify-between bg-white ${
            !formData.villa ? "text-gray-400" : "text-[#9C9C9C]"
          }`}
          aria-haspopup="listbox"
          aria-expanded={isVillaDropdownOpen}
        >
          {formData.villa || "Wellness Package"}
          <span
            className={`${
              isVillaDropdownOpen ? "rotate-180" : ""
            } transition-all duration-300 ease-in-out`}
          >
            <DropDownIcon />
          </span>
        </button>

        {isVillaDropdownOpen && (
          <div
            role="listbox"
            className="absolute top-full z-10 w-full bg-transparent border border-light shadow-lg max-h-80 overflow-y-auto"
          >
            {villas?.map((villa) => (
              <button
                key={villa}
                type="button"
                onClick={() => handleVillaSelect(villa)}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 bg-white"
                role="option"
                aria-selected={formData.villa === villa}
              >
                {villa}
              </button>
            ))}
          </div>
        )}

        {errors.villa && (
          <span className="text-red-500 text-xs px-1 w-full absolute -bottom-5">
            {errors.villa}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div
        className={`h-full col-span-2 max-md:col-span-2 md:px-2 ${
          rounded && "lg:rounded-r-full overflow-hidden"
        } ${gridView && "col-span-2"} flex items-center bg-[#fff]`}
      >
        <button
          type="submit"
          aria-label="Book Now"
          className="text-center bg-primary py-4 w-full h-full text-white md:rounded-full hover:bg-primary duration-300 transition-all ease-in-out capitalize disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="border-t-2 border-white w-6 h-6 rounded-full animate-spin mx-auto block" />
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            <span className="flex items-center justify-center gap-2">
              Book Now
              <span>
                <ArrowUpIcons />
              </span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form2;
