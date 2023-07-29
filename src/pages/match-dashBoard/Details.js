import React from "react";
import TeamImg from "../../assets/secPlayer-logo.svg";
import TeamImg2 from "../../assets/player-logo.svg";

const Details = () => {
  return (
    <div className="border border-yellow-300 bg-white p-4 w-full">
      <div>
        <h1 className="text-3xl font-medium text-pink-600">Details</h1>
        <h5 className="text-teal-500 text-sm font-medium pt-1">
          Choose sparingly !
        </h5>
      </div>
      <div className="pt-4 flex w-full items-start justify-center">
        <div className="w-2/4">
          <div className="border p-1 border-teal-500 flex items-center ">
            <img src={TeamImg} className="pr-3 pl-2" />
            <h3 className="uppercase  font-light text-lg">
              <span className="pr-4 capitalize text-base">Team :</span>
              telesio fc
            </h3>
          </div>
          <span className="w-full flex items-center justify-center pt-1 text-xl italic text-pink-600">
            10P
          </span>
        </div>
        <div className="w-1/6 text-center pt-2 italic font-light text-lg">
          - VS -
        </div>
        <div className="w-2/4">
          <div className="border p-1 border-slate-300 flex items-center">
            <img src={TeamImg2} className="pr-3 pl-2 w-14" />
            <h3 className="uppercase font-light text-lg ">
              <span className="pr-4 capitalize font-light text-base">
                Team :
              </span>
              telesio fc
            </h3>
          </div>
          <span className="w-full flex items-center justify-center pt-1 italic text-xl text-pink-600">
            120P
          </span>
        </div>
      </div>
      <div className="w-full pt-6 flex items-center justify-center">
        <button
          className="bg-teal-400 text-white p-2 rounded-full w-40 text-xl font-medium outline-0"
          type="button"
        >
          Confirm
        </button>
      </div>
      <p className="flex items-center justify-center pt-6 pb-6 italic text-xl text-slate-500">
        With you current selection if <span className="text-teal-500 pl-2 pr-2"> Telesio</span> win you make
        <span className="text-pink-600 pl-2">10P</span>
      </p>
    </div>
  );
};

export default Details;
