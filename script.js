const intro = document.getElementById("intro");
const cakeSection = document.getElementById("cakeSection");
const letter = document.getElementById("letter");

document.getElementById("startBtn").onclick = () => {
  intro.classList.add("hidden");
  cakeSection.classList.remove("hidden");
};

// Candles
const candlesDiv = document.getElementById("candles");
const blowBtn = document.getElementById("blowBtn");
const cutBtn = document.getElementById("cutBtn");

let lit = 0;
const total = 19;

// first candle auto lit
for(let i=0;i<total;i++){
  const c = document.createElement("div");
  c.className="candle";
  if(i===0){c.classList.add("on");lit++;}
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
  firework();
  cakeSection.classList.add("hidden");
  letter.classList.remove("hidden");
  typeWriter();
};

// Firework
function firework(){
  for(let i=0;i<10;i++){
    const f=document.createElement("div");
    f.className="firework";
    f.innerHTML="🎆";
    f.style.left=Math.random()*100+"vw";
    f.style.bottom="0";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),1200);
  }
}

// Letter
const text = `
পল্লবী,

শুভ জন্মদিন, আমার মায়ামনি 💖

এই সারপ্রাইজটা বড় কিছু না,
কিন্তু এর প্রতিটা মুহূর্তে
আমার নিঃস্বার্থ ভালোবাসা আছে।

তুমি মোমবাতি জ্বালালে,
কেক কাটলে,
আর আমি শুধু দূর থেকে
তোমার হাসিটা কল্পনা করলাম।

ভালো থেকো,
হাসতে থেকো,
আর মনে রেখো—
এই মানুষটা নীরবে
সবসময় তোমাকেই বেছে নেয়।

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
