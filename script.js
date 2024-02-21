 //font buttons
function LargeFont()
  {
    var ps = document.getElementsByTagName("pre");
    for(var i=0;i<ps.length;i++)
    {
       ps[i].style.fontSize="22pt";
    }
  } 

function NormalFont()
    {
      var ps = document.getElementsByTagName("pre");
      for(var i=0;i<ps.length;i++)
      {
        ps[i].style.fontSize="20px";
      }
    } 


function alterStyle()
  {
    var page = document.body;
    page.classList.toggle("colour");

    var ps= document.getElementsByClassName("myQuotes");

		for(var i=0; i<ps.length; i++)
		{
         if(ps[i].style.color=="white")
         {	ps[i].style.color="black";
      ps[i].style.backgroundColor="white";}
      else{
			ps[i].style.color="white";
      ps[i].style.backgroundColor="Black";
      }
      
		}
  }


function showModal(element){
  modal.style.display = "block";
  modalImg.src = element.src;

}