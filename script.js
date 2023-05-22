//your JS code here. If required.
// const node = document.getElementsByTagName("div")[0];
const screensize = document.getElementById("sizeInfo");
const width = sizeInfo.querySelector("h1:first-child");
const height = sizeInfo.querySelector("h1:last-child");
// screensize.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
// document.node.appendChild(screensize);

function setScreenSize() {
width.innerText = `Width: ${window.innerWidth}px`;
height.innerText = `Height: ${window.innerHeight}px`;
}
window.addEventListener('resize', setScreenSize);
setScreenSize();

// window.onresize= function(){
	
// 	screensize.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
// 	// document.body.append(sizeElement);
// }