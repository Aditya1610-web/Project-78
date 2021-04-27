var images = [
  "DSC_0221.png",
  "DSC_0187.JPG",
  "Mom.jpg",
  "Adi.jpg",
  ];
  
var i = 0;

function Nextslide(){
if(i == 4){
    i=0
}
  document.getElementById("album").src=images[i];
  i++;
}