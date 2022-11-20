function carregar(){
    var msg = document.getElementById('msg')
    var img =document.getElementById('imagem')
    var data = new Date()
    var relogio=data.toLocaleTimeString()
    
    
    
    
    msg.innerHTML = `Agora são ${relogio}`
    if(relogio >=0 && relogio < 12){
        //Bom dIa
        img.src = './Design sem nome/1.png'
        document.body.style.backgroundColor = '#e2cd9f'
        
    } 
    else if ( relogio>= 12 && relogio <18){
        //Boa Tarde
        img.src = './Design sem nome/2.png'
        document.body.style.background ='#F7C943'
    }
    else {
        //boa noite
        img.src ='./Design sem nome/3.png'
        document.body.style.background ='#1C1B34'
        
    }
    
} 
