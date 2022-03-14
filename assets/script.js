let i=0        
const imagens = document.querySelectorAll("[wm-slider] > p")      
function clicou(){          
    let atual= imagens[i]
    atual.style.display="none";
    let proxima=0                   
    if(i===imagens.length-1){
        proxima=imagens[0]                
        i=0             
    } else {
        proxima=imagens[i+1]               
        i++
    }
        proxima.style.display="block"                
        proxima.classList.add('mover');                  
}
