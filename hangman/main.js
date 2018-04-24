//
// $('#button-2')
//
// $('li a')
//
// $('.blue.circle').length
//
// // 1. Set "href" attribute of all links on the page
// // to "http://www.nyan.cat".
//
// $('a').attr('href', 'http://nyan.cat')
//
// // When using a method that writes changes with jQuery collections ,
// // the change will apply to all nodes at once.
//
// // 2. Remove the "blue" class from all shapes and replace
// // them with the "red" class
//
// $('.blue').removeClass('blue').addClass('red')
// // jQuery (almost) always returns the jQuery list that was
// // operated on allowing us to chain jQuery method after jQuery method.
//
// // Set the "class" attribute of all anchors to "highlight" with attr method
// $('a').attr('class','highlight')
//
// // Replace all "circle" classes with the "diamond" class
// $('.circle').removeClass('circle').addClass('diamond')
//
// // Remove all shapes in the green & purple container.
// $('#green-container, #purple-container').children().remove()
//
// // Use the .children() method to search the children of all nodes
// // inside the jQuery collection. It can be supplied with a CSS
// // query to filter the searched children.
//
// $('#green-container > .shape, #purple-container > .shape').remove()
//
// // DEMO: HTML, children and parent
// // Get "html" of the reset button.
// $('#reset').html()
// // Try to get "html" of all links.
//
// // jQuery's map has the arguments for its callback reversed.
// // Meaning that the callback gets the index as the first argument
// // and the node as the second argument.
//
// $('a').map((index,node) => $(node).html())
//
// // Mappig over a jQuery list will return plain javascript nodes.
// // To use jQuery methods on those nodes, you must put them back.
// // in a jQuery list. Use the $ function to wrap any
// // plain node in a jQuery list thereby allowing to use
// // jQuery methods again.
//
// $('#reset').html('Launch Doggos!')
// // Change "reset" button to read "Launch doggos!"
//
// $('td').html('yass')
//
// $('td').parent()
//
// // Demo: Creating nodes, append & prepend
// // 1. Create a "small blue diamond" with $
//
// $(`
// <div class="small blue diamond shape"></div>
// `)
//
// // 2. Append it to all containers.
// $('.container').append(
//   $(`
//   <div class="small blue diamond shape"></div>
//   `)
// )
//
// // Prepend a new link, http://nyan.cat, to the link list
// $('ul').prepend(
//   $(`
//     <li>
//       <a href="http://nyan.cat"> Nyan Cat </a>
//     </li>
//     `)
// )
//
//
// // Practice
// $(`
//   <div> </div>
//   `).addClass('container')
//
// $('section').prepend(
//   $(`
//     <div> </div>
//     `).addClass('container')
// )
//
// $('.container').append(
//   $(`
//     <div> </div>
//     `).addClass('small black circle')
// )
//
// // Demo: Events with on
//
// // When writing JavaScript that manipulates the DOM, the
// // nodes that will be manipulated rely on them being in
// // DOM. However, node's in an HTML document are loaded
// // in the order in which they written.
// // If a selector comes before node that is not loaded,
// // nothing will be selected.
// // To prevent this, we use the 'DOmContentLoaded' Event
// // which will trigger only once the entire loaded and ready.
//
// document.addEventListener('DOMContentLoaded', () => {
//   // whe button 1 is clicked, remove all shapes
//   $('#button-1').on('click', event => {
//     $('.shape').remove()
//   })
//
//   $('#button-1').on('click', event => {
//     $('.shape').remove()
//   })
//
//
//   $('#button-2').on('click', event =>{
//     // $('#button-2').attr('disabled','true')
//     const { currentTarget } = event;
//     $(currentTarget).attr('disabled','true')
//   })
//
//   $('#button-3').on('click', event => {
//     $('#button-message').html('Button 3 was clicked!')
//   })
//
//
//
// })
//
// // When button 1 is clicked, remove all shapes
// $('#button-1').on('click', event => {
//   $('.shape').remove()
// })
//
//
// $('#button-2').on('click', event =>{
//   // $('#button-2').attr('disabled','true')
//   const { currentTarget } = event;
//
// })
//
// $('#button-3').on('click', event => {
//   console.log('button 3 is clicked')
// })


// LAB Start from here
  //
  // $('.shape').on('mouseenter', event => {
  //   const { currentTarget } = event
  //
  //   $(currentTarget).toggleClass('highlight')
  // })
  //
  // $('.shape.small').on('click', event => {
  //   const { currentTarget } = event
  //     $(currentTarget).addclass('hide')
  // })
  //
  // $('.shape.medium').on('click', event => {
  //   const { currentTarget } = event
  //     $(currentTarget).addClass("small")
  //     $(currentTarget).removeClass("medium")
  // })
  //
  // $('.shape.large').on('click', event => {
  //   const { currentTarget } = event
  //     $(currentTarget).addClass("meidum")
  //     $(currentTarget).removeClass("large")
  // })


// 2nd lab
  // $('tbody').prepend(
  //   $(`<tr> <td>0</td> <td>-</td> </tr>`)
  // )
  //
  // $('#form-1').submit(event => {
  //
  //   $('#form-message').html(`${$('#form-1 input').val()}`)
  // })
  //
  // $('#button-1').on('click',event => {
  //   $('#green-container').toggleClass('hide')
  // })
  //
  // $('#button-2').on('click',event => {
  //   $('#button-message').addClass('hide')
  // })
  // $('#button-3').on('click',event => {
  //   $('#button-message').removeClass('hide')
  // })
  //
  // $('#button-4').on('click',event => {
  //   $('#green-container').slideToggle()
  // })
  // 3rd Lab

  // $(document).on('keydown', event =>{
  //   if(event.key === 'g'){
  //     $('.grey').toggleClass('hide')
  //   }
  // })
  //
  // $(document).on('keydown', event =>{
  //   console.log(event.keyCode)
  //   if(event.keyCode === 32){
  //     console.log('doit')
  //     $('#green-container').append(
  //       $(`
  //         <div> </div>
  //         `).addClass('small blue circle')
  //       )
  //   }
  // })

 $('#form-1 input').on('keyup', event=> {

   let leng = $('#form-1 input').val().length
   if(14-leng === 0){
     $('#form-message').html(`This is Maximum char`)
   } else if((14-leng) < 0){
     $('#form-message').html(`Invalid`)
   } else {
     $('#form-message').html(`${14-leng} characters remaining`)
   }
 })

//  Lab 4


$('#form-1').on('submit', event=> {
   let color = $('#form-1 input').val()
   // console.log($('*').find(`.${color}`))
   if($('*').find(`.${color}`).length === 0 ){
     alert('Entered color is not a valid option')
   } else {
     $(`.${color}`).remove()
   }
   $('#form-1 input.text').val('')
})

// Lab 5

$('#form-1').on('submit', event=>{

  $('#form-1 input.text').val('')
})

$('#form-1 input').on('keyup', event=>{

   $('#form-message').html($(event.currentTarget).val())
})

$('#form-1 input').on('keyup', event=>{
    let tmp = $(event.currentTarget).val()
    let reverse = tmp.split("").reverse().join("")

   $('#form-message').html(reverse)
})


$('#orange-container').on('click', event =>{
  $('.red').remove()
})
