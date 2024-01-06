const form = document.querySelector('form');
// this usecase will give us empty
// const height = parseInt(document.getElementById('height').value);



form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    // console.log(height);
    // console.log(weight);

    const result = document.getElementById('results');

    // const FinalResult = (weight/height);
    // console.log(FinalResult);

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML=`Please Enter valid Height ${height}`
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please Enter valid Weight ${weight}`
    }else{
    const bmi =(weight / ((height*height)/10000)).toFixed(2);

    if(bmi<18.6){
    result.innerHTML=`<span> ${bmi}</span> <br> Under Weight`
    }else if(bmi >=18.6 && bmi<=24.9){
    result.innerHTML=`<span> ${bmi}</span> <br> Normal Weight`
    }else if(bmi >24.9){
    result.innerHTML=`<span> ${bmi}</span><br> Over Weight`
    }else{
    result.innerHTML=`<span> ${bmi}</span> <br> Something Wrong`

    }

    }


})