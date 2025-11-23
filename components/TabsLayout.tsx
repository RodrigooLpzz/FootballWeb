"use client";

import Image from "next/image";
import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
function controlData(info: any) {
  if (info === null) {
    return "N/A";
  } else {
    return info;
  }
}

export default function TabsLayout({ data }: { data: Array<Statistics> }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="season-data-layout">
      <div className="tabs-layout">
        {data.map((tab, index) => {
          const logoSrc = tab.league.logo;
          const isValidSrc = logoSrc && logoSrc !== "";

          if (!isValidSrc) {
            return null;
          }

          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`button-tab ${
                activeTab === index ? "active-tab" : "no-active-tab"
              }`}
            >
              <Image
                src={logoSrc}
                width={35}
                height={35}
                alt={`${tab.league.name} photo`}
              />
              {tab.league.name}
            </button>
          );
        })}
      </div>
      <div className="tab-indicators-layout">
        <div className="indicator-tab">
          <p className="indicator-text">Matches Played</p>
          <p className="specific-data-league">{controlData(data[activeTab].games.appearences)}</p>
        </div>
        <div className="indicator-tab">
          <p className="indicator-text">Minutes Played</p>
          <p className="specific-data-league">{controlData(data[activeTab].games.minutes)}</p>
        </div>
        <div className="indicator-tab">
          <p className="indicator-text">Goals Scored</p>
          <p className="specific-data-league">{controlData(data[activeTab].goals.total)}</p>
        </div>
        <div className="indicator-tab">
          <p className="indicator-text">Assists</p>
          <p className="specific-data-league">{controlData(data[activeTab].goals.assists)}</p>
        </div>
        <div className="indicator-tab">
          <p className="indicator-text">Passes</p>
          <p className="specific-data-league">{controlData(data[activeTab].passes.total)}</p>
        </div>
        <div className="indicator-tab">
          <p className="indicator-text">Dribbles</p>
          <p className="specific-data-league">{controlData(data[activeTab].dribbles.attempts)}</p>
        </div>
        <div className="indicator-tab">
          <p className="indicator-text">Yellow Cards</p>
          <p className="specific-data-league">{controlData(data[activeTab].cards.yellow)}</p>
        </div>
        <div className="indicator-tab">
          <p className="indicator-text">Red Cards</p>
          <p className="specific-data-league">{controlData(data[activeTab].cards.red)}</p>
        </div>
      </div>
    </div>
  );
}
