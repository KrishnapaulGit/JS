function Outer(){
    let name="Outer";

    function inner(){
        let name2 = "Inner";
        // console.log(name);

        function inner2(){
            // console.log(name);
            // console.log(name2);
        }
        inner2();
    }
    inner();

    // console.log(name2);   error
}
Outer();




