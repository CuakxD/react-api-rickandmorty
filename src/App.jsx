import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {

  

  return (
    <div className="rickandmortybg text-white">
      <NavBar></NavBar>
      <h1 className="text-center display-1 py-5 "><strong> Rick and Morty </strong></h1>
      <h2 className="text-center display-5 ">Here you can see the characters from <strong>Rick and Morty</strong></h2>
      <CharacterList/>
     <Footer/>
    </div>
  )
}

export default App