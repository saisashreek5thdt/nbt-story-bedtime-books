import React from "react";

function LanguageBox() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <button className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition">
          English
        </button>
        <button className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition">
          हिंदी
        </button>
        <button className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition">
          తెలుగు
        </button>
        <button className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition">
          தமிழ்
        </button>
        <button className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition">
          অসমীয়
        </button>
        <button className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition">
          ગુજરાત
        </button>
        <button className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition">
          ಕನ್ನಡ
        </button>
        <button className="bg-[#e25a71] text-white text-center py-2 px-2 pr-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition">
          മലയാളം
        </button>
      </div>
    </>
  );
}

export default LanguageBox;
