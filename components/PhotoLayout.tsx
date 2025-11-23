import Image from 'next/image'

export default function PhotoLayout({ data } : { data: PlayerProfile}){
  return (
    <div className="photo-layout">
      <div className="player-photo">
        <Image 
          src={data.player.photo}
          width={125}
          height={125}
          alt={`Photo of ${data.player.name}`}
        />
      </div>
      <p className='player-name'>{data.player.name}</p>
      <p>{data.player.position} / #{data.player.number}</p>

      <div className="player-info">
        <div>
          <p className='player-info-headers'>Age</p>
          <p className='player-info-data'>{data.player.age} years</p>
        </div>
        <div>
          <p className='player-info-headers'>Nationality</p>
          <p className='player-info-data'>{data.player.nationality}</p>
        </div>
        <div>
          <p className='player-info-headers'>Height</p>
          <p className='player-info-data'>{data.player.height} cm</p>
        </div>
        <div>
          <p className='player-info-headers'>Weight</p>
          <p className='player-info-data'>{data.player.weight} kg</p>
        </div>
      </div>
    </div>
  );
  
}