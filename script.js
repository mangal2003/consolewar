if (window.innerWidth > 460) {
  document.getElementById("body").style.display = "none";
} else {
  var target = document.getElementById("target");
  document.getElementById("noAvailability").style.display = "none";

  function rules() {
    var rules = document.getElementById("rules");
    rules.style.zIndex = 16;
    rules.style.opacity = 1;
  }
  function hide() {
    var rules = document.getElementById("rules");
    rules.style.zIndex = -1;
    rules.style.opacity = 0;
  }
  function moveLeft() {
    if (target.offsetLeft - 30 < 30) {
      alert("Cannot go more to left");
      document.getElementById;
    } else {
      target.style.left = `${target.offsetLeft - 35}px`;
      
    }
    var time1 = setTimeout(() => {
      document.getElementById("golefticon").style.opacity = "1.0";
      document.getElementById("golefticon").style.color = "black";
      clearTimeout(time1);
    }, 200);
    document.getElementById("golefticon").style.opacity = "0.7";
    document.getElementById("golefticon").style.color = "gray";
  }
  function moveRight() {
    if (target.offsetLeft + 30 > window.innerWidth - 30) {
      alert("Cannot go more to right");
    } else {
      target.style.left = `${target.offsetLeft + 35}px`;
    
    }
    var time2 = setTimeout(() => {
      document.getElementById("gorighticon").style.opacity = "1.0";
      document.getElementById("gorighticon").style.color = "black";
      clearTimeout(time2);
    }, 200);
    document.getElementById("gorighticon").style.opacity = "0.7";
    document.getElementById("gorighticon").style.color = "gray";
  }

  var scored = 0;
  var yesOrNO = 0;
  function generateBullet() {
    var intro = document.getElementById("intro");
    intro.style.display = "none";
    var num = Math.floor(Math.random() * 6);
    var bullets = "";
    bullets = `<div class="bullet${num}"></div>`;
    document.querySelector("#bombs").innerHTML = bullets;

    var bullet = document.querySelector(`.bullet${num}`);
    var ypos = 0;
    var score = document.getElementById("score");
    var lives = document.getElementById("lives");

    var khatam = setInterval(() => {
      bullet.style.top = `${ypos}%`;
      ypos = ypos + 5;
      if (bullet.offsetTop + 10 > target.offsetTop) {
        bullet.style.opacity = "0";
        score.innerHTML = Number(score.innerHTML) + 2;
        if (
          target.offsetLeft - 100 < bullet.offsetLeft &&
          bullet.offsetLeft < target.offsetLeft - 15
          // target.offsetLeft - 40 < bullet.offsetLeft
        ) {
          lives.innerHTML = Number(lives.innerHTML) - 1;
        }
        {
          generateBullet();
          if (yesOrNO == 1) {
            scored = scored;
          } else {
            scored++;
          }
        }

        if (Number(lives.innerHTML) < 1) {
          document.getElementById("body").style.display = "none";
          var outro = document.getElementById("outro");
          outro.style.opacity = 1;
          yesOrNO = 1;
          var finalScore = document.getElementById("finalScore");
          finalScore.innerHTML = scored * 2;
        }
      }
    }, 45);
  }
}
