const icons = ["fab fa-android",
"fab fa-css3-alt",
"fab fa-discord",
"fas fa-fighter-jet",
"fab fa-figma",
"fas fa-fist-raised",
"fab fa-github",
"fab fa-html5",
"fab fa-laravel",
"fab fa-php",
"fab fa-react",
"fas fa-space-shuttle",
"fab fa-spotify",
"fab fa-xbox",
"fab fa-youtube",
"fab fa-symfony",
"fab fa-snapchat-ghost",
"fab fa-java",
"fab fa-js-square",
"fab fa-instagram",
"fab fa-facebook-messenger",
"fas fa-basketball-ball",
"fas fa-dumbbell",
"fab fa-twitch"]

const nbLines = 15

window.onload = function(){
  let html = "<section>"
  for (let index = 0; index <= nbLines; index++) {
    html += "<div class=\"line\">"
    html += "<div>"
    for (let index = 0; index < icons.length; index++) {
      html += "<i class=\"" + icons[index] + "\"></i>"
    }
    html += "</div>"
    html += "<div>"
    for (let index = 0; index < icons.length; index++) {
      html += "<i class=\"" + icons[index] + "\"></i>"
    }
    html += "</div>"
    html += "</div>"
  }
  html += "</section>"
  document.getElementById('main').innerHTML = html
};