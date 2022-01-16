import React,{useState, useEffect} from 'react'
import FilmItem from '../components/FilmItem'
import './FilmBox.css'


 const FilmContainer = () => {

    const [films, setFilms]= useState([])
    const [search, setSearch] = useState('')
    const [filteredFilms, setFilteredFilms] = useState([])

   

    useEffect(() => {
        fetchFilms()
    }, [])

    useEffect(() => {
        setFilteredFilms(
            films.filter( (film) =>{
                return film.title.toLowerCase().includes(search.toLowerCase())
           })
        )    
    }, [search, films])


    const fetchFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(data => setFilms(data))   
    }
   
    

    return (
        <>
        <h1>Favourite Fimls</h1>
        <input  id = "input" type="text" placeholder="search your favourite film..."  onChange={event => setSearch(event.target.value)} />
        <div className="container">
        <FilmItem  films={filteredFilms}/>
        </div>
        </>
    )
}


export default FilmContainer;
