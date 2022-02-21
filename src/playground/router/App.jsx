import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import DoggoMeme from './Doggo-Lingo-Post.jpg'
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <img src={DoggoMeme} alt="meme" width={500} height={300}/>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About Page</h1>
        </div>
    )
}

function NotFound() {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to='/'>Click here to Home page</Link>
        </div>
    )
}

function App() {
    return (
        <Router>
            <h1>Hey</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='*' exact component={NotFound}/>
            </Switch>
        </Router>
        
    )
}

export default App