import barEntranceClosedImg from './../assets/images/bar_entrance_closed.png';
import barEntranceOpenedImg from './../assets/images/bar_entrance_opened.png';
import View from './View';
import { MENU_TRANSITION_SEC } from './config';

class homepageView extends View {
  constructor() {
    super();
    this._addHandlerToggleStaff();
  }

  addHandlerRenderMenu(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const entrance = e.target.closest('.bar-entrance');

      if (!entrance) return;

      this.classList.add('fade-out');

      setTimeout(() => {
        this.classList.remove('fade-out', 'homepage');
        this.classList.add('fade-in', 'menu__page');
        handler();
        document.querySelector('.exit').disabled = true;
      }, (MENU_TRANSITION_SEC + 0.5) * 1000);

      setTimeout(() => {
        document.querySelector('.exit').disabled = false;
      }, (MENU_TRANSITION_SEC + 0.5) * 2000);
    });
  }

  _addHandlerToggleStaff() {
    this._parentElement.addEventListener('click', function (e) {
      const posterMin = e.target.closest('.bar-poster');
      const posterMax = e.target.closest('.staff');

      if (posterMin) document.querySelector('.staff').classList.add('opened');
      if (!posterMax && !posterMin)
        document.querySelector('.staff').classList.remove('opened');
    });
  }

  addHandlerToggleEntrance() {
    const entrance = document.querySelector('.bar-entrance');
    const streetView = document.querySelector('.bar-img');
    const toggleEntrance = function (e) {
      streetView.setAttribute(
        'xlink:href',
        e.type === 'mouseenter' ? barEntranceOpenedImg : barEntranceClosedImg
      );
    };

    entrance.addEventListener('mouseenter', toggleEntrance);
    entrance.addEventListener('mouseleave', toggleEntrance);
    entrance.addEventListener('click', () =>
      entrance.removeEventListener('mouseleave', toggleEntrance)
    );
  }

  _generateMarkup() {
    return `
      <p class="homepage__description">
        On a small road just seconds away from the main street, somewhere near
        the slums, you can find the Hall A of the BTC-certified bar coded VA-11.
        But that's a mouthful, so we just call it Valhalla — a small oasis in
        the middle of the concrete desert. A fountain of spirits waiting for
        tired souls.
      </p>
      <svg
        class="bar"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1005 450.8"
      >
        <image
        class="bar-img"
          width="1340"
          height="601"
          xlink:href="${barEntranceClosedImg}"
          transform="scale(0.75)"
        ></image>
        <polygon
          class="bar-entrance"
          points="443,383 442,113 547,105 544,361"
        />
        <polygon class="bar-poster" points="823.25 231.25 926.38 266.13 926.38 120.13 823.25 85.44 823.25 231.25"/>
      </svg>
      <div class="staff">
        <p class="staff__title">Staff</p>
          <ul class="staff__list">${this._generateMarkupStaff()}</ul>
      </div>
    `;
  }

  _generateMarkupStaff() {
    return this._data
      .map(member => {
        return `
        <li class="staff__member">
          <img
            class="staff__member-img"
            src="${member.image}"
            alt="${member.name}"
          />
          <div class="staff__member-info">
            <p class="staff__member-name">Name: ${member.name}</p>
            <p class="staff__member-position">Position: ${member.position}</p>
            <p class="staff__member-desc">${member.description}</p>
          </div>
        </li>
      `;
      })
      .join('');
  }
}

export default new homepageView();
