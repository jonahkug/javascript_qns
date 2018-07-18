var myNumbers=['','one','two','three','four','five','six','seven','eight','nine'];
var myWords=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var myYears=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function convert_millions(num){
    if (num>=1000000){
        return convert_millions(Math.floor(num/1000000))+" million "+convert_thousands(num%1000000);
    }
    else {
        return convert_thousands(num);
    }
}

function convert_thousands(num){
    if (num>=1000){
        return convert_hundreds(Math.floor(num/1000))+" thousand "+convert_hundreds(num%1000);
    }
    else{
        return convert_hundreds(num);
    }
}

function convert_hundreds(num){
    if (num>99){
        return myWords[Math.floor(num/100)]+" hundred "+convert_myWords(num%100);
    }
    else{
        return convert_myWords(num);
    }
}

function convert_tens(num){
    if (num<10) return myNumbers[num];
    else if (num>=10 && num<20) return myWords[num-10];
    else{
        return myWords[Math.floor(num/10)]+" "+myNumbers[num%10];
    }
}

function convert(num){
    if (num==0) return "zero";
    else return convert_millions(num);
}

//end of conversion code

//testing code begins here

function wordConvert(){

}

function main(){
    var cases=[0,1,2,7,10,11,12,13,15,19,20,21,25,29,30,35,50,55,69,70,99,100,101,119,510,900,1000,5001,5019,5555,10000,11000,100000,199001,1000000,1111111,190000009];
    for (var i=0;i<cases.length;i++ ){
        console.log(cases[i]+": "+convert(cases[i]));
    }
}

main();

console.log()