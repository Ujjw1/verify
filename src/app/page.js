"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

const Home = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Get current page URL
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    
    // Load name from localStorage on mount
    const savedName = localStorage.getItem("applicantName");
    if (savedName) {
      setName(savedName);
    } else {
      // Set default name if nothing is saved
      const defaultName = "Palak Kumari Chaurasiya";
      setName(defaultName);
      localStorage.setItem("applicantName", defaultName);
    }
    
    // Listen for custom event when name is updated
    const handleNameUpdate = (e) => {
      if (e.detail) {
        setName(e.detail);
        localStorage.setItem("applicantName", e.detail);
      } else {
        const updatedName = localStorage.getItem("applicantName");
        if (updatedName) {
          setName(updatedName);
        }
      }
    };
    
    window.addEventListener("applicantNameUpdated", handleNameUpdate);
    // Also listen for storage events (cross-tab)
    window.addEventListener("storage", handleNameUpdate);

    return () => {
      window.removeEventListener("applicantNameUpdated", handleNameUpdate);
      window.removeEventListener("storage", handleNameUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white print:bg-white flex flex-col">
      {/* Blue Header Bar */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 sm:gap-4 md:gap-6">
         
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <div className="w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20">
              <Image 
                src="/nepal-emblem.png" 
                alt="Nepal National Emblem" 
                width={60} 
                height={72}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Header Text and Contact Info Container */}
          <div className="flex-1 w-full lg:w-auto flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6">
            {/* Header Text */}
            <div className="flex-1 text-red-600 min-w-0 text-center lg:text-left">
              <h5 className="text-xs sm:text-sm md:text-base font-bold mb-1 text-red-600">Government of Nepal</h5>
              <h2 className="text-[10px] sm:text-xs md:text-sm font-semibold mb-1 text-red-600">Ministry of Education, Science & Technology</h2>
              <h3 className="text-[10px] sm:text-xs font-semibold mb-2 text-red-600">Curriculum Development Center</h3>
            </div>
            {/* Contact Information */}
           
          </div>
        </div>
      <div className="bg-blue-600 h-auto flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 w-full">
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        
          <span className="text-white font-bold text-xs sm:text-sm md:text-lg lg:text-xl">Government of Nepal</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 w-full text-gray-800">
        {/* Government Emblem and Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 sm:gap-4 md:gap-6">
          {/* Government Emblem */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <div className="w-32 h-44 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 flex items-center justify-center relative">
             
              <Image 
                src="/nepal-emblem.png" 
                alt="Nepal National Emblem" 
                width={100} 
                height={120}
                className="object-contain w-full h-full relative z-10"
              />
               <div 
                className="absolute top-5 inset-x-0 bottom-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: 'url(/logo-background.png)', backgroundPosition: 'left bottom' }}
              ></div>
            </div>
          </div>

          {/* Header Text and Contact Info Container */}
          <div className="flex-1 w-full lg:w-auto flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6">
            {/* Header Text */}
            <div className="flex-1 text-red-600 min-w-0 text-center lg:text-left">
              <h1 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-red-600">Government of Nepal</h1>
              <h2 className="text-xs sm:text-sm md:text-base font-semibold mb-1 text-red-600">Ministry of Education, Science & Technology</h2>
              <h3 className="text-xs sm:text-sm font-semibold mb-2 text-red-600">Curriculum Development Center</h3>
            </div>
            {/* Contact Information */}
            <div className="text-red-600 text-xs sm:text-sm text-center md:text-left lg:text-right">
              <p className="font-semibold mb-1">Sanothimi, Bhaktapur</p>
              <p>Phone: 01-6634119</p>
              <p className="break-all">Email: info@moescd.gov.np</p>
              <p className="break-all">Website: www.moescd.gov.np</p>
              <p>Fax: +977-1-6630797</p>
            </div>
          </div>
        </div>

        {/* Reference Information */}
        <div className="space-y-1 text-xs sm:text-sm text-gray-800 text-left">
          <p><span className="font-semibold">Ref. No.:</span> <span className="break-all inline">2082-83-22145</span></p>
          <p><span className="font-semibold">Reg. No:</span> <span className="break-all inline">2081/82-00021160</span></p>
          <p><span className="font-semibold">Date:</span> 2025-10-15</p>
        </div>

        {/* Subject */}
        <div className="text-xs sm:text-sm md:text-base text-gray-800 text-left">
          <p className="font-semibold">Subject: Recognition and Equivalency</p>
        </div>

        {/* Main Body Text */}
        <div className="text-xs sm:text-sm md:text-base leading-relaxed text-justify text-gray-800">
          <p className="mb-4">
            With regard to the application submitted by Mr./Ms. <span className="font-semibold">{name}</span> for the recognition and equivalency of Bihar School Examination Board of Secondary Examination India, the Recognition and Equivalency Determination Committee, Curriculum Development Centre, Ministry of Education, Science and Technology, Government of Nepal as per its decision dated <span className="font-semibold">2077-09-16</span> recognizes that Secondary Examination of the board is equivalent to Secondary Level Grade 10 of Nepal.
          </p>
        </div>
        
        {/* Affiliation Section */}
        <div className="mt-4 sm:mt-6 flex flex-col items-center">
          <h6 className="text-xs sm:text-sm md:text-base font-semibold mb-3 sm:mb-4 text-gray-800 text-center">Affiliation, Equivalence and Evaluation Section</h6>
          {name && (
            <div className="p-2 sm:p-3 md:p-4">
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]">
                <QRCodeSVG
                  value={currentUrl || (typeof window !== 'undefined' ? window.location.href : '')}
                  size={160}
                  level="H"
                  includeMargin={true}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Note Section */}
        <div className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm leading-relaxed text-gray-800 text-left">
          <p className="font-semibold mb-2">Note:</p>
          <p>
            The concerned body must personally verify the authenticity of the student's certificates from the respective board. This recognition and equivalency has been awarded only to the academic degree of the above mentioned institution. If the documents submitted during application are found to be fraudulent, this certificate shall be cancelled at any time.
          </p>
        </div>
      </div>

      {/* Blue Footer */}
      <div className="bg-blue-600 text-white p-3 sm:p-4 md:p-6 text-xs w-full mt-auto">
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-5 md:gap-6 mb-3">
          {/* Container 1: Emblem + Contact Info */}
          <div className="flex items-start gap-2 sm:gap-3 w-full lg:w-auto">
            <Image 
              src="/nepal-emblem.png" 
              alt="Nepal National Emblem" 
              width={24}
              height={28}
              className="object-contain w-6 h-7 sm:w-7 sm:h-9 flex-shrink-0"
            />
            <div className="min-w-0 flex-1 text-xs sm:text-sm">
              <p className="font-semibold mb-1">Sanothimi, Bhaktapur</p>
              <p>Phone: 01-6634119</p>
              <p className="break-all">Email: info@moescd.gov.np</p>
              <p className="break-all">Website: www.moescd.gov.np</p>
              <p>Fax: +977-1-6630797</p>
            </div>
          </div>
          
          {/* Container 2: Useful Links */}
          <div className="text-left lg:text-center w-full lg:w-auto lg:flex-1">
            <p className="font-semibold mb-2 sm:mb-3">Useful Links</p>
            <ul className="space-y-1 sm:space-y-1.5">
              <li className="text-xs sm:text-sm lg:text-center">
                <span>• Compose PDF</span>
              </li>
              <li className="text-xs sm:text-sm lg:text-center">
                <span>• Merge PDF</span>
              </li>
              <li className="text-xs sm:text-sm lg:text-center">
                <span>• JPG to PDF</span>
              </li>
              <li className="text-xs sm:text-sm lg:text-center">
                <span>• Crop Image</span>
              </li>
            </ul>
          </div>
          
          {/* Container 3: Important Links */}
          <div className="w-full lg:w-auto lg:flex-1">
            <p className="font-semibold mb-2 sm:mb-3">Important Links</p>
            <ul className="space-y-1 sm:space-y-1.5">
              <li className="text-xs sm:text-sm">
                <span>• Hamro Patro</span>
              </li>
              <li className="text-xs sm:text-sm">
                <span>• Daily Caswell</span>
              </li>
              <li className="text-xs sm:text-sm">
                <span>• CDC</span>
              </li>
              <li className="text-xs sm:text-sm">
                <span>• CURRICULUMS</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-2 border-t border-blue-500">
          <p className="text-center text-xs">©2023 Copyright: Curriculum Development Centre, LOR</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
