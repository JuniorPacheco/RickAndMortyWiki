import Location from "./Location"
import useRandomLocation from "../hooks/useRandomLocation"
import CardCharacter from "./CardCharacter";

const Main = () => {
    const { location } = useRandomLocation();
  return (
    <main className='body'>
        <Location name={location?.name} dimension={location?.dimension} type={location?.type} population={location?.residents?.length}/>
        <section className='body__dataLocation'>
            {location?.residents?.map(resident => <CardCharacter key={resident} urlCharacter={resident} />)}
        </section>
    </main>
  )
}

export default Main