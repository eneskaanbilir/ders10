import {useState} from "react";

const C1 = (props)=>{
   const [sayi, sayiGuncelle] = useState(0);

   function Arttir() {
      sayiGuncelle(onceki =>onceki + props.arttir);
   }

   console.log("Merhaba Ben C1!")

   return(
      <p>Merhaba ben C1 componentiyim! Sayi: {sayi} <button onClick={Arttir}>Arttır</button> <button onClick={props.fn}>Selamla</button></p>
   )
}

export default C1;