import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";




window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = 0

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



function App() {


  return (
    <router>
    <title>Sahib's Applications</title>
    <div class="text-white">
    
    

    <Routes>
        <Route path='*' element={<Home/>} />
    </Routes>

    </div>

    </router>

    
  );
}

export default App;
