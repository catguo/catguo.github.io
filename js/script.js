$(document).ready(function () {
  $('nav a').on('click', function (event) {
    event.preventDefault()
    const hash = this.hash
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 400, function () {
      window.location.hash = hash
    })
  })

  const offset = 250
  const duration = 300

  $(window).scroll(function () {
   if ($(this).scrollTop() > offset) {
     $('.scroll-to-top').fadeIn(duration)
   } else {
     $('.scroll-to-top').fadeOut(duration)
   }
 })

 $('.scroll-to-top').on('click', function (event) {
   event.preventDefault()
   $('html, body').animate({scrollTop: 0}, duration)
   return false
 })
})
