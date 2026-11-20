<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Countdown to the 2027 revamp | Nidhog Studios</title>
<meta name="description" content="A countdown to 25 January 2027, when the Nidhog Studios 2027 revamp arrives.">
<meta property="og:title" content="Countdown to the 2027 revamp | Nidhog Studios">
<meta property="og:description" content="A countdown to 25 January 2027, when the Nidhog Studios 2027 revamp arrives.">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='%23C4262B'/%3E%3Ccircle cx='16' cy='16' r='6' fill='%23F5B82E'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600;800&family=Hanken+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --ice: #E9F3FA;
  --night: #0E1A2B;
  --helmet: #C4262B;
  --glow: #F5B82E;
  --mist: #56697F;
  --line: #C5D6E4;
  color-scheme: light;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  background: var(--ice);
  color: var(--night);
  font: 400 1.125rem/1.7 "Hanken Grotesk", system-ui, sans-serif;
}
a { color: inherit; }
.wrap { max-width: 72rem; margin: 0 auto; padding-inline: clamp(1.25rem, 5vw, 3.5rem); }
.hero {
  background: var(--night);
  color: var(--ice);
  border-bottom: 6px solid var(--glow);
  padding-bottom: clamp(3.5rem, 8vw, 6rem);
}
.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem 1.75rem;
  padding-block: 1.5rem;
  font-size: 1rem;
}
.top a { color: var(--ice); text-decoration: none; }
.top a:hover { text-decoration: underline; text-underline-offset: 0.25em; }
.hero-grid {
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
  padding-top: clamp(1rem, 4vw, 3rem);
}
@media (min-width: 800px) {
  .hero-grid { grid-template-columns: minmax(0, 22rem) 1fr; }
}
.logo {
  display: block;
  width: 100%;
  max-width: 22rem;
  height: auto;
  border-radius: 1.5rem;
}
h1 {
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(2.8rem, 9vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 0 0 1.25rem;
  overflow-wrap: anywhere;
}
.lede {
  margin: 0 0 2.25rem;
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  color: var(--line);
}
.btn {
  display: inline-block;
  background: var(--glow);
  color: var(--night);
  font-weight: 600;
  padding: 0.9rem 1.5rem;
  text-decoration: none;
}
.btn:hover { text-decoration: underline; text-underline-offset: 0.25em; }
.split {
  display: grid;
  gap: clamp(2rem, 6vw, 5rem);
  padding-block: clamp(3rem, 7vw, 5.5rem);
}
@media (min-width: 800px) {
  .split { grid-template-columns: minmax(0, 16rem) 1fr; }
  .split-head { position: sticky; top: 2rem; align-self: start; }
}
h2 {
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.2;
  margin: 0 0 0.75rem;
}
.split div > p { margin: 0 0 1rem; max-width: 62ch; }
.split div > p:last-child { margin-bottom: 0; }
.split-head p { color: var(--mist); }
.game {
  padding-block: 2rem;
  border-top: 1px solid var(--line);
}
.game:first-child { border-top: 0; padding-top: 0; }
.game h3 {
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(1.35rem, 2.6vw, 1.75rem);
  line-height: 1.2;
  margin: 0 0 0.6rem;
}
.game h3 a {
  color: var(--helmet);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
}
.game h3 a:hover { text-decoration-color: var(--night); }
.game p { margin: 0; max-width: 62ch; }
.text-link {
  color: var(--helmet);
  font-weight: 600;
  text-underline-offset: 0.25em;
}
footer {
  background: var(--night);
  color: var(--ice);
  border-top: 6px solid var(--glow);
  padding-block: 2.5rem;
}
footer nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.75rem;
  margin-bottom: 1rem;
}
footer a { color: var(--ice); text-decoration: none; }
footer a:hover { text-decoration: underline; }
footer p { margin: 0; font-size: 0.95rem; color: var(--line); }
:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
  border-radius: 2px;
}
.btn:focus-visible { outline-color: var(--glow); }
@media (prefers-reduced-motion: no-preference) {
  .logo { animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
  html { scroll-behavior: smooth; }
}
@keyframes rise {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: none; }
}
.game { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 1rem 2rem; }
.game-body { flex: 1 1 26rem; min-width: 0; }
.open { flex: none; margin-top: 0.4rem; border: 2px solid var(--night); color: var(--night); font-weight: 600; padding: 0.5rem 1.1rem; text-decoration: none; }
.open:hover { background: var(--night); color: var(--ice); }

