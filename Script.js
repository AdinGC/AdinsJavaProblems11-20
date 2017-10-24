/* Adins Java Script Problems 11-20 10/24/17*/


//CHECKED
function firstLast6 (arr){

    var length= arr.length;
    var first= arr[0];
    var last= arr[length-1];
    if (first==6 || last==6){
        return true;
    }else{
        return false;
    }


}


//Checked
function has23 (arr){

    var first= arr[0];
    var last= arr[1];
    if (first==2 || first==3|| last==3 ||last==2){
        return true;
    }else{
        return false;
    }
}

//arrays are always 3 long
//CHECKED (I think)
function fix23 (arr){

        var first=arr[0];
        var second=arr[1];
        var third = arr[2];
        if (first==2 && second==3){
            return [first,0,third];
        }
        if (second==2 && third==3){
            return [first, second, 0];
        }else{
            return  [arr];
        }



}

//CHECKED
function countYZ (string){
    var length = string.length;
    var count = 0
    for (var i=0; i<=length; i++){
        if((string[i])==" "){
            if ((string[i-1]=="y") || (string[i-1]=="z") || (string[i-1]=="Y") || (string[i-1]=="Z")){
                var count=count+1
            }
        }
    }
    if (string.endsWith("y")||string.endsWith("z") || string.endsWith("Y")|| string.endsWith("Z")){
        count=count+1
    }
    return count;
}

//CHECKED
function endOther (string1, string2){
    var x=string1.toLowerCase();
    var y=string2.toLowerCase();
    var length1=x.length;
    var length2=y.length;
    if(x.endsWith(y) || y.endsWith(x)){
        return true;
    }else{
        return false;
    }
}

//CHECKED
function starOut (string) {
    var length = string.length
    var str = "";
    for (var i = 0; i <= length - 1; i++) {
        if ( (string[i-1]!="*") && string[i + 1] != "*" && string[i] != "*") {
            str = str+string[i]
        }


    }
    return str;
}


//CHECKED
function getSandwich (str){
    if (!str.includes("bread")){
        return "";
    }else{

    }return (str.slice(str.indexOf("bread")+5,str.lastIndexOf("bread")))
}

//CHECKED
function canBalance (arr){
    var length = arr.length;
    var sum1=0;

    for (var i=0; i<length; i++){
       sum1+=arr[i];
        var sum2=0;
       for (var j=i+1; j<length; j++){
           sum2+=arr[j]
        }
        if (sum1==sum2){
           return true;
        }

    }
    return false;
}

//CHECKED
function countClumps (arr){
    var length = arr.length;
    var output= 0;
    for (var i=0; i<length; i++){
        if (arr[i]==arr[i+1] && arr[i]!=arr[i-1]){
        output+=1;

        }

    }
    return output;
}


//CHECKED
function evenlySpaced (a,b,c) {
    //This part sorts the size of the inputs
    var med=0;
    var min=0;
    var max=0;
    if (a > b && a > c) {
         max = a;
        if (b > c) {
             med = b;
             min = c;
        } else {
            med = c;
             min = b;
        }
    }else{
        if (b >c && b > a) {
             max = b;
            if (a > c) {
                 med = a;
                 min = c
            } else {
                med = c;
                med = a;
            }
        } else {
             max = c;
            if (a > b) {
                 med = a;
                 min = b;
            }else{
                med=b;
                min=a;
            }
        }
    }

    //This part determines if they are  spaced
    if(a==b && b==c){
        return true;
    }else{
        if((max-med)==(med-min)){
           return true;
        }else{
            return false;
        }

    }

}





function tester(){
    document.getElementById("output").innerHTML = firstLast6([6,3,5,4]);
    document.getElementById("output1").innerHTML = has23 ([2,5]);
    document.getElementById("output2").innerHTML = fix23 ([1,2,3]);
    document.getElementById("output3").innerHTML = countYZ ("aaz yyz my");
    document.getElementById("output4").innerHTML = starOut ("ab*cd");
    document.getElementById("output5").innerHTML = getSandwich ("bread");
    document.getElementById("output6").innerHTML = canBalance ([1, 1, 1, 2, 1]);
    document.getElementById("output7").innerHTML = countClumps ([1, 1, 1, 2, 1]);
    document.getElementById("output8").innerHTML = evenlySpaced (9, 10, 11);

}