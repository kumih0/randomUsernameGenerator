//emoji reactions
const emojiReactions = [ 
    "👍", "❤️", "😄", "😍", "🔥", "😊", "😎", "👏", "🙌", "💯", "🤩", "🎉", "💕", "😂", "😘", "👌", "🙏", "🥰", "😋", "🤗", "👀", "😁", "🤔", "🤭", "👀", "😮", "👊", "😆", "😃", "😇", "💪", "👻", "🚀", "😱", "🎊", "🤪", "👋", "🌟", "💖", "👑", "🥳", "👀", "😓", "😔", "😢", "😥", "😪", "🤤", "🙁", "😬", "😑", "😴", "😄", "😊", "😍", "👍", "👏", "🙌", "🔥", "🎉", "🥳", "🤩", "😂", "🤣", "😆", "😎", "😇", "😋", "🤗", "🥰", "😘", "😙", "😚", "😉", "🙂", "🤔", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "🥱","😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹️", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "😷", "🤕", "🤢", "🤮", "🤧", "😇", "🤠", "🥳", "🥺", "🤥", "🤫", "🤭", "🧐", "🤓", "😈", "👿", "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💥", "💫", "💦", "💨", "🕳️", "💣", "💬","👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🦷", "🦴", "👀", "👁️", "👅" 
];

//random comments
const comments = [
 "That's interesting!", "I agree with you.", "I can relate to this.", "Well said!", "Great post!", "I'm glad I read this.", "I'm so proud of you.", "I needed to hear this today.", "I'm sending this to my friends.", "I'm sharing this with my family.", "I'm going to remember this.", "Thanks for sharing.", "You've got a point.", "I'm not sure about that.", "This made me smile.", "I'm feeling inspired.", "I needed to hear this.", "You're so right!", "This is helpful.", "I've had a similar experience.", "I disagree with you.", "Tell me more about it.", "I'm curious about this.", "Can you elaborate?", "I appreciate your perspective.", "This changed my mind.", "I'm impressed!", "You're onto something here.", "I'm touched by your post.", "I've never thought of that before.", "Interesting point of view.", "I'm with you on this.", "Thanks for the insights.", "I've been through this too.", "This made me think.", "You made my day.", "I can't stop thinking about your post.", "This is eye-opening.", "You've opened my mind.", "I'm sharing this with my friends.", "I'm grateful for this post.", "You've articulated it perfectly.", "I've shared a similar experience.", "This is worth discussing.", "I'm sending this to my family.", "You've got me thinking now.", "I'm going to remember this.", "You've got a new follower.", "This deserves more attention.", "I'm in awe of your post.", "This is so relatable.", "I can't agree more.", "You've got my support.", "This is so thought-provoking.", "I'm cheering for you.", "Absolutely!", "I agree.", "That's interesting.", "You're right.", "No way!", "I'm not so sure.", "Wow!", "Exactly.", "Oh, I see.", "Definitely.", "I can relate.", "Totally.", "Hmm...", "Fascinating.", "I disagree.", "Makes sense.", "I'm with you.", "Not a chance.", "I'm torn.", "No doubt.", "Couldn't agree more.", "I get it.", "That's a good point.", "Well said!", "You've got a point.", "Tell me more.", "I'm on the fence.", "I'm conflicted.", "I'm leaning towards yes.", "I'm leaning towards no.", "I don't know about that.", "Interesting perspective.", "I never thought of that.", "You might be onto something.", "I'm not convinced.", "I'm intrigued.", "Sounds reasonable.", "I'm not buying it.", "I'm all ears.", "I'm open to that.", "I'm not sure how I feel about that.", "I'm inclined to agree.", "I'm inclined to disagree.", "I'm neutral on this.", "Can you elaborate?", "That's a new one.", "I've heard that before.", "I'm not sure I follow.", "I'm having a hard time understanding.", "I'm lost.", "I'm not following your logic.", "I'm trying to wrap my head around it.", "I'm divided.", "I'm of two minds about it.", "I'm ambivalent.", "That's a tough one.", "I'm torn between yes and no.", "I'm torn between agreeing and disagreeing.", "I'm uncertain.", "I'm wavering.", "I need more information.", "I need more context.", "I need more clarity.", "Can you break it down for me?", "I'm confused.", "Can you simplify?", "I need more details.", "I need to think about this.", "I'm intrigued but skeptical.", "I'm intrigued but cautious.", "I'm intrigued but hesitant.", "I'm intrigued but reserved.", "I'm intrigued but guarded.", "I'm intrigued but dubious."
];

//random comments w emojis
const randomComments = [
    "OMG, that's lit! 🔥 #Goals",
    "Yo, this is crazy cool! 🙌 #LivingItUp",
    "I can't even, this is so dope! 😎 #Blessed",
    "Loving the vibes in this pic. 😊 #Chillin",
    "No way, this is incredible! 🤩 #WowFactor",
    "Just gonna send it! 💁‍♂️ #AdventureTime",
    "This view is everything! 😍 #Wanderlust",
    "Totally vibin' with this. 🎉 #GoodTimes",
    "Feelin' blessed and grateful. 🙏 #Thankful",
    "Lowkey jealous of this life! 😂 #TravelDreams",
    "Slaying it in that outfit! 👗 #Fashionista",
    "Honestly, this made my day. 😄 #Smiles",
    "This is pure awesomeness! 👌 #Impressive",
    "Can't stop, won't stop! 🎶 #PartyTime",
    "Living for these vibes. 🌟 #PositiveEnergy",
    "Big mood right now. 😴 #Chillin",
    "That's a vibe! 🌴 #VacationMode",
    "On a roll with this day! 🚀 #Winning",
    "This is how we do it! 🕺 #WeekendVibes",
    "Just livin' life to the fullest! 🌈 #Joyful",
    "Chasing dreams like there's no tomorrow. ✨ #DreamBig",
    "Getting lost in this moment. 🌟 #Blissful",
    "Life's a journey, enjoy the ride! 🚗 #Adventures",
    "Weekend goals right here! 🍻 #FriyayFeels",
    "No regrets, just memories. 📸 #Memories",
    "Sunsets and good times. 🌅 #Sunkissed",
    "Every day is a new adventure! 🌍 #ExploreMore",
    "Just embracing the good vibes. 🤗 #Positivity",
    "That's some serious wanderlust! 🌄 #TravelBug",
    "Making memories and loving life. 💖 #LifeGoals",
    "Chasing sunsets and dreams. 🌇 #SunsetLover",
    "Livin' the dream, one day at a time. 🌟 #Happiness",
    "Feeling blessed beyond measure. 🙏 #Gratitude",
    "No filter needed for this view. 😍 #NatureBeauty",
    "Happiness is a state of mind. 😄 #Joyful",
    "Can't get enough of this view! 🏞️ #NatureLovers",
    "Just taking it all in. 🌼 #Mindful",
    "Adventure is calling, and I must go! 🌄 #Wanderlust",
    "Let's make some memories! 📸 #CaptureTheMoment",
    "All smiles and good vibes. 😊 #PositiveVibesOnly",
    "Embracing the journey. 🚶‍♂️ #PathLessTraveled",
    "No place I'd rather be. 🏖️ #Paradise",
    "Life is an adventure waiting to be explored! 🌍 #AdventureAwaits",
    "Sunshine and good times. 🌞 #HappyDays",
    "Just living in the moment. 🌟 #Present",
    "This is what life's all about. 💫 #LivingLife",
    "Forever chasing that golden hour. ✨ #GoldenHour",
    "Making memories every day. 📸 #LifeIsBeautiful"
];

module.exports = { emojiReactions, comments, randomComments };