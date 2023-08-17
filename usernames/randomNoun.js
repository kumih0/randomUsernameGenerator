//array of random nouns
const randomNounArray = [
    'aardvark',
    'albatross',
    'alligator',
    'alpaca',
    'asshole',
    'ass',
    'apple',
    'alley',
    'artist',
    'attic',
    'armor',
    'ambulance',
    'anus',
    'asphalt',
    'axolotl',
    'acorn',
    'apple',
    'banana',
    'button',
    'bucket',
    'bicycle',
    'butt',
    'butthole',
    'bastard',
    'bitch',
    'box',
    'boat',
    'bed',
    'barnacles',
    'burrito',
    'butter',
    'boogers',
    'batteries',
    'biscuit',
    'book',
    'baker',
    'chef',
    'chair',
    'cookies',
    'cactus',
    'crackers',
    'car',
    'cheese',
    'cannon',
    'carrot',
    'caterpillar',
    'chicken',
    'chimichanga',
    'cat',
    'cake',
    'clown',
    'crapper',
    'crab',
    'cereal',
    'cardboard',
    'dog',
    'dirt',
    'dolphin',
    'dinosaur',
    'douche',
    'dingdong',
    'doorknob',
    'dildo',
    'dandruff',
    'donut',
    'disappointment',
    'dishwasher',
    'donkey',
    'dumpling',
    'dust',
    'eagle',
    'eggplant',
    'editor',
    'elitist',
    'exam',
    'entrance',
    'elf',
    'ear',
    'edema',
    'earwax',
    'egg',
    'elephant',
    'eyeball',
    'elevator',
    'engineer',
    'employee',
    'employer',
    'fart',
    'fairy',
    'food',
    'flaps',
    'fries',
    'foot',
    'fork',
    'flute',
    'future',
    'furniture',
    'farmer',
    'fiddler',
    'fisher',
    'finger',
    'failure',
    'flipflop',
    'foliage',
    'fister',
    'frog',
    'giraffe',
    'goat',
    'gnads',
    'gonads',
    'garbage',
    'goblin',
    'guzzler',
    'glizzy',
    'god',
    'grass',
    'ghost',
    'goose',
    'guitar',
    'guy',
    'gal',
    'guest',
    'goon',
    'gopher',
    'geometry',
    'gremilin',
    'gargoyle',
    'hedgehog',
    'house',
    'hippo',
    'horse',
    'hamburger',
    'hotdog',
    'horn',
    'ink',
    'iguana',
    'icecube',
    'icecream',
    'igloo',
    'jam',
    'juice',
    'jester',
    'junk',
    'juicebox',
    'jukebox',
    'janitor',
    'juggler',
    'johnson',
    'jacket',
    'jellyfish',
    'jerk',
    'kettle',
    'kraken',
    'knife',
    'kneecap',
    'kilt',
    'kangaroo',
    'koala',
    'kumquat',
    'loser',
    'lemon',
    'librarian',
    'leprechaun',
    'lobster',
    'lion',
    'leopard',
    'lasagna',
    'luau',
    'leech',
    'lamp',
    'laser',
    'lightbulb',
    'lunch',
    'leg',
    'lizard',
    'llama',
    'mango',
    'manatee',
    'manhole',
    'myth',
    'mystery',
    'mistake',
    'moose',
    'mister',
    'misteress',
    'meatball',
    'meatloaf',
    'meathead',
    'master',
    'monster',
    'monkey',
    'muffin',
    'meat',
    'member',
    'mushroom',
    'milk',
    'milkshake',
    'mud',
    'muppet',
    'mustache',
    'nacho',
    'nipple',
    'nostril',
    'nugget',
    'neck',
    'nightmare',
    'narwhal',
    'ninja',
    'noodle',
    'nose',
    'nurse',
    'nun',
    'nymph',
    'nail',
    'nugget',
    'noodle',
    'napkin',
    'nap',
    'nature',
    'navy',
    'nazi',
    'night',
    'name',
    'nation',
    'navel',
    'nanobot',
    'nitrogen',
    'nut',
    'novel',
    'number',
    'nympho',
    'nymphomaniac',
    'nutcracker',
    'nutmeg',
    'needle',
    'necromancer',
    'necrophiliac',
    'octagon',
    'octopus',
    'opera',
    'opium',
    'ox',
    'omelette',
    'odor',
    'orifice',
    'organ',
    'orgasm',
    'obelisk',
    'orinthologist',
    'orphan',
    'other',
    'outlet',
    'oatmeal',
    'ocean',
    'orange',
    'olive',
    'onion',
    'oyster',
    'owl',
    'ostrich',
    'otter',
    'oxygen',
    'oil',
    'outside',
    'panda',
    'peepee',
    'pee',
    'pie',
    'penguin',
    'pickle',
    'pig',
    'pigeon',
    'pizza',
    'potato',
    'priest',
    'pope',
    'pimple',
    'plumber',
    'plunger',
    'pencil',
    'pancake',
    'peanut',
    'pen',
    'police',
    'pole',
    'princess',
    'prince',
    'peach',
    'pear',
    'pineapple',
    'paste',
    'pasta',
    'pistol',
    'preacher',
    'parrot',
    'prophet',
    'prostitute',
    'plastic',
    'pepper',
    'poltergeist',
    'puppy',
    'pajamas',
    'pumpkin',
    'popsicle',
    'pork',
    'porkchop',
    'popcorn',
    'poo',
    'poop',
    'pooper',
    'pecker',
    'peeper',
    'pocket',
    'puddle',
    'professor',
    'party',
    'pillow',
    'quail',
    'quiche',
    'quilt',
    'quagmire',
    'quadrant',
    'quinoa',
    'quaker',
    'quest',
    'quack',
    'quark',
    'questions',
    'railroad',
    'rock',
    'rat',
    'rodeo',
    'ravioli',
    'rhino',
    'robot',
    'riddle',
    'sasquatch',
    'salamander',
    'sloth',
    'snot',
    'student',
    'snake',
    'spider',
    'sponge',
    'sausage',
    'smegma',
    'snack',
    'sandwich',
    'saxophone',
    'slap',
    'sneeze',
    'snore',
    'soup',
    'shit',
    'screwdriver',
    'sock',
    'squirrel',
    'taco',
    'train',
    'toad',
    'toast',
    'toilet',
    'toothbrush',
    'toothpaste',
    'toenail',
    'teacher',
    'turd',
    'thumb',
    'television',
    'turtle',
    'tunnel',
    'twat',
    'twink',
    'twunk',
    'treat',
    'tank',
    'thought',
    'tide',
    'tickle',
    'touch',
    'trumpet',
    'talk',
    'trivia',
    'taste',
    'talent',
    'tribe',
    'titty',
    'titties',
    'trunk',
    'trance',
    'tatas',
    'unrest',
    'uncle',
    'underpants',
    'undies',
    'underwear',
    'ufo',
    'user',
    'username',
    'utility',
    'unicycle',
    'unibrow',
    'unicorn',
    'violin',
    'vest',
    'vessel',
    'vote',
    'voter',
    'vestige',
    'vigor',
    'vim',
    'vexed',
    'vibrator',
    'vegetables',
    'village',
    'vision',
    'vibrations',
    'vehicle',
    'vampire',
    'vulture',
    'walnut',
    'wanker',
    'whisper',
    'wombat',
    'weather',
    'worm',
    'wheelbarrow',
    'wiener',
    'walrus',
    'waffle',
    'wizard',
    'whizzer',
    'weasel',
    'whale',
    'worm',
    'xanax',
    'yodel',
    'yell',
    'yard',
    'yearbook',
    'yesterday',
    'yardstick',
    'yogurt',
    'zipper',
    'zucchini',
    'zoo',
    'zone',
    'zap',
    'zebra',
    'zombie'
];

module.exports = randomNounArray;