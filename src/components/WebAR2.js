import React from 'react';
import './WebAR2.css';
import Vossle from '../images/vossle2.webp';

const WebAR2 = () => {
    return (
        <div>
            <div className="div1">
                <img className= "img" src={Vossle }/>
            

            </div>
            {/* <div className="div1">
             <div className= "img" style={{ backgroundImage: `url(${Vossle})` }}>
      Hello World
    </div>

  
    </div> */}

{/* <div style={{ backgroundImage: "url(../images/vossle2.webp)" }}>
  Hello World
</div> */}
        </div>
    )
}

export default WebAR2
