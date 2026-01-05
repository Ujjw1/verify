"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ApplicantForm = () => {
  const router = useRouter();
  const [inputName, setInputName] = useState("");
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    // Load current name from localStorage
    const savedName = localStorage.getItem("applicantName");
    if (savedName) {
      setCurrentName(savedName);
    } else {
      // Set default name if nothing is saved
      const defaultName = "Palak Kumari Chaurasiya";
      setCurrentName(defaultName);
      localStorage.setItem("applicantName", defaultName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      const newName = inputName.trim();
      // Save to localStorage
      localStorage.setItem("applicantName", newName);
      setCurrentName(newName);
      setInputName("");
      // Dispatch custom event to notify other pages
      window.dispatchEvent(new CustomEvent("applicantNameUpdated", { detail: newName }));
      // Show success message
      alert(`Name updated successfully to: ${newName}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="bg-blue-600 rounded-t-lg -m-6 sm:-m-8 md:-m-10 mb-6 sm:mb-8 md:mb-10 p-4 sm:p-6 flex items-center gap-3">
          <Image 
            src="/nepal-emblem.png" 
            alt="Nepal National Emblem" 
            width={32}
            height={38}
            className="object-contain w-8 h-9"
          />
          <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl">Enter Applicant Name</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base font-semibold mb-2 text-gray-700">
              Enter full name (e.g., Palak Kumari Chaurasiya)
            </label>
            <input
              id="name"
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter full name (e.g., Palak Kumari Chaurasiya)"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Update Name
          </button>
        </form>

        {/* Current Name Display */}
        {currentName && (
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <p className="text-sm sm:text-base text-gray-600">
              Current name: <span className="font-semibold text-gray-800">{currentName}</span>
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => router.push("/")}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm sm:text-base font-semibold hover:bg-gray-300 transition-colors duration-200"
          >
            View Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantForm;

