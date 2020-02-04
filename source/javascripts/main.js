(function () {
  var navButton = document.querySelector('.nav-button')
  var navigation = document.querySelector('.navigation')

  // Listen for click event
  navButton.addEventListener('click', function () {
    // open navigation and change toggle button
    navigation.classList.toggle('open')
    navButton.classList.toggle('active')
  }, false)

  document.querySelectorAll('.js-email').forEach(function (element) {
    element.innerHTML += '@zoukhh.de'
    element.href = 'mailto:' + element.innerHTML
  })
})()