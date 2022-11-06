

function createImg(src, alt){
    return `
        <img
        src="/imgs/${src}.jpg"  
        alt=${alt}>
        
    `
}
function createCard(spanOne,spanTwo, imgs ){
    return `
    <div class="card"> 
     ${imgs}
    <h2><span>${spanOne}</span>${spanTwo}</h2>
    </div>
    `

}

document.querySelector("#container").innerHTML = `
    ${createCard("Ver mais", "São paulo",
    createImg("img1", "Imagem de uma casa Chique"
    ))}
    ${createCard("Ver mais", "São paulo",
    createImg("img2", "Imagem de uma casa Chique"
    ))}
    ${createCard("Ver mais", "São paulo",
    createImg("img3", "Imagem de uma casa Chique"
    ))}
    ${createCard("Ver mais", "São paulo",
    createImg("img4", "Imagem de uma casa Chique"
    ))}


`