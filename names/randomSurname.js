const {vowels, consonants, randomCons, randomVowel} = require('../utils/vowels-consonants');
const {getRandomArrayItem, checkRepeats, dupes, } = require('../utils/helpers');
//array of common surname suffixes
const suffixArray = [
  'son', 'smith', 'man', 
  'kins', 'kin', 'ken', 'sen', 'berg', 'stein', 
  'ski', 'sky','to',
];

const vSuffix = [
  'ell', 'ett', 'er', 'ar', 'enko', 'owicz', 'owski',
  'ic', 'ik', 'ich', 'all', 'ard', 'uk', 'ak', 
  'ov', 'off', 'ev', 'in', 'ov', 'art', 'ott',
  'ies', 'inson', 'ez', 'es', 

];

const cSuffix = [
  'bank', 
  'bury', 'by', 
  'bourn', 'burn', 'bury', 'brow', 'beck', 'bert', 'born', 'bridge', 'brick', 'bourne', 'brier', 'brook', 'buck', 'burton', 
  'dale',
  'field', 'ford', 'forth', 'gate', 'ham', 'hard', 'hart', 'hill', 'horn', 'house', 'lake', 'land', 
  'ley', 'lin', 'low', 'mond', 'more', 'miller', 'ner', 'nett', 'rich', 'ricks', 'ridge', 'shaw', 'shire', 
   'stone', 'strom', 'thal', 'ton', 'wald', 'ward', 'well', 'wick', 'win', 'wood', 'worth', 'wright'

];

const eSuffix = [
  'bottom', 'cock', 'burg', 'burgh', 'borough', 'brough',  
]

const conjSuffix = [
  'y', 'ie','ing','s','e','an', 'en', 'in', 'ings',
];

//array of prefixes
const prefixArray = [
  'De', 'Der', 'El', 'Fitz', 'Kil', 'Le', 'Mac', 'Mc', "O'", 'Van', 'West', 'van der', 'von ', 'Over'
];

//array of stupid dipshit words for the funnies i hope
const dumbBetweeners = [
  'Soggy', 'Stink', 'Dingus', 'Poop', 'Boogers', 'Peepee', 'Butt', 'Anus', 'Butthole', 'Fart', 'Doodoo', 'Dingdong', 'Wiener', 'Flap', 'Juicy', 'Snot', 'Meat', 'Toot', 'Tit', 'Pee', 'Dingus', 'Dangus', 'Doodle', 
  'Boob', 'Bingle', 'Bongle',  'Hoot', 'Slap', 'Doofus', 'Gristle', 'Lard', 'Dump', 'Stick', 'Beef', 'Barf', 'Vomit', 'Puke', 'Pants', 'Undies', 'Socks',
  'Whizz', 'Rip', 'Winkle', 'Tinkle', 'Boodle', 'Noodle', 'Toodle', 'Whisker', 'Lazy', 'Barnacle', 'Plink', 'Plonk', 'Waddle', 'Hurple', 'Chortle', 'Nipple', 'Gnarly', 'Dude', 'Booty', 
];

const sillyends = [
  'muncher', 'eater', 'whizzer', 'pisser', 'farter', 'flipper', 'flaps', 'meat', 'pocket', 'flopper', 'licker', 
]

const swears = [
  'Fuck', 'Shit', 'Bitch', 'Bastard', 'Cunt', 'Ass', 'Asshole', '
];

//random surname class constructor
