
import './App.css'
import Stars from './components/Stars'
import { Counts } from './components/Counts'

type CountsProp = {
  rating: Counts
}

const rating: Counts = {count: 3, name: 'Superman'};

function App() {
  return (
    <>
      <Stars rating={rating}/>
    </>
  )
}

export default App
