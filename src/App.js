import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {useState , useEffect} from 'react'

function App() {

  const [inputFields,setInputFields] = useState({});

  const handleFormInput=(event)=>{

    const name = event.target.name;
    const value = event.target.value;

    setInputFields(fields => ({...fields, [name]:value}));

  }


  const handleFormSubmit= (event) => {
    event.preventDefault();
  }

  return (
    <>
      <div className="App">
        <Header/>
        <form onSubmit={handleFormSubmit}>
          <div className="row">
            <label>Name</label>
            <input type="text" className="form-control" name="name" placeholder="Enter Name"
            value={inputFields.name} onChange={handleFormInput}
            />
          </div>
          <div className="row">
            <label>Age</label>
            <input type="number" className="form-control" name="age" placeholder="Enter age"
            value={inputFields.age} onChange={handleFormInput}
            />
          </div>
          
          <button className="btn btn-primary" disabled={inputFields.name === '' || inputFields.age === ''} type="submit">Set Api Server</button>

        </form>
        
      </div>
    </>
  );
}

export default App;
