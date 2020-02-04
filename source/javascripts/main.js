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

  console.log("does this work?")
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      console.log("and this?", user)
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          console.log("I guess we are ready to go")
          document.location.href = "/admin/";
        });
      }
    });
  }
})()