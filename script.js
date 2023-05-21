//your JS code here. If required.
const screensize = document.createElement("h1");
screensize.id= "sizeInfo";
const  expectedWidth =window.innerWidth;
const expectedHeight=  window.innerHeight;
screensize.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
document.body.append(screensize);

window.onresize= function(){
	
	screensize.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
	// document.body.append(sizeElement);
}