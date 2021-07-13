let currentTime = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
};

const timer = (() => {
  const STATUS_INIT = 'INIT';
  const STATUS_START = 'START';
  const STATUS_STOP = 'STOP';

  let currentStatus = STATUS_INIT;
  let timerId;

  const timeFlies = () => {
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
  };
})();
