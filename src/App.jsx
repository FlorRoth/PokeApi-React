import './styles/index.css'
import { NavBar } from "./components/navbar/NavBar";
import { usePaginate } from './hooks/usePaginate';
import { PokemonQuery } from './components/PokemonQuery';


function App() {

  const limit = 16;
  const {offset,page,onNext,onPrev} = usePaginate(0,limit,1);
  
  return (
    <>
      <NavBar />
      <PokemonQuery limit={limit} offset={offset} page={page} onNext={onNext} onPrev={onPrev}/>
    </>
  )
}

export default App
