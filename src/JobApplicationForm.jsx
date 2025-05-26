import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const JobApplicationForm = () => {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [location, setLocation] = useState("");
  const [reason, setReason] = useState("");
  const [expectedPay, setExpectedPay] = useState("");
  const [isMobile, setIsMobile] = useState("");
  const [hasBackground, setHasBackground] = useState("");
  const [canStartSoon, setCanStartSoon] = useState("");

  const navigate = useNavigate();

  const calculateAge = (dob) => {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(birthDate);

    if (fullName.trim().length < 4) {
      return Swal.fire(
        "Full Name should be at least 4 characters long",
        "",
        "warning"
      );
    }

    if (age < 18 || age > 65) {
      return Swal.fire(
        "Applicants must be between 18 and 65 years old.",
        "",
        "warning"
      );
    }

    navigate("/submitted", {
      state: {
        fullName,
        birthDate,
        location,
        reason,
        expectedPay,
        isMobile,
        hasBackground,
        canStartSoon,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-start p-8">
      <div className="bg-white shadow-md rounded-xl p-8 w-full h-full lg:max-w-3xl">
        <h2 className="lg:text-3xl  font-semibold text-white mb-6 p-1 rounded-1xl bg-violet-600 text-center">
          Job Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
          <div>
            <label className="block ">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              required
            />
          </div>
          <div>
            <label className="block">Date of Birth</label>
            <DatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              showYearDropdown
              scrollableYearDropdown
              className="w-full rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-violet-500 transition shadow-sm"
              placeholderText="Select your birth date"
              required
            />
            {birthDate && (
              <p className="text-sm mt-1 text-gray-500">
                Age: {calculateAge(birthDate)} years
              </p>
            )}
          </div>
          <div>
            <label className="block">Preferred Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              required
            >
              <option value="">Choose a city</option>
              <option value="Medina">Medina</option>
              <option value="Khobar">Khobar</option>
              <option value="Mecca">Mecca</option>
            </select>
          </div>

          <div>
            <label className="block">Expected Monthly Salary</label>
            <select
              value={expectedPay}
              onChange={(e) => setExpectedPay(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              required
            >
              <option value="">Select range</option>
              <option value="4,000 – 6,000">4,000 – 6,000</option>
              <option value="7,000 – 10,000">7,000 – 10,000</option>
              <option value="10,000+">10,000+</option>
            </select>
          </div>

          <div>
            <label className="block">Why do you want this role?</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              required
            />
          </div>

          <div>
            <label>Are you willing to relocate?</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  value="Yes"
                  name="relocate"
                  onChange={(e) => setIsMobile(e.target.value)}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  name="relocate"
                  onChange={(e) => setIsMobile(e.target.value)}
                  required
                />{" "}
                No
              </label>
            </div>
          </div>

          <div>
            <label>Do you have experience in a similar job?</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  value="Yes"
                  name="experience"
                  onChange={(e) => setHasBackground(e.target.value)}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  name="experience"
                  onChange={(e) => setHasBackground(e.target.value)}
                  required
                />{" "}
                No
              </label>
            </div>
          </div>

          <div>
            <label>Can you join immediately?</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  value="Yes"
                  name="startSoon"
                  onChange={(e) => setCanStartSoon(e.target.value)}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  name="startSoon"
                  onChange={(e) => setCanStartSoon(e.target.value)}
                  required
                />{" "}
                No
              </label>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className=" text-white mb-6 bg-violet-600  px-6 py-2 rounded hover:bg-blue-800"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