</style>
<style>
.skip {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 10;
  background: var(--glow);
  color: var(--night);
  padding: 0.6rem 1rem;
  font-weight: 600;
  text-decoration: none;
}
.skip:focus { top: 1rem; }
[hidden] { display: none !important; }
.hero-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 1.5rem clamp(1.25rem, 5vw, 3.5rem) 0;
}
.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem 1.75rem;
  padding-block: 0.5rem 1.5rem;
  font-size: 1rem;
}
.top a { color: var(--ice); text-decoration: none; }
.top a:hover { text-decoration: underline; text-underline-offset: 0.25em; }
h1 {
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(2rem, 5.5vw, 3.75rem);
  line-height: 1;
  letter-spacing: -0.02em;
  margin: clamp(1.5rem, 4vw, 3rem) 0 1rem;
}
.lede {
  margin: 0 0 clamp(2.5rem, 6vw, 4rem);
  font-size: clamp(1.2rem, 2.4vw, 1.5rem);
  color: var(--line);
}
.clock {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem 1.5rem;
}
@media (min-width: 640px) {
  .clock { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
.unit {
  border-top: 2px solid var(--glow);
  padding-top: 1rem;
}
.num {
  display: block;
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(2.5rem, 7vw, 5rem);
  line-height: 1;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}
.label {
  display: block;
  margin-top: 0.6rem;
  color: var(--line);
}
.note {
  margin: 1.75rem 0 0;
  font-size: 0.95rem;
  color: var(--line);
}
.done {
  margin: 0;
  font-family: "Unbounded", system-ui, sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.2;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.5rem;
  padding-bottom: clamp(3rem, 7vw, 5rem);
}
.btn {
  display: inline-block;
  background: var(--glow);
  color: var(--night);
  font-weight: 600;
  padding: 0.9rem 1.5rem;
  text-decoration: none;
}
.btn:hover { text-decoration: underline; text-underline-offset: 0.25em; }
.btn:focus-visible { outline-color: var(--glow); }
.btn-outline {
  display: inline-block;
  border: 2px solid var(--ice);
  color: var(--ice);
  font-weight: 600;
  padding: 0.9rem 1.5rem;
  text-decoration: none;
}
.btn-outline:hover { background: var(--ice); color: var(--night); }
.btn-outline:focus-visible { outline-color: var(--ice); }
.photo { margin: 2.5rem 0 0; max-width: 18rem; }
.photo img { display: block; width: 100%; height: auto; border-radius: 1.25rem; }
.photo-credit { margin: 0.75rem 0 0; font-size: 0.9rem; color: var(--line); }
</style>
</head>
<body>
<a class="skip" href="#countdown">Skip to the countdown</a>
<header class="hero">
<div class="hero-inner">
<nav class="top" aria-label="Main">
<a href="https://z3keeek1ng.github.io/Nidhog-Studios/">Nidhog Studios</a>
<a href="https://z3keeek1ng.github.io/2027-revamp/">Learn more</a>
<a href="https://www.youtube.com/watch?v=Bexq4JuUId4">Trailer</a>
</nav>
<h1>The big 2027 revamp</h1>
<p class="lede">Nidhog Studios is coming on 25 January 2027.</p>
<div id="countdown">
<ul class="clock" aria-label="Time until 25 January 2027">
<li class="unit"><span class="num" data-unit="days">--</span><span class="label">days</span></li>
<li class="unit"><span class="num" data-unit="hours">--</span><span class="label">hours</span></li>
<li class="unit"><span class="num" data-unit="minutes">--</span><span class="label">minutes</span></li>
<li class="unit"><span class="num" data-unit="seconds">--</span><span class="label">seconds</span></li>
</ul>
<p class="note">Counts down to midnight on 25 January 2027, in your local time.</p>
</div>
<p class="done" id="done" hidden>The big 2027 revamp is out now.</p>
<figure class="photo">
<img src="data:image/jpeg;base64,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" alt="A red helmet mascot with glowing red eyes">
<figcaption class="photo-credit">This image/mascot belongs to © Sony Interactive Entertainment.</figcaption>
</figure>
<div class="actions">
<a class="btn" href="https://z3keeek1ng.github.io/2027-revamp/">Learn more</a>
<a class="btn-outline" href="https://www.youtube.com/watch?v=Bexq4JuUId4">Watch the trailer</a>
</div>
</div>
</header>
<footer>
<div class="wrap">
<nav aria-label="Footer">
<a href="https://z3keeek1ng.github.io/Nidhog-Studios/">Nidhog Studios</a>
<a href="https://z3keeek1ng.github.io/Z3keK-ng-Portfolio/">Portfolio</a>
<a href="https://www.youtube.com/@Z3keeeK1ngYT/shorts">YouTube</a>
</nav>
<p>Nidhog Studios is a TradeMark of <a href="https://z3keeek1ng.github.io/Z3keK-ng-Portfolio/">Z3keK!ng</a>©</p>
</div>
</footer>
<script>
(function () {
  var target = new Date(2027, 0, 25);
  var clock = document.getElementById('countdown');
  var done = document.getElementById('done');
  var nums = {
    days: document.querySelector('[data-unit="days"]'),
    hours: document.querySelector('[data-unit="hours"]'),
    minutes: document.querySelector('[data-unit="minutes"]'),
    seconds: document.querySelector('[data-unit="seconds"]')
  };
  var timer;
  function pad(n) { return String(n).padStart(2, '0'); }
  function tick() {
    var ms = target - new Date();
    if (ms <= 0) {
      clock.hidden = true;
      done.hidden = false;
      clearInterval(timer);
      return;
    }
    var total = Math.floor(ms / 1000);
    var days = Math.floor(total / 86400);
    total -= days * 86400;
    var hours = Math.floor(total / 3600);
    total -= hours * 3600;
    var minutes = Math.floor(total / 60);
    var seconds = total - minutes * 60;
    nums.days.textContent = days;
    nums.hours.textContent = pad(hours);
    nums.minutes.textContent = pad(minutes);
    nums.seconds.textContent = pad(seconds);
  }
  tick();
  timer = setInterval(tick, 1000);
})();
</script>
</body>
</html>
