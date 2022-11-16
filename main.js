window.addEventListener('offline',(event)=>{
  alert('Plzz Check your internet connection And Try Again !')
})

let p = document.getElementById('p');
let next = document.getElementById('next');
next.addEventListener('click',(e)=>{
  e.preventDefault();
  location.reload(true);
})
fetch('https://icanhazdadjoke.com/slack').then((res) => res.json()).then((data) => {
  console.log(data.attachments[0].text);
  p.innerText = `${data.attachments[0].text}`;
})
