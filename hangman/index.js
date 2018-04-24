let word = "STRANGER"
let wordarr = word.split('')
let count = 0;
const gameover= () =>{
  alert('you are over')
  location.reload();
}

const checkwin= () =>{
  let wincount = 0;
  $('.answerletter').each(function( index ) {
  if($(this).css("display")==='flex'){
    wincount++
  }

});
  if(wincount===wordarr.length){
    alert("you are win")
    audio = new Audio();
    audio.src = "sound/victory.mp3"
    audio.play();
  }
  console.log(wincount)
}
document.addEventListener('DOMContentLoaded', () => {

  $('.hangmanimg').attr("src","image/gallows.jpg")

  $('.letter').on('click', event => {
    const { currentTarget } = event;
    $(currentTarget).removeClass('bg-light').addClass('bg-warning')
    //
    let tmp = currentTarget.innerHTML

      if(wordarr.includes(tmp)) {
        $(`.answerletter:contains(${tmp})`).css("display","flex");
      } else {
        count++
        switch (count) {
          case 6:
          $('.hangmanimg').attr("src","image/gallows+head+torso+2leg+2arm.jpg")
          gameover()
          break;
          case 5:
          $('.hangmanimg').attr("src","image/gallows+head+torso+2leg+arm.jpg")
          break;
          case 4:
          $('.hangmanimg').attr("src","image/gallows+head+torso+2leg.jpg")
          break;
          case 3:
          $('.hangmanimg').attr("src","image/gallows+head+torso+leg.jpg")
          break;
          case 2:
          $('.hangmanimg').attr("src","image/gallows+head+torso.jpg")
          break;
          case 1:
          $('.hangmanimg').attr("src","image/gallows+head.jpg")
          break;
      }
      }
      checkwin()

  })


  wordarr.forEach((letter) =>{
      $(`<div class="answerletterbox col-sm-1 border-bottom"><text class="answerletter"> ${letter}</text></div>`).appendTo('.answer')
  })

  $('.answerletterbox').css('border-bottom','3')

})
