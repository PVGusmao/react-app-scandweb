import './App.css'
import axios from 'axios'

function App() {

  async function handleClick() {
    const body = {
      name: 'oi'
    }

    axios
      .get('http://localhost:8080/list', body)
      .then((element) => console.log(element))
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <button
        style={{
          width: '300px',
          height: '50px',
        }}
        type='button'
        onClick={async () => await handleClick()}
      >
        Click me
      </button>
    </div>
  )
}

export default App
