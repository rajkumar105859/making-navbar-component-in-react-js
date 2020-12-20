import React from 'react'

function Netflix(){
    const name = "Rajkumar"
    const lname = "Bhai"
    return(
        <React.Fragment>
              <h1>{`${name} ${lname}`} Netflix Personal Picks</h1>
              <p>List of top 5 Web Series</p>
              <ol>
                  <li>Movie1</li>
                  <li>Movie2</li>
                  <li>Movie3</li>
                  <li>Movie4</li>
                  <li>Movie5</li>

              </ol>

        </React.Fragment>
    )
}

export default Netflix