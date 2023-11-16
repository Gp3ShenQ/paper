AOS.init()

function fir(){
  let top = $(window).scrollTop()
  if(top == 0){
    $(".scroll-down").show()
  }else if(top >= 10 , top <= 99){
    $(".scroll-down").hide()
    $(".mountain:nth-child(1)").css("top","100%")
  }else if(top >= 100,top <= 399){
    $(".mountain:nth-child(1)").css("top","0px")
    $(".mountain:nth-child(2)").css("top","100%")
  }else if(top >= 400 ,top <= 799) {
    $(".mountain:nth-child(2)").css("top","0px")
    $(".mountain:nth-child(3)").css("top","100%")
  }else if(top >= 800 ,top <= 1199) {
    $(".mountain:nth-child(3)").css("top","0px")
    $(".mountain:nth-child(4)").css("top","100%")
  }else if(top >= 1200 ,top <= 1599) {
    $(".mountain:nth-child(4)").css("top","0px")
    $(".mountain:nth-child(5)").css("top","100%")
  }else if(top >= 1600 ,top <= 1999) {
    $(".mountain:nth-child(5)").css("top","0px")
    $(".mountain:nth-child(6)").css("top","100%")
  }else if(top >= 2000 ,top <= 2399) {
    $(".mountain:nth-child(6)").css("top","-5px")
    $(".mountain:nth-child(7)").css("top","100%")
  }else if(top >= 2400 ,top <= 2799) {
    $(".mountain:nth-child(7)").css("top","-5px")
    $(".mountain:nth-child(8)").css("top","100%")
  }else if(top >= 2800 ,top <= 3199) {
    $(".mountain:nth-child(8)").css("top","-5px")
    $(".mountain:nth-child(9)").css("top","100%")
  }else if(top >= 3200 ,top <= 3599) {
    $(".mountain:nth-child(9)").css("top","-5px")
    $(".mountain:nth-child(10)").css("top","100%")
  }else if(top >= 3600 , top <= 4000 ) {
    $(".mountain:nth-child(10)").css("top","-20px")
  }else if(top >= 5700 , top <= 6299 ) {
    $(".three-house:nth-child(1)").css("top","0")
    $(".three-house:nth-child(2)").css("top","100%")
  }else if(top >= 6300 , top <= 6899 ) {
    $(".three-house:nth-child(2)").css("top","0")
    $(".three-house:nth-child(3)").css("top","100%")
  }else if(top >= 6900 , top <= 7399 ) {
    $(".three-house:nth-child(3)").css("top","0")
    $(".three-house:nth-child(4)").css("top","100%")
  }else if(top >= 7500 , top <= 7999 ) {
    $(".three-house:nth-child(4)").css("top","0")
  }
}

function ind(){
  $(window).on("scroll",function(){
    fir()
  })
}
fir()
ind()

$(".top-circle").on("click",function(){
  $(".next-page").addClass("disblock")
  $(".top-circle").addClass("disnone")
  $(".bottom-area").addClass("changecolor")
  // }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});