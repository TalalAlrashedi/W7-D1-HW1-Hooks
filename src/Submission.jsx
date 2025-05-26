import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Submission = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Application Submitted
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Full Name:</strong> {state.fullName}
          </p>
          <p>
            <strong>Date of Birth:</strong>{" "}
            {new Date(state.birthDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Preferred Location:</strong> {state.location}
          </p>
          <p>
            <strong>Expected Pay:</strong> {state.expectedPay}
          </p>
          <p>
            <strong>Reason for Applying:</strong> {state.reason}
          </p>
          <p>
            <strong>Willing to Relocate:</strong> {state.isMobile}
          </p>
          <p>
            <strong>Experience in Similar Job:</strong> {state.hasBackground}
          </p>
          <p>
            <strong>Can Start Immediately:</strong> {state.canStartSoon}
          </p>
        </div>

        <div className="pt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-violet-600 text-white rounded hover:bg-blue-800"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submission;
