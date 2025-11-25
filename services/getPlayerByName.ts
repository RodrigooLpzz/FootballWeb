"use server";

const BASE_URL = "https://v3.football.api-sports.io/players/profiles?search=";
const API_KEY = process.env.API_KEY!;

export default async function getPlayerByName(namePlayer : string ) {
  const name = namePlayer.split(" ");
  const length = name.length

  let newString = ""
  name.map((s, index) => {
    
    if(index !== length - 1){
      newString += `${s}%20`
    } else {
      newString += `${s}`
    }
  })

  const API_URL = BASE_URL + newString


  const request = new Request ( API_URL, {
    headers : {
      "x-apisports-key" : API_KEY
    }
  })
   
  const response = await fetch(request);

  const data = await response.json();


  return data.response;
}
