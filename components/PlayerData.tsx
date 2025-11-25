
export default function PlayerData({players} : {players : PlayerProfile[]}){

  if (!players || players.length === 0) {
    return <p>No se encontraron jugadores.</p>;
  }

  return (
    <div className="tabla-data">
      <table className="players-table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Position</th>
            <th>Jersey Number</th>
            <th></th>
          </tr>
        </thead>
        
        <tbody>
          {players.map((profileItem) => {
            const player = profileItem.player;
            
            return (
              <tr key={player.id}>
                
                <td className="player-table-info">
                  <img
                    src={player.photo ?? ""}
                    alt={player.name ?? "Jugador sin nombre"}
                    className="player-table-photo"
                  />
                  <span>
                    {player.name || `${player.firstname} ${player.lastname}`}
                  </span>
                </td>
                
                <td>
                  {player.position || 'N/A'}
                </td>
                
                <td>
                  {player.number || '-'}
                </td>
                
                <td>
                  <a 
                    href={`/player/${player.id}`} 
                    onClick={() => console.log(`Viewing profile for ${player.name}`)}
                    className="view-profile"
                  >
                    View Profile
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
