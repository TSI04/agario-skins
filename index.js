//navbar
// basic af
var agarbar1 = document.getElementById('agarskins1')
  , agarbar2 = document.getElementById('agarskins2')
  , agarcontent = document.getElementById('agarskins')
  , agarcontent2 = document.getElementById('blobskins');
agarbar1.addEventListener("click", function() {
    agarbar1.className = "selected tab"
    agarbar2.className = "tab"
    agarcontent2.style.display = "none";
    agarcontent.style.display= "block";
})
agarbar2.addEventListener("click", function() {
    agarbar1.className = "tab"
    agarbar2.className = "selected tab"
    agarcontent.style.display = "none";
    agarcontent2.style.display= "block";
})
function a() {
    let loader = document.querySelector(".loader");
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
    setTimeout(() => {
        loader.style.display = "none";
        body.style.overflow = "auto";
    },1000)
}
function b() {
    const hue = Math.floor(Math.random() * 360);         // 0 - 359
    const saturation = 70 + Math.random() * 30;           // 70% - 100%
    const lightness = 60 + Math.random() * 20;            // 60% - 80%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
function c() {
    const userscriptBtn = document.querySelector(".cpu");
    const userscriptContent = document.getElementById("pre-maroc");
    console.log(userscriptContent.innerText)
    userscriptBtn.textContent = "Userscript Copied";
    userscriptBtn.style.backgroundColor = "rgb(0, 155, 0)";
    setTimeout(() => {
      userscriptBtn.textContent = "Copy Userscript";
      userscriptBtn.style.backgroundColor = "rgb(30,30,30)";
    },5000);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(userscriptContent.textContent)
      .catch(err => console.error("Error copying text: ", err));
    } else {
      userscriptBtn.textContent = "Error copying";
    }
}
fetch('index.json')
  .then(response => response.json())
  .then(data => {
    const vlist = document.getElementById("vs-list")
        , ylist = document.getElementById("yt-list")
        , blobListyt = document.getElementById('blb-list')
        , blobRegList = document.getElementById('blbreg-list')
    data.vanillaSkins.forEach((item, index) => {
      const li = document.createElement("span");
      li.innerHTML = `<div class="card"><img class="card-image" style="background-color:${b()};" src="${item.url}"/><span class="skinName">${item.name}</span></div>`;
      vlist.appendChild(li);
    });
    data.ytSkins.forEach((item, index) => {
      const li = document.createElement("span");
      li.innerHTML = `<div class="card"><img class="card-image" style="background-color:${b()};" src="${item.url}"/><span class="skinName">${item.name}</span></div>`;
      ylist.appendChild(li);
    });
    data.blobytSkins.forEach((item, index) => {
      const li = document.createElement("span");
      li.innerHTML = `<div class="card"><img class="card-image" style="background-color:${b()};" src="${item.url}"/><span class="skinName">${item.name}</span></div>`;
      blobListyt.appendChild(li);
    });
    data.blobregSkins.forEach((item, index) => {
      const li = document.createElement("span");
      li.innerHTML = `<div class="card"><img class="card-image" style="background-color:${b()};" src="${item.url}"/><span class="skinName">${item.name}</span></div>`;
      blobRegList.appendChild(li);
    });
  })
.catch(error => console.error('JSON Error - ', error));
a();