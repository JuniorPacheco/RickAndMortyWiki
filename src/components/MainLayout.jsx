import { useEffect, useState } from "react";
import Location from "./Location"
import CardCharacter from "./CardCharacter";
import Page from "./Page";

const Main = ({nameLocation, setNameLocation, location}) => {
  const [cards, setCards] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [pages, setPages] = useState([])

  useEffect(() => {
    if(Object.keys(location).length !== 0){
      const arrayPages = []
      const pageAmount = Math.ceil(location?.residents.length / 20)
      for(let i = 1; i <= pageAmount; i++){
        arrayPages.push(<Page key={i} page={i} setPageNumber={setPageNumber}/>)
      }
      console.log(arrayPages)
      setPages(arrayPages)
      
      const arrayCards = []
      for(let i = 0; i <= pageAmount - 1; i++){
        const subArraycards = []
        for(let cardAmount = (i + 1)*20 - 20; cardAmount < (i+1)*20 && cardAmount <= location?.residents.length - 1; cardAmount++){
          subArraycards.push(<CardCharacter key={location?.residents[cardAmount]} urlCharacter={location?.residents[cardAmount]} />)
        }
        arrayCards.push(subArraycards)
      }
      setCards(arrayCards)
    }
  }, [location])
 
  return (
    <main className='body'>
        <Location 
          name={location?.name} 
          dimension={location?.dimension} 
          type={location?.type} 
          population={location?.residents?.length}
        />
        <section className='body__dataLocation'>
          {cards[pageNumber - 1]}
        </section>
        <section className="pagination">
          {pages}
        </section>
    </main>
  )
}

export default Main