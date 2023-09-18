//creating formula for titles of movies, books etc.
const articles = [
    "the", "a", "an", 
];

const mysNoun = [
    "mystery", "secret", "treasure", "adventure", "journey", "quest", "travel", "history", "fantasy", "dream", "creation", 
    "legend", "intrigue", "consequence", "exploration", "hunt", "world", "ballad", "song", "tale", "trick", "vision", "trial",
    "shadow", "call", "dance", "memory", "code", "exploit", "story", "whisper", 
    
    ];

const makeItPlural = (w) => {
    const lastChar = w[w.length-1];
    
    if(lastChar === "y") {
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

const 