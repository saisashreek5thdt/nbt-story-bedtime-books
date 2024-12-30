import React from "react";

function PageNextBox({ onYesBTN, onNoBTN }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <button
          className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition"
          onClick={onYesBTN}
        >
          YES
        </button>
        <button
          className="bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition"
          onClick={onNoBTN}
        >
          NO
        </button>
      </div>
    </>
  );
}

export default PageNextBox;
