// const API_URL = "https://v3.football.api-sports.io/players/profiles?player=1100";
// const API_KEY = process.env.API_KEY!;

export default async function getPlayerStatics(){
  // const request = new Request ( API_URL, {
  //   headers : {
  //     "x-apisports-key" : API_KEY
  //   }
  // })
   
  // const response = await fetch(request);

  // const data = await response.json();

  const data = {
  player: {
    id: 1100,
    name: 'E. Haaland',
    firstname: 'Erling',
    lastname: 'Braut Haaland',
    age: 25,
    birth: { date: '2000-07-21', place: 'Leeds', country: 'England' },
    nationality: 'Norway',
    height: '195',
    weight: '88',
    number: 9,
    position: 'Attacker',
    photo: 'https://media.api-sports.io/football/players/1100.png'
  }
}

  return data;
}