    function loopingATriangle() {
        const str = "#";
        let result = "";
        for(let i=0;i<7;i++){
            for(let j=0;j<=i;j++){
                result+=str;
            }
            result+='\n';
        }
        console.log(result);
    }
    loopingATriangle();