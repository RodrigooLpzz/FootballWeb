import getPlayerProfile  from '@/services/getPlayerProfile'
import PhotoLayout from '@/components/PhotoLayout'
import StatsLayout from '@/components/StatsLayout'
import getPlayerStatistic from '@/services/getPlayerStatistic'
import BackButton from '@/components/BackButton'


export default async function PlayerStatics({ params } : PlayerPageProps) {
  const resolvedParams = await params as { id: string };
  const playerId = resolvedParams.id;

  const profileData = await getPlayerProfile(playerId)
  const statsData = await getPlayerStatistic(playerId)

  return (
    <div className='main-layout'>
      <div className='info-layout'>
        <PhotoLayout data = {profileData}/>
        <StatsLayout data = {statsData}/>
      </div>
      <BackButton />
    </div>
  )
}

