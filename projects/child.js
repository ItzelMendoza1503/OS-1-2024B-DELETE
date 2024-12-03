process.on('message',(message)=> {
    //imprimimos el mensaje recibido
    console.log(`🃏_🎅_↪_🧒: ${message}`);
    //Respondemos mensaje al padre
    process.send('✴ and a happy new year ✴');
})