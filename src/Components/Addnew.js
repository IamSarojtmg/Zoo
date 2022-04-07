import {useState} from 'react';
import Input from '../Components/Input';
import Output from '../Components/Output';
import {InputForm} from './Input'; 
// imported just the component here, not the file.
import {Outputsubmitted} from './Output'


export default function App() {
    if (localStorage.getItem("details") == null) {
      // GetItem will fetch data from localStorage.  
       localStorage.setItem("details", JSON.stringify([]))
      //  setItem will set/save data(details) to localstorage. stringigy is changing arrays and objects to string.
      // localstorage only save string values.
    }
    const [details, setdetails] = useState(JSON.parse(localStorage.getItem("details")));
     // This usestate will pass on data from parent component(addnew.js) to child components.
    // parse = converting the data to its original value before it was stringified.
    
    const updateDetailsArray = eachEntry => {
      // updateDetailsArray is a props used in Sumbit button(to pull the newly added data written in eachEntry) and Inputform (to pass the data to 
   // the inputForm(childcomponent)). 
      setdetails([...details, eachEntry]);
      // setDetails = all properties and values of details entered from each entry.
      localStorage.setItem("details", JSON.stringify([...details, eachEntry]))
      // saving details into local storage. Changing details and eachentry value to string using stingify.
    };
    return (
      <div className="container mt-4">
        {/* <Input/> =  When adding the whole input file it only displayed a inout box that could be from react-strap. */}
          <InputForm updateDetailsArray={updateDetailsArray} />
          {/* Adding the Input form component and displaying the its content, updateDetailsArray is the handler on the parent component that 
          passes/ update the data into the child component(InputForm) */}
          {/* <Output/> */}
          {/* When I try dispay all the content inside output. Check word document */}
          <Outputsubmitted details={details} />
          {/* Passing data from parent component to child component using props (details) */}

        </div>
      );
    }
   













































// import {useState} from 'react';
// import {InputForm} from './Input';
// import {Outputsubmitted} from './Output'


// function App() {
//     // This usestate will pass on data from parent component(app.js) to child components.
//     const [details, setdetails] = useState([]);
    
//     const updateDetailsArray = eachEntry => {
//       setdetails([...details, eachEntry]);
//     };
//     return (
//       <div className="container mt-4">
//           <InputForm updateDetailsArray={updateDetailsArray} />
//           <Outputsubmitted details={details} />
//         </div>
//       );
//     }
//     export default App;
    
//     // updateDetailsArray is a props used in Sumbit button(to pull the newly added data written in eachEntry) and Inputform (to pass the data to 
//     // the inputForm(childcomponent)). 
    