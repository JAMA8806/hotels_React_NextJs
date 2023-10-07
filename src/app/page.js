
// "use client";
import { CardsFilterTemplate } from '../../components/templates/cardsFilter-template/cardsFilterTemplate'
import { hotelData } from '../../services/getHotelsServices'


export default async function Home() {
  const getHotelsData = await hotelData(); 
  return (
    <>
      <CardsFilterTemplate getHotelsData={getHotelsData}/>
    </>
  )
}
 