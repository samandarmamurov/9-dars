// let son = +prompt("son kiriting"); 
// if (son % 5 === 0){
//     console.log('Fizz');
    
// }else if 

// 3 ta A B C butun sonlar berilgan jumlani rostlika tekshiring A B C sonlaridan faqat 1 tasi musbat son
// let son = +prompt()
// let = a
// let = b 
// let = c 


// let musbatlar = 0;
// if (a > 0) ;
// if (b > 0) ;
// if (c > 0) ;

// =======================================================================================================================================================================

// asosiy vazifa



// 1         A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.

// let a = Number(prompt("Butun son kiriting"));

// let natija0 = (a % 2 === 0);

// if (natija0) {
//     console.log("true");
// } else {
//     console.log("folse");
// }


// =====================================================================================

// 2         Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:  "A >= 0 yoki B <-2"

// let A = Number(prompt("A sonini kiriting:"));
// let B = Number(prompt("B sonini kiriting:"));

// let natija = (A >= 0 || B < -2);

// if (natija) {
//     console.log("Rost — A >= 0 yoki B < -2");
// } else {
//     console.log("Yolg'on — A >= 0 yoki B < -2 emas");
// }


// ==================================================================================

//  3      Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".

    // let a = Number(prompt("a sonini kiritng "));
    // let b = Number(prompt("b sonini kiriting "));
    // let c = Number(prompt("c sonini kiritng "));
    // let natija1 = (a < b && b < c ) || (c < b && b < a);
    // if (natija1) {
    //     console.log(" b soni a, c orasida yotadi",true);                      // b soni a sonidan kotta bosin 
    // } else{                                                                        //  b soni c sonidan kichik bosin
    //     console.log(" b soni a, c ortasida yotmaydi ", fplse);
        
    // }

// ==============================================================================

//  4      Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".

// let a1 = Number(prompt("a sonini kiriting "));
// let b1 = Number(prompt("b sonini kiriting "))

// let natija2 = a1 % 2 !== 0 && b1 % 2 !== 0;
// if (natija2)  {
//  console.log(" 2 si ham toq ",true);
    
// } else{
//     console.log("2 si ham juft son",folse );
    
// }

// ================================================================================

//  5      Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son"

// let a2 = Number(prompt("A sonini kiriting:"));
// let b2 = Number(prompt("B sonini kiriting:"));

// let natija3 = a2 % 2 !== 0 || b2 % 2 !== 0;

// if (natija3) {
//     console.log(" bittasi toq son",true );
// } else {
//     console.log("ikki si ham juft son",folse);
// }

// ====================================================================================

// 6    Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".

// let a3 = Number(prompt("A sonini kiriting:"));
// let b3= Number(prompt("B sonini kiriting:"));

// let natija4 = (a3 % 2 !== 0 && b3 % 2 === 0) || (a3 % 2 === 0 && b3 % 2 !== 0);

// if (natija4) {
//     console.log("faqat bittasi toq son",true);
// } else {
//     console.log("faqat bittasi toq emas",folse);
// }

// ==================================================================================

// 7     Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".

// let a4 = Number(prompt("a sonini kiriting:"));
// let b4 = Number(prompt("b sonini kiriting:"));
// let c4 = Number(prompt("c sonini kiriting:"));

// let natija5 = a4 > 0 && b4 > 0 && c4 > 0;

// if (natija5) {
//     console.log(" a4 , b4 , c4  sonlar har biri musbat",ture );
// } else {
//     console.log(" a4 , b4 , c4 sonlar har biri musbatmas", folse );
// }

// ================================================================================

// 8       Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son"

// let a5 = Number(prompt("a sonini kiriting:"));
// let b5 = Number(prompt("b sonini kiriting:"));
// let c5 = Number(prompt("c sonini kiriting:"));

// let natija6 = (A>0) + (B>0) + (C>0) === 1;

// if (natija6) {
//     console.log("faqat bittasi musbat son",true);             // true 0 dan kotta faqat  1 tasi qogani 0 dan kichik va 0 ga teng bolsa                          
// } else {                                                                       // folse   0 dan kotta 1 tasi qogani dan 1 tasi 0 dan kotta bosa ham folse chiqadi
//     console.log("faqat bittasi musbat emas",folse);
// }

// ====================================================================================

// 9             Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".

// let a6 = Number(prompt("a sonini kiriting:"));
// let b6 = Number(prompt("b sonini kiriting:"));
// let c6 = Number(prompt("c sonini kiriting:"));

// let natija7 = (a6 > 0) + (b6 > 0) + (c6 > 0) === 2;

// if (natija7) {
//     console.log("faqat ikkitasi musbat son",true);
// } else {
//     console.log("faqat ikkitasi musbat emas",folse);
// }

// =====================================================================================

// 10        Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".

// let son = Number(prompt("2 xonali musbat butun son kiriting"));

// let natija8 = son >= 10 && son <= 99 && son % 2 === 0;

// if (natija8) {
//     console.log("berilgan son ikki xonali juft son",true);
// } else {
//     console.log("berilgan son ikki xonali juft son emas",folse);
// }

// 11         Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq"

let son1 = Number(prompt("3 xonali musbat butun son kiriting:"));

let natija9 = son1 >= 100 && son <= 999 && son % 2 !== 0;

if (natija9) {
    console.log(" berilgan son uch xonali toq son",true);
} else {
    console.log(" berilgan son uch xonali toq son emas",folse);
} 

// ======================================================================================

// 12      Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".

let a7 = Number(prompt("A sonini kiriting:"));
let b7 = Number(prompt("B sonini kiriting:"));
let c7 = Number(prompt("C sonini kiriting:"));

let natija10= (a7 + b7 === 0) || (a7 + c7 === 0) || (b7 + c7 === 0);

if (natija10) {
    console.log("eng kamida bir juft qarama-qarshi son bor",true);                     // eng kamida 1  ta minusdan son bolishi kere 
} else {                                                                               
    console.log("qarama-qarshi sonlar yoq",folse);
}

// =========================================================================================

// 13        Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".

let son2 = Number(prompt("Uch xonali son kiriting:"));

let yuzblik = Math.floor(son2 / 100);                    //yuzblik = Math.floor(456 / 100) = 4
let onlik   = Math.floor(son2 / 10) % 10;                 // onlik   = Math.floor(456 / 10) % 10 = 45 % 10 = 5
let birlik  = son2 % 10;                                   // birlik  = 456 % 10 = 6

let natija11 = yuzblik < onlik && onlik < birlik;                //4 < 5 && 5 < 6

if (natija11) {
    console.log("raqamlar ketama-ket o'suvchi",true);
} else {
    console.log("raqamlar ketama-ket o'suvchi emas",folse);             //har bir keyingi raqam oldingisidan katta bolishi shart
}

// ============================================================================================

// 14        Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
 
 let son3 = Number(prompt("Uch xonali son kiriting:"));

let yuzblik1 = Math.floor(son3 / 100);
let onlik1   = Math.floor(son3 / 10) % 10;
let birlik1  = son3 % 10;

let osuvchi   = yuzblik1 < onlik1 && onlik1 < birlik1;
let kamayuvchi = yuzblik1 > onlik1 && onlik1 > birlik1;               // 1 ta son yana  takrorlanmaslik kere 

let natija12 = osuvchi || kamayuvchi;

if (natija12) {
    console.log(" raqamlar o'suvchi yoki kamayuvchi",true);
} else {
    console.log("raqamlar o'suvchi ham kamayuvchi ham emas",folse);
}