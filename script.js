const intro = document.getElementById("intro");
const cakeSection = document.getElementById("cakeSection");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");

// START
document.getElementById("startBtn").onclick = () => {
  music.play(); // 🔥 mobile safe
  intro.classList.add("hidden");
  cakeSection.classList.remove("hidden");
};

// CANDLES
const candlesDiv = document.getElementById("candles");
const blowBtn = document.getElementById("blowBtn");
const cutBtn = document.getElementById("cutBtn");

let lit = 0;
const total = 19;

for(let i=0;i<total;i++){
  const c = document.createElement("div");
  c.className="candle";
  c.onclick=()=>{
    if(!c.classList.contains("on")){
      c.classList.add("on");
      lit++;
      if(lit===total) blowBtn.classList.remove("hidden");
    }
  };
  candlesDiv.appendChild(c);
}

blowBtn.onclick=()=>{
  document.querySelectorAll(".candle").forEach(c=>c.classList.remove("on"));
  cutBtn.classList.remove("hidden");
};

cutBtn.onclick=()=>{
  cakeSection.classList.add("hidden");
  letter.classList.remove("hidden");
  typeWriter();
};

// LETTER
const text=`
পল্লবী,

শুভ জন্মদিন, আমার মায়ামনি 🤍

এই সারপ্রাইজটা ছোট,
কিন্তু অনুভূতিটা গভীর।

ভালো থেকো,
হাসতে থেকো,
আর মনে রেখো—
এই মানুষটা নিঃস্বার্থভাবে
তোমাকেই বেছে নেয়।

— আকাশ
`;

let i=0;
function typeWriter(){
  if(i<text.length){
    document.getElementById("letterText").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typeWriter,35);
  }
}
