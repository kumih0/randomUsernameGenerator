//creating formula for titles of movies, books etc.
const articles = [
    "the", "a", "an",
];

const mysNoun = [
    "mystery", "secret", "treasure", "adventure", "journey", "quest", "travel", "history", "fantasy", "dream", "creation",
    "legend", "intrigue", "consequence", "exploration", "hunt", "ballad", "song", "tale", "trick", "vision", "trial",
    "shadow", "call", "dance", "memory", "code", "exploit", "story", "whisper", "dimension",

];

const place = [
    "world", "land", "sea", "ocean", "beach", "place", "city", "country", "town", "coast", "valley", "mountain", "forest",
    "village", "river", "creek", "lake", "wood", "jungle", "street", "hill", "field", "beach", "garden", "meadow", "road",
    "house", "building", "apartment", "cabin", "farm", "home", "office", "barn", "prison", "jail", "church", "shop", "store",
    "downtown", "uptown", "basement", "closet", "kitchen", "bedroom", "bathroom", "shower", "camp", "school", "class", "gym",
    "pool", "toilet", "room", "library",
];



const prepositions = [
    "for", "to", "of", "in", "by", "above", "below", "with", "without", "on", "onto", "into", "around", "about", "across", "towards", "against", "along", "among", "before",
    "behind", "beside", "from", "beneath", "between", "down", "under", "over", "near", "off", "within",
];

const dramAd = [
    "deep", "lost",
];

const makeItPlural = (w) => {
    const lastChar = w[w.length - 1];

    if (lastChar === "y") {
        w.pop();
        w.push("ies");

        console.log(w);
        return w;
    } else {
        w.push("s");

        console.log(w);
        return w;
    };
};

const makeItPosessive = (w) => {
    return w + "'s";
};

//funct to check if word is prep or art
const articleOrPrep = (w) => {
    switch (w) {
        case articles.includes(w):
            return result = "a";
        case prepositions.includes(w):
            return result = "p";
        default:
            return result = false;
    };
};


