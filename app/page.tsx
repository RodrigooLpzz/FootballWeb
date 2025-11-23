import getPlayerProfile  from '@/services/getPlayerProfile'
import PhotoLayout from '@/components/PhotoLayout'
import StatsLayout from '@/components/StatsLayout'
import getPlayerStatistic from '@/services/getPlayerStatistic'


export default async function PlayerStatics() {
  const profileData = await getPlayerProfile()
  const statsData = await getPlayerStatistic()


  return (
    <div className='main-layout'>
      <div className='info-layout'>
        <PhotoLayout data = {profileData}/>
        <StatsLayout data = {statsData}/>
      </div>
    </div>
  )
}

