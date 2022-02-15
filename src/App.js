import { useState } from "react";
import './App.css';
import { data } from "./data";
 
function App() {
 const[gifts, setGifts] = useState(data);
const removeGift = (id) => {
let newGifts = gifts.filter( gift => gift.id !== id);
setGifts(newGifts)
}
 return(
   <div>
     <div className="container">
      <h1>List of {gifts.length} gifts</h1>
     </div>
 
     {gifts.map((element => {
       const {id, gifty, image} = element;
 
       return(
         <div key={id}>
           <div className="container">
           <h2>{id} - {gifty}</h2>
           </div>
           <div className="container">
           <img alt="presents" width="300px" src={image} />
           </div>
           <div className="container">
           <button onClick={() => removeGift(id)}>Remove</button>
           </div>
 
         </div>
       )
     }))}
     <div className='container'>
     <button onClick={() => setGifts([])}>Delete all</button>
     </div>
   </div>
 )
 }
 
 
export default App;