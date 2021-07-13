// LAP
const lap = (() => {
  const $lapBtn = document.querySelector(".lap-btn");
  const $stopwatchTime = document.querySelector(".stopwatch-time");
  const $stopwatchLaps = document.querySelector(".stopwatch-laps");
  let laps = [];

  const render = () => {
    $stopwatchLaps.innerHTML = laps.reduce((html, lap) => {
      html += `<li>${lap}</li>`;
      return html;
    }, "");
  };

  const setLaps = (newLaps) => {
    laps = newLaps;
    render();
  };

  $lapBtn.onclick = () => {
    setLaps([...laps, $stopwatchTime.textContent]);
  };

  return {
    toggleDisabled() {
      $lapBtn.disabled = !$lapBtn.disabled;
    },
  };
})();
