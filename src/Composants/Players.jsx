import React from 'react'

export default function Players() {
    let score = 100;
    let name = 'Kadi';


if(score >= 100){
    return <h1 style={{color:"green"}}>{name}, votre score est de {score}, vous avez gagné!!!</h1>
} else {
    return <h1 style={{color:"red"}}>{name}, votre score set de {score}, vous avez perdu. LOSER!!!</h1>
}

}

    /*let messageWin = score + 'Vous avez gagné, '+ 
     name;
     let messageLoser = score + 'Vous avez perdu,' + name;

if (score >= 100) {
    return <h1 style={{color:"green"}}>{messageWin}</h1>
}else {
    return <h1 style={{color:"red"}}>{messageLoser}</h1>
}
**/