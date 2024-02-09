import React, { useState } from 'react'
import "../Styles/Color.css"
import { MdContentCopy } from "react-icons/md";

function Color() {

    const[mycolor,setMyColor]=useState("")
    const [copyAlertVisible, setCopyAlertVisible] = useState(false);

    function generateRandomHexColor() {
        const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            hexColor += colors[randomIndex];
        }
        return hexColor;
    }
    
    function handleColor(){
        const randomHexColor = generateRandomHexColor();
        setMyColor(randomHexColor); 
        
    }


    function copyColorToClipboard() {
        navigator.clipboard.writeText(mycolor)
            .then(() => {
                setCopyAlertVisible(true);
                setTimeout(() => {
                    setCopyAlertVisible(false);
                }, 3000); // 3 saniye sonra uyarıyı kapat
            })
            .catch(err => console.error('Renk kodunu kopyalarken hata oluştu:', err));
    }

  


  
   
    


   
    
  return (
    <div style={{ backgroundColor: mycolor}} className='color' > 

        <div className='buttons'>
        <button onClick={handleColor} >GENERATE RANDOM HEX COLOR</button>
        </div>

       <div className='yourcolor' >
       {mycolor}

      {mycolor &&  <button onClick={copyColorToClipboard} > <MdContentCopy/> </button>}
       

       </div>

       {copyAlertVisible && 
                <div className="copy-alert">
                    Renk kodu kopyalandı: {mycolor}
                </div>
            }
    </div>
  )
}

export default Color