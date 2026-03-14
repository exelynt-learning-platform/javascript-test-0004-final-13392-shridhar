function printPattern(){
    let n = 4;
    let size = 2*n - 1;
    let center = Math.floor(size/2);
    
    for(let row = 0; row < size; row++){
        let line = "";
        for(let col = 0; col < size; col++){
            let dr = Math.abs(row - center);
            let dc = Math.abs(col - center);

            let printNum = 1 + Math.max(dr, dc);

            line += printNum + " ";
        }

        console.log(line);
    }
}

printPattern()