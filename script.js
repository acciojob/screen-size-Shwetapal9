//your JS code here. If required.
const sizeInfo = document.getElementById("h1");
const expectedWidth =window.innerWidth;
const expectedHeight=  window.innerHeight;
sizeInfo.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
document.body.append(sizeInfo);

window.onresize= function(){
	
	sizeInfo.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
	// document.body.append(sizeElement);
}