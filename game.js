'use strict';

window.gameRSP = (() => {
  const FIGURE_ENG = ['rock', 'scissors', 'paper'];
  const FIGURE_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomInclusive = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  const getFigure = lang => {
    const figures = lang === 'EN' || lang === 'ENG' ?
      FIGURE_ENG : FIGURE_RUS;
    const figure = figures[getRandomInclusive(0, (figures.length - 1))];
    return figure;
  }

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ?
      FIGURE_ENG : FIGURE_RUS;

    const message = lang.map(item => item.concat('? ')).join('');

    const conditions = (a, b) => {
      if (a[0] === b && (language === 'EN' || language === 'ENG')) {
        return alert(
          `PS: ${a}
        You: ${a}
        A draw`
        )
      };
      if (a[0] === b) {
        return alert(
          `Компьютер: ${a}
        Вы: ${a}
        Ничья`
        )
      }
      const key = a[0] + ' ' + b;
      switch (key) {
        case 'к н':
          alert(
            `Компьютер: камень
          Вы: ножницы
          Компьютер выиграл`);
          result.computer += 1;
          break;
        case 'к б':
          alert(
            `Компьютер: камень
            Вы: бумага
            Вы выиграли`);
          result.player += 1;
          break;
        case 'н б':
          alert(
            `Компьютер: ножницы
            Вы: бумага
            Компьютер выиграл`);
          result.computer += 1;
          break;
        case 'н к':
          alert(
            `Компьютер: ножницы
            Вы: камень
            Вы выиграли`);
          result.player += 1;
          break;
        case 'б к':
          alert(
            `Компьютер: бумага
            Вы: камень
            Компьютер выиграл`);
          result.computer += 1;
          break;
        case 'б н':
          alert(
            `Компьютер: бумага
            Вы: ножницы
            Вы выиграли`);
          result.player += 1;
          break;

        case 'r s':
          alert(
            `PS: rock
            You: scissors
            PS won`);
          result.computer += 1;
          break;
        case 'r p':
          alert(
            `PS: rock
              You: paper
              You won`);
          result.player += 1;
          break;
        case 's p':
          alert(
            `PS: scissors
              You: paper
              PS won`);
          result.computer += 1;
          break;
        case 's r':
          alert(
            `PS: scissors
              You: rock
              You won`);
          result.player += 1;
          break;
        case 'p r':
          alert(
            `PS: paper
              You: rock
              PS won`);
          result.computer += 1;
          break;
        case 'p s':
          alert(
            `PS: paper
              You: scissors
              You won`);
          result.player += 1;
          break;
        default:
          break;
      }
    }

    return function start() {
      const playerQuest = prompt(message);
      if (playerQuest === null) {
        if ((language === 'EN' || language === 'ENG') && confirm('Are you sure?')) {
          return alert(
            `Game result:
        PS: ${result.computer}
        YOU: ${result.player}`
          )
        }
        if (confirm('Вы точно хотите выйти?')) {
          return alert(
            `Результат игры:
        Компьютер: ${result.computer}
        Вы: ${result.player}`
          )
        } else {
          return start();
        }
      }
      const computerVariant = getFigure(language);
      const playerVariant = playerQuest[0] || '';
      conditions(computerVariant, playerVariant.toLowerCase());
      start();
    };
  };

  return {
    game,
  };
})();

