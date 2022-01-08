console.log(arjun); // undefined;
var arjun = "burger";
console.log(arjun); // burger
var bheem;
var nakul = "icecream";// undefined --> icecream
draupadi_yudhister();
var yudhishter = arjun;

function draupadi_yudhister(){
    console.log(yudhishter); // undefined
    yudhishter = "corn";
    bheem = yudhishter;
    draupadi_arjun();
    console.log(bheem)
}

function draupadi_arjun(){
    console.log(draupadi);// undefined
    var draupadi = "Juice"; // undefined replaced by "Juice"
    draupadi_bheem();
    bheem = draupadi;
    
}

function draupadi_bheem(){
    arjun = "chips"
    yudhishter = "Coco chips"
    bheem = arjun;
    console.log(bheem);
    bheem = nakul;
}
console.log(yudhishter);// burger
console.log(bheem);//  juice 
