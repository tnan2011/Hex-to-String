function hexToString(hex) { 
    let str = ''; 
    for (let i = 0; i < hex.length; i += 2) { 
        str += String.fromCharCode (parseInt(hex.substr(i, 2), 16)); 
    }
    return str; 
}
    
    const hex = '31 30 74 68 20 41 75 67 75 73 74 20 32 30 32 34'.replace(/ +/g, ''); 
    const result = hexToString(hex); 
    console.log(result); 