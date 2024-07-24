
import './App.css';
import Alert from './modules/Alert';
import About from './modules/About';
import Navbar from './modules/Navbar';
import TextForm from './modules/TextForm';
import React,{useState} from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';


function App() {
   const [mode, setmode] = useState("light");
   const [alert, setAlert] = useState(null);

   const showAlert=(type , message)=>{
        setAlert({
             msg: message,
             type: type
        })
        setTimeout(() => {
          setAlert(null)
        }, 1500);
   }
   const changeMode=()=>{
         if(mode==="dark"){
          setmode("light");
          document.body.style.backgroundColor="white"
          showAlert("success", "the mode has been changed to light");
         }
         else{
          setmode("dark");
          document.body.style.backgroundColor="#042743"
          showAlert("success", "the mode has been sucessfully changed to dark");

         }
   }
  return (
   <>
    <BrowserRouter>
    <Navbar title="TextUtil" aboutText="home"  about="about"mode={mode} changeMode={changeMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     
    <Routes>
    <Route path="/"
         element={ <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}  />}
      />
    <Route path="/about" element={<About mode={mode}/>} />
          <Route path="*" element={ <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}  />} />
          
          
        </Routes>
        
    </div>
    </BrowserRouter>
   
   </>
  );
}

export default App;
