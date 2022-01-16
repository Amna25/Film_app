import React from 'react'
import Film from './Film'
import './Film.css'

 const FilmItem = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film film={film} key={film.id} />
    })
    return (
        <>
       
        <table>
            <tr>
                <th>Title</th>
                <th>Producer</th>
                <th>Release Date</th>
            </tr>
            {filmNodes}
        </table>
        </>
    )
}


export default FilmItem;
