import './App.css'
import Main from './components/Main'
import y2r from 'y2r/main'

function App() {
  return (
    <>
      <Main />
      {y2r.RenderComponent()}
    </>
  )
}

export default App
