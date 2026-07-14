const text = "Every moment with you is special. Happy Birthday Supriya ❤️";
let i = 0;

function typeWriter() {
  const el = document.getElementById("typing");
  if (!el) return;
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

window.onload = () => {
  typeWriter();
};

function fireworks() {
  alert("🎉 Happy Birthday Supriya ❤️\nForever Yours, Vaibhav Singh");
}
