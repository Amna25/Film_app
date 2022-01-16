import React,{useState, useEffect} from 'react'
import FilmItem from '../components/FilmItem'
import Filter from '../components/Filter'

 const FilmContainer = () => {

    const [films, setFilms]= useState([])
    const [search, setSearch] = useState('')
    // const [filteredFilms, setFilteredFilms] = useState([])

   

    useEffect(() => {
        fetchFilms()
    }, [])

    // useEffect(() => {
    //     setFilteredFilms(
    //         films.filter( (film) =>{
    //             return film.title.toLowerCase().includes(search.toLowerCase())
    //        })
    //     )    
    // }, [search, films])


    const fetchFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(data => setFilms(data))   
    }
    // const filter = (searchTerm) => {
    //     const lowerSearch = searchTerm.toLowerCase()
    //     const filteredFilms = films.filter((film) => {
    //         return film.title.toLowerCase().indexOf(lowerSearch) > -1
    //     })
    //     setFilteredFilms(filteredFilms)
    // }

    const filteredFilms = films.filter( film =>{
        return film.title.toLowerCase().includes(search.toLowerCase())
    })
    // const handleFilter =(event) => {
    //     const serachFilm = event.target.value
    //     const newFilter = films.filter((film) => {
    //         return film.title.toLowerCase().includes(serachFilm.toLowerCase())
    //     })
    //     setFilteredFilms(newFilter)
    // }

    

    return (
        <div className="container">
           <h1>Favourite Fimls</h1>
           <input type="text" placeholder="search"  onChange={event => setSearch(event.target.value)} />
           <FilmItem  films={filteredFilms}/>
        </div>
    )
}


export default FilmContainer;
