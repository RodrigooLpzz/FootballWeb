"use client";

import getPlayerByName from "@/services/getPlayerByName";
import { useState } from "react";
import PlayerData from "./PlayerData";

export default function FirstPage() {
  const [inputValue, setInputValue] = useState("");
  const [playerData, setPlayerData] = useState<PlayerProfile[] | null>(null);

  const handleSearch = async () => {
    if (!inputValue.trim()) return;

    setPlayerData(null);

    const data = await getPlayerByName(inputValue);

    setPlayerData(data);
  };

  return (
    <div className="team-roster-layout">
      <p className="header-team-roster">Team Roster</p>
      <div className="search-layout">
        <div className="flex-button-search">
          <div className="flexbox-layout-search">
            <img className="icon-search" src="/searchicon.png" />
            <input
              className="search-bar"
              type="text"
              placeholder="Search player by name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div>
            <button
              className="add-player"
              onClick={() => {
                handleSearch();
                setInputValue("");
              }}
            >
              {" "}
              + Add New Player
            </button>
          </div>
        </div>
      </div>

      {playerData && <PlayerData players={playerData} />}
    </div>
  );
}
