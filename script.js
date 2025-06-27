

  const layers = document.querySelectorAll('.layer');
  const nextBtns = document.querySelectorAll('.next-btn');
  let current = 0;
  nextBtns.forEach(btn => btn.addEventListener('click', () => {
    if (current < layers.length - 1) {
      layers[current].classList.remove('active');
      current++;
      layers[current].classList.add('active');
    }
  }));

  const facts = [
    "You're the best thing that ever happened to your friends!",
    "You're sweeter than chocolates! 🍫",
    "You light up the room like fireworks 🎆",
    "You bring calm to chaos 🌈",
    "Being with you is the best feeling ✨"
  ];
  let f = 0;
  setInterval(() => {
    document.getElementById('fact').innerText = facts[f++ % facts.length];
  }, 3000);

  const compliments = [
    "You shine brighter than stars 🌟",
    "You're beautiful inside & out 💖",
    "Your smile makes my day 😊",
    "You have the most beautiful smile.",
    "I feel so happy whenever I'm with you",
    "You are kind and caring",
    "You're a masterpiece 🎨",
    "You're pure magic 🪄",
    "because Talking to you always makes my day better"
  ];
  let c = 0;
  setInterval(() => {
    document.getElementById('compliment').innerText = compliments[c++ % compliments.length];
  }, 2500);

  function handleConfession(choice) {
    const response = document.getElementById('confessionResponse');
    if (choice === 'yes') {
      response.innerText = 'Aww 🥹 Answer shared with Seependra. Thanks for being amazing! ❤️';
    } else {
      response.innerText = 'Haha 😂 Gotcha! It was just a prank!';
    }
  }

  const pickupData = [
    {
      q: "Do you believe in one-sided love?",
      yes: "Great, because I’ve been living proof — since the day I met you.",
      no: "Cool, then I guess it’s mutual now? 😌"
    },
    {
      q: "Is it weird to fall for your office bestie?",
      yes: "Damn... I guess I’m already weird then.",
      no: "Well, then let’s make it a little more special, shall we? 😉"
    },
    {
      q: "Do you think a simple 'Hi' can change someone's life?",
      yes: "That’s exactly what yours did to me.",
      no: "Then you clearly don’t remember how I smiled that first day."
    },
    {
      q: "Would you say yes if someone you trust secretly liked you for a long time?",
      yes: "Good... just asking for a “friend.”",
      no: "Oops. My friend’s heart just skipped a beat."
    },
    {
      q: "Can a crush turn into something more... if it’s honest and kind?",
      yes: "Then maybe, just maybe, there’s still hope for mine.",
      no: "It’s okay. I’ll keep being your silent biggest fan. 💌"
    }
  ];
  let pickupIndex = 0;
  function pickupResponse(choice) {
    const answer = document.getElementById('pickupA');
    answer.innerText = pickupData[pickupIndex][choice];
    setTimeout(() => {
      pickupIndex++;
      if (pickupIndex < pickupData.length) {
        document.getElementById('pickupQ').innerText = pickupData[pickupIndex].q;
        answer.innerText = '';
      } else {
        layers[current].classList.remove('active');
        current++;
        layers[current].classList.add('active');
      }
    }, 3000);
  }

  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let bubbles = [];
  for (let i = 0; i < 100; i++) {
    bubbles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5 + 2,
      dx: (Math.random() - 0.5) * 2,
      dy: Math.random() * -1 - 0.5,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let b of bubbles) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.fill();
      b.x += b.dx;
      b.y += b.dy;
      if (b.y < 0) b.y = canvas.height;
    }
    requestAnimationFrame(draw);
  }
  draw();

  const confetti = document.getElementById('birthdayConfetti');
  const ctx2 = confetti.getContext('2d');
  confetti.width = window.innerWidth;
  confetti.height = window.innerHeight;
  let confs = [];
  for (let i = 0; i < 80; i++) {
    confs.push({
      x: Math.random() * confetti.width,
      y: Math.random() * confetti.height,
      size: Math.random() * 8 + 2,
      speedY: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }
  function dropConfetti() {
    ctx2.clearRect(0, 0, confetti.width, confetti.height);
    confs.forEach(c => {
      c.y += c.speedY;
      if (c.y > confetti.height) c.y = 0;
      ctx2.beginPath();
      ctx2.arc(c.x, c.y, c.size, 0, Math.PI * 2);
      ctx2.fillStyle = c.color;
      ctx2.fill();
    });
    requestAnimationFrame(dropConfetti);
  }
  dropConfetti();

  // 🎂 Typewriter Effect for 2nd Slide
const birthdayLines = [
  "🎂✨ Happy Birthday to a precious soul",
  "who’s as rare as a shooting star 🌠",
  "and as warm as the morning sun ☀️!",
  "May this new year bring adventures 🚀",
  "that light up your spirit,",
  "moments that fill your heart with laughter 😂,",
  "and dreams that turn into beautiful realities.",
  "You deserve all the happiness 🎁 and peace the world has to offer.",
  "The world feels incomplete without you 🌎",
  "because your presence makes it even more beautiful.",
  "Keep shining ✨ because it’s your light that makes everything brighter!",
  "🎂✨ Happy Birthday, Anshika 🎂✨"
];
let lineIndex = 0;
let charIndex = 0;
let typingSpeed = 50;
let typingTarget = document.getElementById('typewriterText');

function typeLine() {
  if (lineIndex < birthdayLines.length) {
    if (charIndex < birthdayLines[lineIndex].length) {
      typingTarget.innerHTML += birthdayLines[lineIndex].charAt(charIndex++);
      setTimeout(typeLine, typingSpeed);
    } else {
      typingTarget.innerHTML += '<br>'; // New line after each full sentence
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 800);
    }
  }
}


// Trigger typewriter effect only when 2nd layer appears
const observer = new MutationObserver(() => {
  if (layers[1].classList.contains('active')) {
    typingTarget.innerHTML = ""; // Reset on re-entry
    lineIndex = 0; charIndex = 0;
    typeLine();
  }
});
observer.observe(layers[1], { attributes: true });


//audio--------------->
const crackerSound = document.getElementById('crackerAudio');

const observerCracker = new MutationObserver(() => {
  if (layers[1].classList.contains('active')) {
    crackerSound.currentTime = 0;
    crackerSound.volume = 0.6; // Optional: Adjust volume
    crackerSound.play().catch(err => {
      console.warn("Autoplay blocked. Wait for a user interaction.");
    });
    observerCracker.disconnect(); // ✅ Play only once
  }
});

observerCracker.observe(layers[1], { attributes: true });

// Optional volume control
crackerSound.volume = 0.4;

//stop-------->
// Stop sound on 3rd slide
const observerStop = new MutationObserver(() => {
  if (layers[2].classList.contains('active')) {
    crackerSound.pause();
    crackerSound.currentTime = 0; // Reset to start
  }
});
observerStop.observe(layers[2], { attributes: true });

//3rd slide audio setup ------------------->

const funFactMusic = document.getElementById('funFactMusic');

// Play music on Fun Fact slide (3rd slide, index 2)
const observerFunFactStart = new MutationObserver(() => {
  if (layers[2].classList.contains('active')) {
    funFactMusic.currentTime = 0;
    funFactMusic.volume = 0.6;
    funFactMusic.play().catch(err => {
      console.warn("Fun fact music autoplay blocked. Wait for interaction.");
    });
  }
});
observerFunFactStart.observe(layers[2], { attributes: true });

// Stop music on Compliment slide (4th slide, index 3)
const observerFunFactStop = new MutationObserver(() => {
  if (layers[3].classList.contains('active')) {
    funFactMusic.pause();
    funFactMusic.currentTime = 0;
  }
});
observerFunFactStop.observe(layers[3], { attributes: true });

//4th slide setup
const complimentSong = document.getElementById('complimentSong');

// 🎵 Start song on Compliment slide (Slide 4, index 3)
const observerComplimentStart = new MutationObserver(() => {
  if (layers[3].classList.contains('active')) {
    complimentSong.currentTime = 0;
    complimentSong.volume = 0.5; // Adjust volume if needed
    complimentSong.play().catch(err => {
      console.warn("Compliment song autoplay blocked:", err);
    });
  }
});
observerComplimentStart.observe(layers[3], { attributes: true });

// 🛑 Stop song on next slide (Slide 5, index 4)
const observerComplimentStop = new MutationObserver(() => {
  if (layers[4].classList.contains('active')) {
    complimentSong.pause();
    complimentSong.currentTime = 0;
  }
});
observerComplimentStop.observe(layers[4], { attributes: true });

//5th slide song setup------------>
const confessionSong = document.getElementById('confessionSong');

// 🔥 Play on Confession Prank Slide (Slide 5)
const observerConfessionStart = new MutationObserver(() => {
  if (layers[4].classList.contains('active')) {
    confessionSong.currentTime = 0;
    confessionSong.volume = 0.5;
    confessionSong.play().catch(err => {
      console.warn("Confession song autoplay blocked:", err);
    });
  }
});
observerConfessionStart.observe(layers[4], { attributes: true });

// 🛑 Stop on Pickup Line Slide (Slide 6)
const observerConfessionStop = new MutationObserver(() => {
  if (layers[5].classList.contains('active')) {
    confessionSong.pause();
    confessionSong.currentTime = 0;
  }
});
observerConfessionStop.observe(layers[5], { attributes: true });


//6th slide song setup _____>
const quizMusic = document.getElementById('quizMusic');

// 🎮 Play on Game Slide (Slide 6 – index 5)
const observerQuizStart = new MutationObserver(() => {
  if (layers[5].classList.contains('active')) {
    quizMusic.currentTime = 0;
    quizMusic.volume = 0.5;
    quizMusic.play().catch(err => {
      console.warn("Quiz music autoplay blocked:", err);
    });
  }
});
observerQuizStart.observe(layers[5], { attributes: true });

// 🛑 Stop on next slide (Slide 7 – index 6)
const observerQuizStop = new MutationObserver(() => {
  if (layers[6].classList.contains('active')) {
    quizMusic.pause();
    quizMusic.currentTime = 0;
  }
});
observerQuizStop.observe(layers[6], { attributes: true });

// 7th song setup
const finalSong = document.getElementById('finalSong');

// 🥹 Play on Final Slide (Slide 7, index 6)
const observerFinalStart = new MutationObserver(() => {
  if (layers[6].classList.contains('active')) {
    finalSong.currentTime = 0;
    finalSong.volume = 0.5;
    finalSong.play().catch(err => {
      console.warn("Final song autoplay blocked:", err);
    });
  }
});
observerFinalStart.observe(layers[6], { attributes: true });

// ⛔ Optional: Stop after 20 seconds (or when page closed)
setTimeout(() => {
  finalSong.pause();
}, 20000); // 20 seconds later


//1st slide at last-------------->
const introAudio = document.getElementById('introAudio');
let introPlayed = false;

// 👁️ Observe Landing Slide (layers[0])
const observerIntroStart = new MutationObserver(() => {
  if (layers[0].classList.contains('active') && !introPlayed) {
    // Wait for first user click to play
    document.body.addEventListener('click', () => {
      introAudio.currentTime = 0;
      introAudio.volume = 1;
      introAudio.play().catch(err => {
        console.warn("Intro audio blocked:", err);
      });
      introPlayed = true;

      // Optional: stop after 6 seconds (for 4–9 sec clip)
      setTimeout(() => {
        introAudio.pause();
      }, 6000);
    }, { once: true });
  }
});
observerIntroStart.observe(layers[0], { attributes: true });








// pickup line song --------------->
const pickupSong = document.getElementById('pickupSong');
let pickupPlayed = false;

// 🎯 When Slide 5 becomes active
const observerPickupStart = new MutationObserver(() => {
  if (layers[5].classList.contains('active') && !pickupPlayed) {
    // Wait for user click before playing (browser requirement)
    document.body.addEventListener('click', () => {
      if (layers[5].classList.contains('active') && !pickupPlayed) {
        pickupSong.currentTime = 0;
        pickupSong.volume = 0.6;
        pickupSong.play().catch(err => {
          console.warn("Pickup song autoplay blocked:", err);
        });
        pickupPlayed = true;
      }
    }, { once: true });
  }
});
observerPickupStart.observe(layers[5], { attributes: true });

// 🛑 When moving to next slide (Thank You layer)
const observerPickupStop = new MutationObserver(() => {
  if (layers[6].classList.contains('active')) {
    pickupSong.pause();
    pickupSong.currentTime = 0;
  }
});
observerPickupStop.observe(layers[6], { attributes: true });


