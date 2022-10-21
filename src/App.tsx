import "./App.css";
import { ListPhotos } from './components/ListPhotos/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Photo } from "./components/Photo";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<ListPhotos />} />
          <Route path="/:id" element={<Photo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
