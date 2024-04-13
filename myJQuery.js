$(document).ready(function () {
  // $('h1,h2').click(function () {
  //     console.log(this.textContent);
  // })
  // $('.odd').click()

  $("h1").on({
    click: function () {
      console.log("You clicked on ", this.textContent);
    },

    mouseleave: function () {
      console.log("You left from", this.textContent);
    }
  });

  //   $('p').hide(350, function () {
  //     console.log('Hidden')
  //   })

  $("#show").on({
    click: function () {
      $("#secondP").show(120, function () {
        console.log("Shown");
      });
    }
  });
  $("#hide").click(function () {
    $("#secondP").hide(120, function () {
      console.log("hidden");
    });
  });

  $("#toggle").click(function () {
    $("#thirdP").toggle(130);
    // $("#thirdP").slideToggle(1000);
  });

//   $('#thirdP').animate({opacity: 0.2},2000)
//   $('#thirdP').animate({opacity: 1},2000)
//   $('#thirdP').animate({width: "200px"},2000)
  
//   $("#stop").click(function () {
//         $("#thirdP").stop();
//       });
    
//   $('#toggle').on('click',function(){
//     let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, itaque ratione ipsum expedita aspernatur esse minus corrupti eveniet ullam ea rem maxime facere distinctio commodi dolores aliquid? Soluta tempora a modi dolores autem possimus obcaecati. Labore deserunt amet quia.'
//     $('#thirdP').text(`${text}`)
//   })

// $('#inp').val("Hi! I am input")
// $('#area').val("Hi! I am textarea")

// $('#inp').empty()

$('#thirdP').css({
    'background-color': 'red',
    'color': 'white',
    'font-size': '20px'
});



















});
