import React from 'react'
import { Link } from 'react-router-dom'

const Advert = () => {
  return (
    <div>
        <div className="advert">
           <div className="heading">
                <img src="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="advert" />
                <h2>Upcoming Events</h2>
           </div>
            <ul className="events">
                <li> <Link to="/">ReactNative + Solidty Hackaton</Link> </li>
                <li> <Link to="/">Warri Developers Summit</Link> </li>
                <li> <Link to="/">Google Developers Fiesta</Link> </li>
                <li> <Link to="/">Leravel Festival</Link> </li>
                <li> <Link to="/">Web3: What you have to Know</Link> </li>
                <li> <Link to="/">The big snake: Python meet and Greet</Link> </li>
                <button className='eventBtn'>Share Your Events</button>
                <button className='see_eventBtn'>See all Events</button>
            </ul>

            <h2>Collaborate</h2>
            <ul className="events">
                <li> <Link to="/">ReactNative + Solidty Hackaton</Link> </li>
                <li> <Link to="/">Warri Developers Summit</Link> </li>
                <li> <Link to="/">Google Developers Fiesta</Link> </li>
                <li> <Link to="/">Leravel Festival</Link> </li>
                <li> <Link to="/">Web3: What you have to Know</Link> </li>
                <li> <Link to="/">The big snake: Python meet and Greet</Link> </li>
                <button className='eventBtn'>Share Your Projects</button>
                <button className='see_eventBtn'>See all Project</button>
            </ul>
        </div>
    </div>
  )
}

export default Advert
