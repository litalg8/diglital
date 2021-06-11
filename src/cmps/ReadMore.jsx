import React, { useState } from 'react';

function ReadMore({children, maxCharNum = 50}){
    const text = children
    const [isLongTxtShown,setIsLongTxtShown] = useState(true);
    // const [charNum,setCharNum] =useState(20);
    const resultString = isLongTxtShown ? text.substr(0,0) :text; 

    
    function toggleIsShown(){
        setIsLongTxtShown(!isLongTxtShown)
    }

    return(
        <div className="read-more">
        <p>
            {resultString}
            <span className="info" onClick={toggleIsShown}>{isLongTxtShown ? 'Learn More About Me' : 'Go Back'} </span>
        </p>
        </div>
    )
}

export default ReadMore