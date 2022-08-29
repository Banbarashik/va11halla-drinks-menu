import { importAll } from './helper';

// IMPORTING ASSETS
const _drinksImgs = {};
const _drinksImgsContext = require.context('./../assets/images/drinks', false);
importAll(_drinksImgs, _drinksImgsContext);

const _staffImgs = {};
const _staffImgsContext = require.context('./../assets/images/staff', false);
importAll(_staffImgs, _staffImgsContext);

///////////////////////////////////////////////////////////

export const setCurrentCategory = (category = '') => {
  state.menu.currentCategory = category;
  state.menu.currentSubcategory = '';
};

export const setCurrentSubcategory = (subcategory = '') =>
  (state.menu.currentSubcategory = subcategory);

export const state = {
  menu: {
    currentCategory: '',
    currentSubcategory: '',
    categories: {
      name: ['B', 'C', 'F', 'G', 'M', 'P', 'S', 'Z'],
      flavor: ['sweet', 'bitter', 'sour', 'spicy', 'bubbly'],
      type: ['girly', 'manly', 'classic', 'classy', 'promo'],
    },
    drinks: [
      {
        name: 'Bad Touch',
        price: 250,
        ingredients: [
          { name: 'Bronson Extract', quantity: 2 },
          { name: 'Powdered Delta', quantity: 2 },
          { name: 'Flanergide', quantity: 2 },
          { name: 'Karmotrine', quantity: 4 },
        ],
        options: {
          aged: false,
          onTheRocks: true,
          mixed: true,
          blended: false,
        },
        description: "We're nothing but mammals after all.",
        categories: ['sour', 'classy', 'vintage'],
        image: _drinksImgs.badTouch,
      },
      {
        name: 'Beer',
        price: 200,
        ingredients: [
          { name: 'Adelhyde', quantity: 1 },
          { name: 'Bronson Extract', quantity: 2 },
          { name: 'Powdered Delta', quantity: 1 },
          { name: 'Flanergide', quantity: 2 },
          { name: 'Karmotrine', quantity: 4 },
        ],
        options: {
          aged: false,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          "Traditionally brewed beer has become a luxury, but this one's pretty close to the real deal...",
        categories: ['bubbly', 'classic', 'vintage'],
        image: _drinksImgs.beer,
      },
      {
        name: 'Bleeding Jane',
        price: 200,
        ingredients: [
          { name: 'Bronson Extract', quantity: 1 },
          { name: 'Powdered Delta', quantity: 3 },
          { name: 'Flanergide', quantity: 3 },
        ],
        options: {
          aged: false,
          onTheRocks: false,
          mixed: false,
          blended: true,
        },
        description:
          "Say the name of this drink three times in front of a mirror and you'll look like a fool.",
        categories: ['spicy', 'classic', 'sobering'],
        image: _drinksImgs.bleedingJane,
      },
      {
        name: 'Bloom Light',
        price: 230,
        ingredients: [
          { name: 'Adelhyde', quantity: 4 },
          { name: 'Powdered Delta', quantity: 1 },
          { name: 'Flanergide', quantity: 2 },
          { name: 'Karmotrine', quantity: 3 },
        ],
        options: {
          aged: true,
          onTheRocks: true,
          mixed: true,
          blended: false,
        },
        description: "It's so unnecessarily brown...",
        categories: ['spicy', 'promo', 'bland'],
        image: _drinksImgs.bloomLight,
      },
      {
        name: 'Blue Fairy',
        price: 170,
        ingredients: [
          { name: 'Adelhyde', quantity: 4 },
          { name: 'Flanergide', quantity: 1 },
          { name: 'Karmotrine', quantity: null },
        ],
        options: {
          aged: true,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          'One of these will make all your teeth turn blue. Hope you brushed them well.',
        categories: ['sweet', 'girly', 'soft'],
        image: _drinksImgs.blueFairy,
      },
      {
        name: 'Brandtini',
        price: 250,
        ingredients: [
          { name: 'Adelhyde', quantity: 6 },
          { name: 'Powdered Delta', quantity: 3 },
          { name: 'Karmotrine', quantity: 1 },
        ],
        options: {
          aged: true,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          "8 out of 10 smug assholes would recommend it but they're too busy being smug assholes.",
        categories: ['sweet', 'classy', 'happy'],
        image: _drinksImgs.brandtini,
      },
      {
        name: 'Cobalt Velvet',
        price: 280,
        ingredients: [
          { name: 'Adelhyde', quantity: 2 },
          { name: 'Flanergide', quantity: 3 },
          { name: 'Karmotrine', quantity: 5 },
        ],
        options: {
          aged: false,
          onTheRocks: true,
          mixed: true,
          blended: false,
        },
        description:
          "It's like champaigne served on a cup that had a bit of cola left.",
        categories: ['bubbly', 'classy', 'burning'],
        image: _drinksImgs.cobaltVelvet,
      },
      {
        name: 'Crevice Spike',
        price: 140,
        ingredients: [
          { name: 'Powdered Delta', quantity: 2 },
          { name: 'Flanergide', quantity: 4 },
          { name: 'Karmotrine', quantity: null },
        ],
        options: {
          aged: false,
          onTheRocks: false,
          mixed: false,
          blended: true,
        },
        description:
          'It will knock the drunkenness out of you or knock you out cold.',
        categories: ['sour', 'manly', 'sobering'],
        image: _drinksImgs.creviceSpike,
      },
      {
        name: 'Fluffy Dream',
        price: 170,
        ingredients: [
          { name: 'Adelhyde', quantity: 3 },
          { name: 'Powdered Delta', quantity: 3 },
          { name: 'Karmotrine', quantity: null },
        ],
        options: {
          aged: true,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          "A couple of these will make your tongue feel velvet-y. More of them and you'll be sleeping soundly.",
        categories: ['sour', 'girly', 'soft'],
        image: _drinksImgs.fluffyDream,
      },
      {
        name: 'Fringe Weaver',
        price: 260,
        ingredients: [
          { name: 'Adelhyde', quantity: 1 },
          { name: 'Karmotrine', quantity: 9 },
        ],
        options: {
          aged: true,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          "It's like drinking ethylic alcohol with a spoonful of sugar.",
        categories: ['bubbly', 'classy', 'strong'],
        image: _drinksImgs.fringeWeaver,
      },
      {
        name: 'Grizzly Temple',
        price: 220,
        ingredients: [
          { name: 'Adelhyde', quantity: 3 },
          { name: 'Bronson Extract', quantity: 3 },
          { name: 'Powdered Delta', quantity: 3 },
          { name: 'Karmotrine', quantity: 1 },
        ],
        options: {
          aged: false,
          onTheRocks: false,
          mixed: false,
          blended: true,
        },
        description:
          "This one's kinda unbearable. It's mostly for fans of the movie it was used on.",
        categories: ['bitter', 'promo', 'bland'],
        image: _drinksImgs.grizzlyTemple,
      },
      {
        name: 'Gut Punch',
        price: 80,
        ingredients: [
          { name: 'Bronson Extract', quantity: 5 },
          { name: 'Flanergide', quantity: 3 },
          { name: 'Karmotrine', quantity: null },
        ],
        options: {
          aged: true,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          'It\'s supposed to mean "a punch made of innards", but the name actually described what you feel while drinking it.',
        categories: ['bitter', 'manly', 'strong'],
        image: _drinksImgs.gutPunch,
      },
      {
        name: 'Marsblast',
        price: 170,
        ingredients: [
          { name: 'Bronson Extract', quantity: 6 },
          { name: 'Powdered Delta', quantity: 1 },
          { name: 'Flanergide', quantity: 4 },
          { name: 'Karmotrine', quantity: 2 },
        ],
        options: {
          aged: false,
          onTheRocks: false,
          mixed: false,
          blended: true,
        },
        description:
          'One of these is enough to leave your face red like the actual planet.',
        categories: ['spicy', 'manly', 'strong'],
        image: _drinksImgs.marsblast,
      },
      {
        name: 'Mercuryblast',
        price: 250,
        ingredients: [
          { name: 'Adelhyde', quantity: 1 },
          { name: 'Bronson Extract', quantity: 1 },
          { name: 'Powdered Delta', quantity: 3 },
          { name: 'Flanergide', quantity: 3 },
          { name: 'Karmotrine', quantity: 2 },
        ],
        options: {
          aged: false,
          onTheRocks: true,
          mixed: false,
          blended: true,
        },
        description: 'No thermometer was harmed in the creation of this drink.',
        categories: ['sour', 'classy', 'burning'],
        image: _drinksImgs.mercuryblast,
      },
      {
        name: 'Moonblast',
        price: 180,
        ingredients: [
          { name: 'Adelhyde', quantity: 6 },
          { name: 'Powdered Delta', quantity: 1 },
          { name: 'Flanergide', quantity: 1 },
          { name: 'Karmotrine', quantity: 2 },
        ],
        options: {
          aged: false,
          onTheRocks: true,
          mixed: false,
          blended: true,
        },
        description:
          'No relation to the Hadron cannon you can see on the moon for one week every month.',
        categories: ['sweet', 'girly', 'happy'],
        image: _drinksImgs.moonblast,
      },
      {
        name: 'Piano Man',
        price: 320,
        ingredients: [
          { name: 'Adelhyde', quantity: 2 },
          { name: 'Bronson Extract', quantity: 3 },
          { name: 'Powdered Delta', quantity: 5 },
          { name: 'Flanergide', quantity: 5 },
          { name: 'Karmotrine', quantity: 3 },
        ],
        options: {
          aged: false,
          onTheRocks: true,
          mixed: true,
          blended: false,
        },
        description:
          'This drink does not represent the opinions of the Bar Pianists Union or its associates.',
        categories: ['sour', 'promo', 'strong'],
        image: _drinksImgs.pianoMan,
      },
      {
        name: 'Piano Woman',
        price: 320,
        ingredients: [
          { name: 'Adelhyde', quantity: 5 },
          { name: 'Bronson Extract', quantity: 5 },
          { name: 'Powdered Delta', quantity: 2 },
          { name: 'Flanergide', quantity: 3 },
          { name: 'Karmotrine', quantity: 3 },
        ],
        options: {
          aged: true,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          'It was originally called Pretty Woman, but too many people complained there should be a Piano Woman if there was a Piano Man.',
        categories: ['sweet', 'promo', 'happy'],
        image: _drinksImgs.pianoWoman,
      },
      {
        name: 'Pile Driver',
        price: 160,
        ingredients: [
          { name: 'Bronson Extract', quantity: 3 },
          { name: 'Flanergide', quantity: 3 },
          { name: 'Karmotrine', quantity: 4 },
        ],
        options: {
          aged: false,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          "It doesn't burn as hard on the tongue but you better not have a sore throat when drinking it...",
        categories: ['bitter', 'manly', 'burning'],
        image: _drinksImgs.pileDriver,
      },
      {
        name: 'Sparkle Star',
        price: 150,
        ingredients: [
          { name: 'Adelhyde', quantity: 2 },
          { name: 'Powdered Delta', quantity: 1 },
          { name: 'Karmotrine', quantity: null },
        ],
        options: {
          aged: true,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description:
          'They used to actually sparkle, but too many complaints about skin problem made them redesign the drink without sparkling.',
        categories: ['sweet', 'girly', 'happy'],
        image: _drinksImgs.sparkleStar,
      },
      {
        name: 'Sugar Rush',
        price: 150,
        ingredients: [
          { name: 'Adelhyde', quantity: 2 },
          { name: 'Powdered Delta', quantity: 1 },
          { name: 'Karmotrine', quantity: null },
        ],
        options: {
          aged: false,
          onTheRocks: false,
          mixed: true,
          blended: false,
        },
        description: 'Sweet, light and fruity. As girly as it gets.',
        categories: ['sweet', 'girly', 'happy'],
        image: _drinksImgs.sugarRush,
      },
      {
        name: 'Sunshine Cloud',
        price: 150,
        ingredients: [
          { name: 'Adelhyde', quantity: 2 },
          { name: 'Bronson Extract', quantity: 2 },
          { name: 'Karmotrine', quantity: null },
        ],
        options: {
          aged: false,
          onTheRocks: true,
          mixed: false,
          blended: true,
        },
        description:
          'Tastes like old chocolate milk with its good smell intact. Some say it tastes like caramel too...',
        categories: ['bitter', 'girly', 'soft'],
        image: _drinksImgs.sunshineCloud,
      },
      {
        name: 'Suplex',
        price: 160,
        ingredients: [
          { name: 'Bronson Extract', quantity: 4 },
          { name: 'Flanergide', quantity: 3 },
          { name: 'Karmotrine', quantity: 3 },
        ],
        options: {
          aged: false,
          onTheRocks: true,
          mixed: true,
          blended: false,
        },
        description:
          'A small twist on the Piledriver, putting more emphasis on the tongue burning and less on the throat burning.',
        categories: ['bitter', 'manly', 'burning'],
        image: _drinksImgs.suplex,
      },
      {
        name: 'Zen Star',
        price: 210,
        ingredients: [
          { name: 'Adelhyde', quantity: 4 },
          { name: 'Bronson Extract', quantity: 4 },
          { name: 'Powdered Delta', quantity: 4 },
          { name: 'Flanergide', quantity: 4 },
          { name: 'Karmotrine', quantity: 4 },
        ],
        options: {
          aged: false,
          onTheRocks: true,
          mixed: true,
          blended: false,
        },
        description:
          "You'd think something so balanced would actually taste nice... you'd be dead wrong.",
        categories: ['sour', 'promo', 'bland'],
        image: _drinksImgs.zenStar,
      },
    ],
  },
  staff: [
    {
      name: 'Dana Zane',
      position: 'Boss',
      description:
        'A former wrestler and current owner of the bar VA11-HALL-A. Dana, or Boss, has a prosthetic left arm and its origin is shrouded in rumours.',
      image: '',
    },
    {
      name: 'Jill Stingray',
      position: 'Bartender',
      description:
        "Half-French. Avid smoker. Bisexual. Went to college. Drinks a lot of beer because of her implant that allows her to drink lots of beer and not get drunk. Has a cat named Fore, whom she talks to every time she's at home.",
      image: '',
    },
    {
      name: 'Gillian',
      position: 'Bartender',
      description:
        'Bartender at VA-11 Hall-A with a mysterious past. He is known for occasionally disappearing for a few days, but is otherwise a dependable employee at VA-11 Hall-A.',
      image: '',
    },
  ],
};
