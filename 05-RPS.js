  let score = JSON.parse(localStorage.getItem('score')) ||
    {
      wins: 0,
      loss: 0,
      ties: 0
    };

    updatescoreelement();

    /*
    if(score === null){
      score = {
        wins: 0,
        loss: 0,
        ties: 0
      };
    } */

   function playgame(playermove){
      let computermove = pickcomputermove();
      let result = '';
      if(playermove == 'rock'){
        
        if(computermove === 'Rock'){
          result = 'Tie';
        }
        else if(computermove === 'Paper'){
          result = 'You loss';
        }
        else if(computermove === 'Scissors'){
          result = 'You win';
        }
      }
      else if(playermove == 'paper'){
        
        if(computermove === 'Rock'){
          result = 'You win';
        }
        else if(computermove === 'Paper'){
          result = 'Tie';
        }
        else if(computermove === 'Scissors'){
          result = 'You loss';
        }
      }
      else if(playermove == 'scissors'){
        
        if(computermove === 'Rock'){
          result = 'You loss';
        }
        else if(computermove === 'Paper'){
          result = 'You win';
        }
        else if(computermove === 'Scissors'){
          result = 'Tie';
        }
      } 
      if(result == 'You win'){
        score.wins += 1;
      } else if(result == 'You loss'){
        score.loss += 1;
      } else if(result == 'Tie'){
        score.ties += 1;
      }
      localStorage.setItem('score',JSON.stringify(score));

      updatescoreelement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `    You <img src="images/${playermove}-emoji.png" class="move-icon">
    <img src="images/${computermove}-emoji.png" class="move-icon">
    computer`; 
      
      // let objectstr = `wins: ${score.wins},loss: ${score.loss},tie: ${sore.tie}`
     //       alert(`You picked ${playermove}. computer picked ${computermove}. ${result} 
     // wins: ${score.wins},loss: ${score.loss},tie: ${score.ties}
     //       `); 
    } 

    function updatescoreelement(){
       document.querySelector('.js-score').innerHTML= `wins: ${score.wins},loss: ${score.loss},tie: ${score.ties}`;
    }

   function pickcomputermove(){
      const randomno = Math.random();
      var computermove = '';
      if(randomno >= 0 && randomno < 1/3){
        computermove = 'Rock';
      }
      else if(randomno >=1/3 && randomno < 2/3){
        computermove = 'Paper';
      }
      else if(randomno >= 2/3 && randomno < 1){
        computermove = 'Scissors'
      }
      return computermove;
   }