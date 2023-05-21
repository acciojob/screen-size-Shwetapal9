//your JS code here. If required.
const sizeInfo = document.createElement("h1");
sizeInfo.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
document.body.append(sizeInfo);

window.onresize= function(){
	
	sizeInfo.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
	// document.body.append(sizeElement);
}