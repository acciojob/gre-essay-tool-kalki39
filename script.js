//your code here
let input=document.getElementById("evaluatedText");
let words=document.getElementById("wordCount");

function fun() {
	if(input.value==""){
		words.innerText=0;
	}
	words.innerHTML=Number(input.value.length);
}
// input.addEventListener("onkeyup" ,()=>{
// 	words.innerHTML=input.value.length;
// })
