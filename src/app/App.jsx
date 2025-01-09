import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Game from "../pages/Game/Game";
import Table from "../pages/Table/Table";
import Error from "../pages/Error/Error";
import Header from "../components/Header/Header";

import wordsServ from "../data/data.json"
import './App.scss'

function App() {
    const [words, setWords] = useState(wordsServ);
    const upd = { words, setWords };


  return (
      <div>
          <header >
              <Header />
          </header>
          <main className="App-main">
              <Routes>
                  <Route index element={<Table upd={upd} />} />
                  <Route path="/game" element={<Game upd={upd} />} />
                  <Route path="*" element={<Error />} />
              </Routes>
          </main>
          <footer className="App-footer"></footer>
      </div>
  )
}

export default App
