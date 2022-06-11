import Name from '../img/Name.png'

const Header = () => {
  return (
    <header className='header'>
        <section className='header__searcher'>
            <img src={Name} alt='Text Rick And Morty' />
            <input 
            placeholder='Searcher'
            type="text" 
            />
        </section>
  </header>
  )
}

export default Header