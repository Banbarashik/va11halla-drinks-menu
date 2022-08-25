import barEntranceClosedImg from './../assets/images/bar_entrance_closed.png';

import View from './View';

class homepageView extends View {
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
        class="homepage__bar-img"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1005 450.8"
      >
        <image
          width="1340"
          height="601"
          xlink:href="${barEntranceClosedImg}"
          transform="scale(0.75)"
        ></image>
        <polygon
          class="homepage__bar-img--entrance"
          points="443,383 442,113 547,105 544,361"
        />
      </svg>
    `;
  }
}

export default new homepageView();
