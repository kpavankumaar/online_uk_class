console.log(arjun); // undefined;
var arjun = "burger";
console.log(arjun); // burger
var bheem;
var nakul = "icecream";// undefined --> icecream
draupadi_yudhister();
var yudhishter = arjun;

function draupadi_yudhister(){
    console.log(yudhishter);
    yudhishter = "corn";
    bheem = yudhishter;
}

function draupadi_arjun(){
    var draupadi = "Juice";
    bheem = draupadi;
}

function draupadi_bheem(){
    arjun = "chips"
    yudhishter = "Coco chips"
    bheem = arjun;
    console.log(bheem);
    bheem = nakul;
}

console.log(bheem);
