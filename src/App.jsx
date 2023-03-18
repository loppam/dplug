import ContactDetails from "./assets/contactDetails";
import "./App.css";
import NotFound from "./assets/notFound";
import Homepage from "./assets/home";
import Navbar from "./assets/navbar";
import ContactCreate from "./assets/contactCreate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/create" element={<ContactCreate />} />
            <Route path="/:id" element={<ContactDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
