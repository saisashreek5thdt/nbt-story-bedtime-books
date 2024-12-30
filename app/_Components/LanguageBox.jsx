"use client";
import React from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import { useRouter } from "next/navigation";

function LanguageBox() {
  const { state, setLanguage } = useGlobalState();
  const router = useRouter();
<<<<<<< HEAD

  const changeLanguage = (lang, path) => {
    setLanguage(lang);
    router.push(path);
=======
  const { currentPath } = state;

  const changeLanguage = (lang) => {
    setLanguage(lang);  // Update the global language state

    if (currentPath && currentPath !== "/") {
      // Navigate to the current path if it's valid
      router.push(currentPath);  
    } 
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
  };

  return (
    <>
<<<<<<< HEAD
      {/* <div className="grid grid-cols-4 gap-4">
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "English" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("English", "/page/01")}
        >
          English
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "हिंदी" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("हिंदी", "/page/01")}
        >
          हिंदी
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "తెలుగు" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("తెలుగు", "/page/01")}
        >
          తెలుగు
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "தமிழ்" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("தமிழ்", "/page/01")}
        >
          தமிழ்
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "অসমীয়" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("অসমীয়", "/page/01")}
        >
          অসমীয়
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "ગુજરાત" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("ગુજરાત", "/page/01")}
        >
          ગુજરાત
        </button>
        <button
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "ಕನ್ನಡ" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("ಕನ್ನಡ", "/page/01")}
        >
          ಕನ್ನಡ
        </button>
        <button
          className={`bg-[#e25a71] text-white text-center py-2 px-2 pr-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${
            state.lang === "മലയാളം" ? "brightness-110" : ""
          }`}
          onClick={() => changeLanguage("മലയാളം", "/page/01")}
        >
          മലയാളം
        </button>
      </div> */}
       <div className="grid grid-cols-4 gap-4">
      {/* Render buttons for each language */}
      {['English', 'हिंदी', 'తెలుగు', 'தமிழ்', 'অসমীয়', 'ગુજરાત', 'ಕನ್ನಡ', 'മലയാളം'].map((lang) => (
        <button
          key={lang}
          className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${state.lang === lang ? "brightness-110" : ""}`}
          onClick={() => changeLanguage(lang, router.pathname)} // Keep the same path after language change
        >
          {lang}
        </button>
      ))}
    </div>
=======
      <div className="grid grid-cols-4 gap-4">
        {/* Render buttons for each language */}
        {['English', 'हिंदी', 'తెలుగు', 'தமிழ்', 'অসমীয়', 'ગુજરાત', 'ಕನ್ನಡ', 'മലയാളം'].map((lang) => (
          <button
            key={lang}
            className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${state.lang === lang ? "brightness-110" : ""}`}
            onClick={() => changeLanguage(lang)}  // Change language and navigate to the current path
          >
            {lang}
          </button>
        ))}
      </div>
>>>>>>> b2fe6824f52ab2e6007692ff3b13bbe9ee2664f2
    </>
  );
}

export default LanguageBox;
