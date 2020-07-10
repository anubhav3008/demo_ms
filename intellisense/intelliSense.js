function hello(){
    console.log();
    alert();
    hello();
    

    function hello() {
        const newLocal = 10;
        var xyz = newLocal;
        console.log(xyz);
    }
}

