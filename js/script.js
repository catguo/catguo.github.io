$(document).ready(function () {
  $('nav a').on('click', function (event) {
    event.preventDefault()
    const hash = this.hash
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 400, function () {
      window.location.hash = hash;
    })
  })
})
