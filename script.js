//your JS code here. If required.
const screensize = document.getElementById("sizeInfo");
const expectedWidth =window.innerWidth;
const expectedHeight=  window.innerHeight;
screensize.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
document.body.append(sizeInfo);

window.onresize= function(){
	
	screensize.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
	// document.body.append(sizeElement);
}