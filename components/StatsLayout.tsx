import TabsLayout from "@/components/TabsLayout";

function Indicators({ data }: { data: Array<Statistics> }) {
  interface TotalStats {
    goals: number;
    assists: number;
    appearences: number;
    yellowCards: number;
    redCards: number;
    ratings: string[];
  }

  const initialStats: TotalStats = {
    goals: 0,
    assists: 0,
    appearences: 0,
    yellowCards: 0,
    redCards: 0,
    ratings: [],
  };

  const totalStats = data.reduce(
    (accumulator: TotalStats, info: Statistics) => {
      accumulator.goals += info.goals.total !== null ? info.goals.total : 0;
      accumulator.assists +=
        info.goals.assists !== null ? info.goals.assists : 0;
      accumulator.appearences +=
        info.games.appearences !== null ? info.games.appearences : 0;
      accumulator.yellowCards +=
        info.cards.yellow !== null ? info.cards.yellow : 0;
      accumulator.redCards += info.cards.red !== null ? info.cards.red : 0;

      if (info.games.rating !== null) {
        accumulator.ratings.push(info.games.rating);
      }

      return accumulator;
    },
    initialStats
  );

  const rating = totalStats.ratings;

  const numericRatings = rating.map((r) => parseFloat(r));

  const totalRatingSum = numericRatings.reduce(
    (sum, rating) => sum + rating,
    0
  );
  const averageRating = totalRatingSum / rating.length;

  const formattedAverageRating = averageRating.toFixed(2);

  return (
    <div className="indicators-info">
      <div className="div">
        <p className="indicator-text">Goals</p>
        <p className="indicator-result important-data">{initialStats.goals}</p>
      </div>
      <div className="div">
        <p className="indicator-text">Assists</p>
        <p className="indicator-result important-data">{initialStats.assists}</p>
      </div>
      <div className="div">
        <p className="indicator-text">Appearances</p>
        <p className="indicator-result">{initialStats.appearences}</p>
      </div>
      <div className="div">
        <p className="indicator-text">Yellow Cards</p>
        <p className="indicator-result">{initialStats.yellowCards}</p>
      </div>
      <div className="div">
        <p className="indicator-text">Red Cards</p>
        <p className="indicator-result">{initialStats.redCards}</p>
      </div>
      <div className="div">
        <p className="indicator-text">Rating</p>
        <p className="indicator-result">{formattedAverageRating}</p>
      </div>
    </div>
  );
}

export default function StatsLayout({ data }: { data: Array<Statistics> }) {
  return (
    <div className="stats-player">
      <Indicators data={data} />
      <TabsLayout data={data} />
    </div>
  );
}
