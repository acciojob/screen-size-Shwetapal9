//your JS code here. If required.
const node = document.getElementsByTagName("div")[0];
const screensize = document.createElement("h1");
screensize.id= "sizeInfo";
const  expectedWidth =window.innerWidth;
const expectedHeight=  window.innerHeight;
screensize.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
document.node.appendChild(screensize);

window.onresize= function(){
	
	screensize.innerText = `Width: ${expectedWidth} and Height: ${expectedHeight}`;
	// document.body.append(sizeElement);
}