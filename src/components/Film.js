import React from 'react'

 const Film = ({film}) => {



    return (
        <>
        <tr>
           
            <td>{film.title}</td>
            <td>{film.producer}</td>
            <td>{film["release_date"]}</td>
        </tr>
        </>
    )
}

export default Film;
