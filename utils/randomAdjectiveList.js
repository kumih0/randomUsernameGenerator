//moving adjective list for further use
const adjectives = [
    'amazing',
    'apathetic',
    'arrogant',
    'arbritrary',
    'american',
    'awesome',
    'angry',
    'african',
    'arboreal',
    'atrocious',
    'adequate',
    'auspicious',
    'asian',
    'abusive',
    'abhorrent',
    'abominable',
    'abrupt',
    'absurd',
    'abundant',
    'armenian',
    'ambiguous',
    'bashful',
    'bizarre',
    'belligerent',
    'benevolent',
    'burnt',
    'basic',
    'big',
    'bitter',
    'biodegradable',
    'biological',
    'biochemical',
    'barbaric',
    'boring',
    'bald',
    'brave',
    'bristling',
    'bawdy',
    'chunky',
    'crusty',
    'curdled',
    'chronic',
    'cynical',
    'caustic',
    'callous',
    'catastrophic',
    'charismatic',
    'crispy',
    'cranky',
    'creaky',
    'curious',
    'cunning',
    'casual',
    'cocky',
    'crazy',
    'daring',
    'dashing',
    'distasteful',
    'deranged',
    'diligent',
    'dangerous',
    'dapper',
    'dastardly',
    'dazzling',
    'deadly',
    'domestic',
    'decent',
    'defiant',
    'dead',
    'dying',
    'delicious',
    'delirious',
    'delightful',
    'depressed',
    'depraved',
    'deepfried',
    'despicable',
    'determined',
    'deified',
    'disgusting',
    'dumb',
    'devious',
    'eager',
    'easy',
    'ecstatic',
    'edgy',
    'elated',
    'ethical',
    'epic',
    'edible',
    'european',
    'eastern',
    'emotional',
    'enigmatic',
    'enlightened',
    'enraged',
    'envious',
    'enthusiastic',
    'exotic',
    'exuberant',
    'exhausted',
    'embarrassed',
    'embalmed',
    'eccentric',
    'english',
    'elegant',
    'evil',
    'euphoric',
    'fabulous',
    'flippant',
    'fried',
    'fancy',
    'foolish',
    'freaky',
    'formidable',
    'foul',
    'foreign',
    'fickle',
    'french',
    'full',
    'forgotten',
    'fearless',
    'fierce',
    'flamboyant',
    'flirtatious',
    'funky',
    'furious',
    'folksy',
    'gargantuan',
    'gastric',
    'giddy',
    'german',
    'garish',
    'geriatric',
    'grotesque',
    'gullible',
    'gruesome',
    'gothic',
    'greasy',
    'goopy',
    'grubby',
    'generous',
    'gigantic',
    'gloomy',
    'goofy',
    'graceful',
    'grumpy',
    'grouchy',
    'hairy',
    'hideous',
    'hip',
    'holy',
    'honest',
    'historic',
    'hispanic',
    'hasidic',
    'homely',
    'hasty',
    'hateful',
    'heinous',
    'hearty',
    'heroic',
    'hemophobic',
    'hindu',
    'hesitant',
    'handsome',
    'happy',
    'hilarious',
    'humble',
    'hungry',
    'injured',
    'ignorant',
    'illegal',
    'immoral',
    'impartial',
    'impressive',
    'incredible',
    'indecisive',
    'indecent',
    'insecure',
    'insidious',
    'indian',
    'illustrious',
    'incompetent',
    'inconsiderate',
    'inconsistent',
    'inconspicuous',
    'illiterate',
    'intriguing',
    'invisible',
    'inflatable',
    'itchy',
    'italian',
    'insane',
    'intelligent',
    'jovial',
    'jaded',
    'jaunty',
    'jazzy',
    'jittery',
    'jolly',
    'jubilant',
    'jumpy',
    'jovial',
    'jewish',
    'jilted',
    'judicious',
    'justified',
    'just',
    'japanese',
    'jaundiced',
    'juvenile',
    'killer',
    'klutzy',
    'kosher',
    'korean',
    'kind',
    'lazy',
    'large',
    'losing',
    'lively',
    'luscious',
    'languid',
    'lost',
    'last',
    'little',
    'local',
    'lambasted',
    'loathsome',
    'ludicrous',
    'lovely',
    'liberal',
    'lethal',
    'latin',
    'limp',
    'limber',
    'linguistic',
    'literate',
    'laminated',
    'lonely',
    'lethargic',
    'lucky',
    'lagging',
    'living',
    'magnanimous',
    'meek',
    'mellow',
    'meticulous',
    'mexican',
    'mild',
    'militant',
    'mischievous',
    'mysterious',
    'mystical',
    'monstrous',
    'monogamous',
    'monotonous',
    'morbid',
    'moronic',
    'misunderstood',
    'mistaken',
    'moldy',
    'melancholy',
    'magnificent',
    'maniacal',
    'mellow',
    'miserable',
    'naive',
    'narcissistic',
    'nasty',
    'natural',
    'narcoleptic',
    'nautical',
    'nefarious',
    'negligent',
    'neglected',
    'nervous',
    'neurotic',
    'noble',
    'nuclear',
    'nubile',
    'nocturnal',
    'nonsensical',
    'notorious',
    'nifty',
    'nihilistic',
    'native',
    'nice',
    'opulent',
    'oaky',
    'old',
    'omniscient',
    'ostentatious',
    'organic',
    'outgoing',
    'outside',
    'orderly',
    'obedient',
    'opinionated',
    'original',
    'obstinate',
    'obsessive',
    'obnoxious',
    'optimistic',
    'obscene',
    'obtuse',
    'obese',
    'oblong',
    'oblivious',
    'other',
    'oily',
    'oceanic',
    'overrated',
    'overzealous',
    'overwhelming',
    'oscillating',
    'overmedicated',
    'pitiful',
    'petulant',
    'pathetic',
    'pessimistic',
    'pasty',
    'paranoid',
    'parasitic',
    'patriotic',
    'pickled',
    'pernicious',
    'peculiar',
    'pavlovian',
    'pedantic',
    'pretentious',
    'prickly',
    'prolific',
    'preposterous',
    'prestigious',
    'practical',
    'pragmatic',
    'pitiful',
    'prehistoric',
    'pompous',
    'plump',
    'plastic',
    'plausible',
    'putrid',
    'pungent',
    'particular',
    'questionable',
    'quaint',
    'quiet',
    'queer',
    'radical',
    'random',
    'rancid',
    'risky',
    'rude',
    'ruthless',
    'ravenous',
    'ravishing',
    'restless',
    'rotten',
    'round',
    'rugged',
    'rowdy',
    'raging',
    'royal',
    'russian',
    'righteous',
    'rambunctious',
    'rampant',
    'retired',
    'rational',
    'reversible',
    'redundant',
    'refrigerated',
    'ripe',
    'recreational',
    'rebellious',
    'rustic',
    'sassy',
    'salty',
    'saucy',
    'simple',
    'still',
    'sober',
    'secret',
    'secular',
    'scary',
    'stupid',
    'sad',
    'sick',
    'serious',
    'seasoned',
    'stale',
    'stolen',
    'slippery',
    'sleepy',
    'sentient',
    'saint',
    'snotty',
    'sneaky',
    'strange',
    'slow',
    'stinky',
    'slimy',
    'savage',
    'thick',
    'thin',
    'totally',
    'thoughtful',
    'tight',
    'torn',
    'toasted',
    'tactful',
    'tentative',
    'tasty',
    'ticklish',
    'treacherous',
    'tremendous',
    'turbulent',
    'treasonous',
    'toxic',
    'tattooed',
    'tall',
    'timid',
    'tense',
    'terrifying',
    'tired',
    'tasmanian',
    'trader',
    'trivial',
    'uncouth',
    'unkempt',
    'under',
    'utilitarian',
    'untrustworthy',
    'ugly',
    'unruly',
    'useless',
    'useful',
    'upset',
    'undeniable',
    'uptight',
    'unpredictable',
    'unusual',
    'various',
    'vigorous',
    'vagrant',
    'vicious',
    'viscous',
    'violent',
    'worst',
    'wild',
    'wet',
    'wrong',
    'weird',
    'western',
    'wacky',
    'wasteful',
    'wobbly',
    'wanted',
    'yearly',
    'young',
    'youthful',
    'yummy',
    'yucky',
    'zany',
    'zealous'
];

const dookieAdj = [
    'alcoholic',
    'ballsy',
    'badass',
    'bitchy',
    'bisexual',
    'bipolar',
    'busty',
    'crappy',
    'cunty',
    'communist',
    'capitalist',
    'cannibal',
    'christian',
    'damn',
    'damned',
    'drunk',
    'drugged',
    'erotic',
    'fascist',
    'feminist',
    'fisting',
    'farting',
    'farty',
    'fuckable',
    // 'fucking',
    // 'fucked',
    'gassy',
    'gay',
    'goddamn',
    'homosexual',
    'heterosexual',
    'hedonistic',
    'high',
    'kinky',
    'kickass',
    'lewd',
    'lecherous',
    'masculine',
    'mature',
    'masochistic',
    'mysogynistic',
    'moist',
    'naked',
    'nude',
    'naughty',
    'perverted',
    'polygamist',
    'pissed',
    'poopy',
    'racist',
    'religious',
    'republican',
    'sexy',
    'satanic',
    'sadistic',
    'straight',
    'slutty',
    'shitty',
    'xenophobic',
];

module.exports = { adjectives, dookieAdj };