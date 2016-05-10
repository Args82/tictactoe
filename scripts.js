

$(document).ready(function() {

var player = 1; //player is assigned #1



$( "#start" ).on('click', function(event){  
  alert('Player 1 Begins');
});



  $('.td').on('click', function(event) { //when any of td class is clicked the event fires
      

      var tdCell = $(this); //current cell becomes target
      
      if (tdCell.hasClass('x') || tdCell.hasClass('o')) { //if current target has class of x or o alert that cell cannot be used again
        alert("Can't do that Silly");
      
      } else {
          
          if (player === 1) { //
           tdCell.addClass('x'); //add class x to cell that player 1 clicked
           tdCell.text('x');
              if ( possibleWins('x')) { // if player 1 matches possible win send alert
                alert('You Win!');
              
                
           

               // if (tdCell.hasClass('x') || tdCell.hasClass('o')) {
               //  tdCell.removeClass('x') && tdCell.removeClass('x')
                   
               //  }

            } else { //if player 1 doesn't match any wins, it's play 2 turn

              player = 2;
            }

            } else {

              tdCell.addClass('o'); //add class o to cell that player 2 clicked
                tdCell.text('o');
                if ( possibleWins('o')) { // if player 1 matches possible win send alert
                    alert('You Win!');
                  
                  
                  } else {
                  player = 1; //otherwise it's player 1 turn
        }
      }
    }
  });

      //if else statements with winning

   		function possibleWins(symbol ){
	
   		
   	    if ($('.c1').hasClass(symbol ) && $('.c4').hasClass(symbol ) && $('.c7').hasClass(symbol )) {
          return true;
        } else if ($('.c2').hasClass(symbol ) && $('.c5').hasClass(symbol )&&  $('.c8').hasClass(symbol )) {
          return true;
        } else if ($('.c3').hasClass(symbol ) &&   $('.c6').hasClass(symbol ) &&  $('.c9').hasClass(symbol )) {
          return true;
        } else if ($('.c3').hasClass(symbol ) &&  $('.c5').hasClass(symbol ) &&  $('.c7').hasClass(symbol )) {
          return true;
        }else if ($('.c1').hasClass(symbol ) &&  $('.c5').hasClass(symbol ) &&  $('.c9').hasClass(symbol )) {
          return true;
        } else if ( $('.c1').hasClass(symbol ) &&  $('.c2').hasClass(symbol ) &&  $('.c3').hasClass(symbol )) {
          return true;
        }else if ($('.c4').hasClass(symbol ) &&   $('.c5').hasClass(symbol ) &&  $('.c6').hasClass(symbol )) {
          return true;


        // } else if ($('.c7').hasClass(symbol ) &&  $('.c8').hasClass(symbol ) &&  $('.c9').hasClass(symbol ) ) {
        
        } else{
          return false;
          alert('game over');
        }

  }

  function gameOver(symbol){
   if ($('.c1').hasClass(symbol ) && $('.c2').hasClass(symbol ) && $('.c3').hasClass(symbol ) &&  $('.c4').hasClass(symbol ) && $('.c5').hasClass(symbol )&&  $('.c6').hasClass(symbol ) && $('.c7').hasClass(symbol ) &&   $('.c8').hasClass(symbol ) &&  $('.c9').hasClass(symbol)) {
    alert('game over');
    
   }
 }

    



        });



