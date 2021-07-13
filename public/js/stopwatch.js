let currentTime = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};

const timer = (() => {
  const $stopwatchTime = document.querySelector('.stopwatch-time');
  const $lapBtn = document.querySelector('.lap-btn');
  const $startResumeStopBtn = document.querySelector('.start-resume-stop-btn');
  const $resetBtn = document.querySelector('.reset-btn');

  let timerId;

  (() => {
    $lapBtn.setAttribute('disabled', '');
    $resetBtn.setAttribute('disabled', '');
  })();

  const timerAction = () => {
    const timeFlies = () => {
      const updateTime = () => {
        const format = (n) => (n < 10 ? '0' + n : n + '');
        const { hour, minute, second, millisecond } = currentTime;

        $stopwatchTime.textContent = `${format(hour)}:${format(
          minute
        )}:${format(second)}.${millisecond}`;
      };

      const ct = { ...currentTime };
      if (ct.millisecond === 90) {
        ct.second += 1;
        ct.millisecond = 0;
      }

      if (ct.second === 59) {
        ct.minute += 1;
        ct.second = 0;
      }

      if (ct.minute === 59) {
        ct.hour += 1;
        ct.minute = 0;
      }

      ct.millisecond += 10;

      currentTime = ct;
      updateTime();
    };

    const start = () => {
      timerId = setInterval(timeFlies, 100);
      $startResumeStopBtn.textContent = 'STOP';
      $lapBtn.removeAttribute('disabled');
      $resetBtn.removeAttribute('disabled');
    };

    const stop = () => {
      clearInterval(timerId);
      timerId = null;
      $startResumeStopBtn.textContent = 'RESUME';
      $lapBtn.removeAttribute('disabled');
      $resetBtn.removeAttribute('disabled');
    };

    const resume = () => {
      timerId = setInterval(timeFlies, 100);
      $startResumeStopBtn.textContent = 'STOP';
    };

    if ($startResumeStopBtn.textContent === 'START') start();
    else if ($startResumeStopBtn.textContent === 'STOP') stop();
    else if ($startResumeStopBtn.textContent === 'RESUME') resume();
  };

  $startResumeStopBtn.onclick = timerAction;
})();

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