const btnNav = document.querySelectorAll(".btnNav");

btnNav[0].addEventListener("click", openPage);


function openPage(){
    console.log("test");
    chrome.tabs.create({ url: "http://172.29.5.154:3008/" });
}

