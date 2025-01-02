import React from "react";

function PageNextBox({ onYesBTN, onNoBTN }) {
  return (
    <>
      <div className="flex justify-center items-center gap-4">
      <button
          className="bg-[#e25a71] text-base text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#c4122f] transition"
          onClick={onYesBTN}
        >
          YES
        </button>
        <button
          className="bg-[#e25a71] text-base text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#c4122f] transition"
          onClick={onNoBTN}
        >
          NO
        </button>
      </div>
    </>
  );
}

export default PageNextBox;
