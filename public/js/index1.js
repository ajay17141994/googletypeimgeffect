let modal = document.getElementById('myModal');
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
function clicked(id,src){
    modal.style.top=0;
    modal.style.opacity="1";
    $("#myModal").show(1000);
    $("#myModal").animate({left:'0'});
    modal.style.display = "block";
    modalImg.src =src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { modal.style.display = "none";}

  $( function() {
  	const height = $(window).height();
  	console.log(height);
    $("#myModal").draggable (
      { axis: "y",
          drag: function(event, ui){
              let pos = ui.helper.position(); // just get pos.top and pos.left
              let w = window.innerWidth;
              let h = window.innerHeight;

	            if(((height * 30)/100) < pos.top && ((height * 40)/100) > pos.top )
                  $("#infosection").css({ 'opacity' :"0.50" },100);
              else if(((height * 40)/100) < pos.top && ((height * 50)/100) > pos.top )
                  $("#infosection").css({ 'opacity' :"0.4" },100);
              else if(((height * 50)/100) < pos.top && ((height * 60)/100) > pos.top )
                  $("#infosection").css({ 'opacity' :"0.3" },100);
              else if(((height * 60)/100) < pos.top && ((height * 70)/100) > pos.top )
                  $("#infosection").css({ 'opacity' :"0.2" },100);
              else if(((height * 70)/100) < pos.top && ((height * 80)/100) > pos.top )
                  $("#infosection").css({ 'opacity' :"0.1" },100);
          },
          stop: function(event, ui) {
              let pos = ui.helper.position(); // just get pos.top and pos.left
              if(((height * 40)/100) > pos.top){
               	$("#myModal").animate({top:"0", opacity:"1"},400);
               	$("#infosection").animate({opacity:"1"},400);
              }
              else
              {
                  $("#myModal").hide(1000);
                  $("#infosection").animate({opacity:"1"},400);
              }
          }
      });
  } );