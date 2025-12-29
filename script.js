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

শুভ জন্মদিন, আমার মায়ামনি 💖

আজকের দিনটা শুধু তোমার—
কারণ আজ তুমি জন্মেছিলে।
আর সেই সাথে, অজান্তেই,
আমার জীবনের সবচেয়ে সুন্দর অনুভূতিটাও জন্ম নিয়েছিল।

এই আয়োজনটা বড় কিছু না,
কিন্তু প্রতিটা মুহূর্তে
আমার নিঃস্বার্থ ভালোবাসা আছে।
কোনো দাবি নেই,
কোনো প্রত্যাশা নেই—
শুধু তুমি ভালো থাকো,
এই একটাই চাওয়া।

মোমবাতি তুমি নিজে জ্বালালে,
কেকটাও তুমি নিজে কাটলে—
কারণ আমি চাই,
তোমার জীবনের প্রতিটা আনন্দ
তুমি নিজের হাতেই তৈরি করো।
আমি শুধু পাশে থাকি,
নীরবে, নিশ্চুপভাবে।

তুমি জানো,
ভালোবাসা মানে সবসময় কাছে থাকা না।
কখনো কখনো,
দূরে থেকেও
কারো জন্য নিঃশব্দে প্রার্থনা করাটাই
সবচেয়ে গভীর ভালোবাসা।

আজ তোমার জন্মদিনে
আমি কোনো প্রতিশ্রুতি দিচ্ছি না।
শুধু এটুকু বলি—
তুমি যেমন আছো,
ঠিক তেমনটাই আমার কাছে
পর্যাপ্ত, সুন্দর আর অমূল্য।

ভালো থেকো, পল্লবী।
হাসতে থেকো।
আর যদি কোনোদিন মনে হয়
কেউ নিঃস্বার্থভাবে
তোমার কথা ভাবে—
মনে রেখো,
এই মানুষটা আজও
নীরবে তোমাকেই বেছে নেয়।

শুভ জন্মদিন, আমার মায়ামনি।

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

