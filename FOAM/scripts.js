////Autoscroll

startScroll();

function startScroll(){
setInterval(function(){ 
      $("#text").scrollTop($("#text").scrollTop() + 1);                
    }, 100);
}

////Draggable

$( function() {
    $( ".draggable" ).draggable({scroll: false, stack: ".draggable"});
  } );

////Random placement


$(".draggable").each(function () {
    var randomtop = Math.floor(Math.random() * 75) + 5 + '%';
    var randomleft = Math.floor(Math.random() * 75) + 5 + '%';
    $(this).css({
        "top": randomtop,
        "left": randomleft,
    });
});
////Click functions


$( ".champagne" ).click(function() {
  $("[title~=champagne]").css('visibility','visible');
});

$( "[title~=champagne]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});




$( ".pit" ).click(function() {
  $("[title~=pit]").css('visibility','visible');
});

$( "[title~=pit]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});




$( ".lube" ).click(function() {
  $("[title~=lube]").css('visibility','visible');
});

$( "[title~=lube]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});




$( ".menger" ).click(function() {
  $("[title~=menger]").css('visibility','visible');
});

$( "[title~=menger]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});



$( ".spacesponge" ).click(function() {
  $("[title~=spacesponge]").css('visibility','visible');
});

$( "[title~=spacesponge]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});




$( ".bath" ).click(function() {
  $("[title~=bath]").css('visibility','visible');
});

$( "[title~=bath]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".bees" ).click(function() {
  $("[title~=bees]").css('visibility','visible');
});

$( "[title~=bees]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});



$( ".buoy" ).click(function() {
  $("[title~=buoy]").css('visibility','visible');
});

$( "[title~=buoy]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".cappuccino" ).click(function() {
  $("[title~=cappuccino]").css('visibility','visible');
});

$( "[title~=cappuccino]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".chocolate" ).click(function() {
  $("[title~=chocolate]").css('visibility','visible');
});

$( "[title~=chocolate]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".coolwhip" ).click(function() {
  $("[title~=coolwhip]").css('visibility','visible');
});

$( "[title~=coolwhip]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".coral" ).click(function() {
  $("[title~=coral]").css('visibility','visible');
});

$( "[title~=coral]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".eps" ).click(function() {
  $("[title~=eps]").css('visibility','visible');
});

$( "[title~=eps]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".expandable" ).click(function() {
  $("[title~=expandable]").css('visibility','visible');
});

$( "[title~=expandable]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".igneous" ).click(function() {
  $("[title~=igneous]").css('visibility','visible');
});

$( "[title~=igneous]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".insulation" ).click(function() {
  $("[title~=insulation]").css('visibility','visible');
});

$( "[title~=insulation]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".marshmallow" ).click(function() {
  $("[title~=marshmallow]").css('visibility','visible');
});

$( "[title~=marshmallow]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".mousse" ).click(function() {
  $("[title~=mousse]").css('visibility','visible');
});

$( "[title~=mousse]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".ocean" ).click(function() {
  $("[title~=ocean]").css('visibility','visible');
});

$( "[title~=ocean]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".packing" ).click(function() {
  $("[title~=packing]").css('visibility','visible');
});

$( "[title~=packing]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".polystyrene" ).click(function() {
  $("[title~=polystyrene]").css('visibility','visible');
});

$( "[title~=polystyrene]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".pool" ).click(function() {
  $("[title~=pool]").css('visibility','visible');
});

$( "[title~=pool]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".shave" ).click(function() {
  $("[title~=shave]").css('visibility','visible');
});

$( "[title~=shave]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".spray" ).click(function() {
  $("[title~=spray]").css('visibility','visible');
});

$( "[title~=spray]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".weather" ).click(function() {
  $("[title~=weather]").css('visibility','visible');
});

$( "[title~=weather]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});



$( ".soundproofing" ).click(function() {
  $("[title~=soundproofing]").css('visibility','visible');
});

$( "[title~=soundproofing]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});



$( ".memory" ).click(function() {
  $("[title~=memory]").css('visibility','visible');
});

$( "[title~=memory]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});



$( ".forgetting" ).click(function() {
  $("[title~=forgetting]").css('visibility','visible');
});

$( "[title~=forgetting]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});

$( ".house" ).click(function() {
  $("[title~=house]").css('visibility','visible');
});

$( "[title~=house]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".tempur" ).click(function() {
  $("[title~=tempur]").css('visibility','visible');
});

$( "[title~=tempur]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


$( ".feel" ).click(function() {
  $("[title~=feel]").css('visibility','visible');
});

$( "[title~=feel]" ).dblclick(function() {
  $( this ).css('visibility','hidden');
});


