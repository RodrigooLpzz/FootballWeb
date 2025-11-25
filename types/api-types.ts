interface PlayerProfile {
  player: PlayerBasicData
}


interface PlayerBasicData {
  id: number | null,
  name: string| null,
  firstname: string | null,
  lastname: string | null,
  age: number | null,
  birth: Birth,
  nationality: string | null,
  height: string | null,
  weight: string | null,
  number: number | null,
  position: string | null,
  photo: string | null
}

interface PlayerStatisticData {
  player : Player,
  statistics : Array<Statistics>
}

interface Player {
  id : number,
  name: string,
  firstname: string,
  lastname: string,
  age: number,
  birth: Birth,
  nationality: string,
  height: string,
  weight: string,
  injured: boolean,
  photo: string
}

interface Birth {
  date: string | null,
  place: string | null,
  country: string | null
}


interface Statistics {
  team: Team,
  league: League,
  games: Games,
  substitutes: Subtitutes,
  shots: Shots,
  goals: Goals,
  passes: Passes,
  tackles: Tackles,
  duels: Duels,
  dribbles: Dribbles,
  fouls: Fouls,
  cards: Cards,
  penalty: Penalty,
}

interface Team {
  id: number | null,
  name: string | null,
  logo: string | null,
}

interface League {
  id: number | null,
  name: string | null,
  country: string | null,
  logo: string | null,
  flag: string | null,
  season: number | null,
}

interface Games {
  appearences: number | null,
  lineups: number | null,
  minutes: number | null,
  number: number | null,
  position: string | null,
  rating: string | null,
  captain: boolean | null,
}

interface Subtitutes {
  in: number | null,
  out: number | null,
  bench: number | null,
}

interface Shots {
  total: number | null,
  on: number | null,
}

interface Goals {
  total: number | null,
  conceded: number | null,
  assists: number | null,
  saves: number | null,
}

interface Passes {
  total: number | null,
  key: number | null,
  accuracy: number | null,
}

interface Tackles {
  total: number | null,
  blocks: number | null,
  interceptions: number | null,
}

interface Duels {
  total: number | null,
  won: number | null,
}


interface Dribbles {
  attempts: number | null,
  success: number | null,
  past: number | null,
}

interface Fouls {
  drawn: number | null,
  committed: number | null,
}

interface Cards {
  yellow: number | null,
  yellowred: number | null,
  red: number | null,
}

interface Penalty {
  won: number | null,
  commited: number | null,
  scored: number | null,
  missed: number | null,
  saved: number | null
}

interface PlayerPageProps {
  params: {
    id: string; // Next.js lo llena con el valor de la URL
  };
}

