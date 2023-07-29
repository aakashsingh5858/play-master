import React from "react";
import BgImg1 from "../../assets/Rectangle-2.svg";
import BgImg2 from "../../assets/Rectangle-1.svg";
import BgImg3 from "../../assets/Rectangle14.svg";
import BgImg4 from "../../assets/Rectangle-12.svg";
import PlayerProfile from "../../assets/player.svg";
import PlayerF1 from "../../assets/pl-flag1.svg";
import PlayerF2 from "../../assets/pl-flag-2.svg";
import Details from "./Details";
import "./dashboard.css";
import LockIcon from "../../assets/lock.svg";

const matchList = [
  {
    status: "win",
    date: "04/05/2023",
  },
  {
    status: "lose",
    date: "05/05/2023",
  },
  {
    status: "progress",
    date: "08/05/2023",
  },
  {
    status: "",
    date: "09/05/2023",
  },
  {
    status: "",
    date: "10/05/2023",
  },
  {
    status: "",
    date: "18/05/2023",
  },
  {
    status: "",
    date: "23/05/2023",
  },
];

const renderMatch = (matchList, index) => {
  return (
    <div className="w-32">
      <div>
        {matchList.status === "win" && (
          <h3 className="text-center text-xl italic text-teal-500">Is win !</h3>
        )}
        {matchList.status === "lose" && (
          <h3 className="text-center text-xl italic text-pink-600">Lose !</h3>
        )}
        {matchList.status === "progress" && (
          <h3 className="text-center text-xl italic text-slate-500">
            In Progress
          </h3>
        )}
      </div>
      {matchList.status === "win" ? (
        <div className="border-2 border-pink-500 w-32 h-40 flex items-center justify-center rounded-lg flex-col relative">
          <img src={PlayerF1} className="pb-4" />
          <span className="border-t border-pink-500 w-full" />
          <span className="absolute pt-1 w-6 h-6 rounded-full flex items-center justify-center bg-pink-600 text-white text-sm">
            VS
          </span>
          <img src={PlayerF2} className="pt-4" />
        </div>
      ) : (
        <div className="border-2 border-teal-500 w-32 h-40 rounded-lg relative">
          {!matchList.status ? (
            <img src={LockIcon} className="absolute right-0" />
          ) : (
            ""
          )}
        </div>
      )}

      <button
        className="w-full rounded-lg pt-1 pb-1 bg-pink-600 mt-2 text-white flex items-center justify-center"
        type="button"
      >
        Match {index + 1}
        <input
          type="radio"
          className="ml-2"
          name="match"
          checked={matchList.status === "win"}
        />
      </button>
      <div className="text-center font-bold text-xs pt-1">{matchList.date}</div>
    </div>
  );
};

const DashBoard = () => {
  return (
    <div className="h-screen">
      <div>
        <img
          src={BgImg1}
          className="w-1/3 absolute opacity-70"
          style={{ zIndex: "-1", left: "20px", top: "60px" }}
        />
        <img
          src={BgImg2}
          className="w-2/5 absolute opacity-70"
          style={{ zIndex: "-1", right: "100px", top: "20px" }}
        />
      </div>
      <div className="pl-20 pr-20 pt-20 w-full">
        <div className="flex items-start justify-between w-full gap-12">
          <div className="w-1/4	">
            <img src={PlayerProfile} className="w-full object-cover" />
          </div>
          <div className="w-3/5">
            <Details />
            <div className="flex items-start justify-center gap-12 mt-8">
              <div className="border border-yellow-300 w-full p-2 h-28 bg-white">
                <h3 className=" text-pink-600 font-light text-lg">Ranked</h3>
                <div className="p-3 flex items-start justify-center pb-4">
                  <p className="italic text-slate-500 font-light text-lg">
                    You're <span className="text-teal-500">3/32 +3 ranked</span>
                  </p>
                </div>
              </div>
              <div className="border border-yellow-300 w-full p-2 h-28 bg-white">
                <h3 className=" text-pink-600 font-light text-lg text-center">
                  Score for the match selected
                </h3>
                <p className="text-slate-500 text-center pt-2 pb-2 text-lg italic">
                  3 -2
                </p>
                <p className="text-slate-500 text-center text-lg italic ">
                  66% voted for Telesio
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 flex items-center gap-8">
          {matchList.map((list, index) => {
            return (
              <div key={index} className={`${list.status === "" && "pt-8"}`}>
                {renderMatch(list, index)}
              </div>
            );
          })}
        </div>
        <div className="pt-6 flex flex-col ">
          <div className="flex items-center gap-4">
            <img src={LockIcon} />
            <label className="ml-1">Bet locked</label>
          </div>
          <div className="flex items-center gap-8 ml-1 pt-2">
            <input type="radio" name="bet" />
            <label>Bet validate</label>
          </div>
          <div className="flex items-center gap-8 ml-1 pt-2">
            <input type="radio" name="bet" />
            <label>Waiting for bet</label>
          </div>
        </div>
      </div>
      <div>
        <img
          src={BgImg3}
          className="w-1/4 absolute opacity-70"
          style={{ zIndex: "-1", left: "150px", bottom: "-420px" }}
        />
        <img
          src={BgImg4}
          className="w-1/4 absolute opacity-70"
          style={{ zIndex: "-1", right: "50px", bottom: "-420px" }}
        />
      </div>
    </div>
  );
};

export default DashBoard;
