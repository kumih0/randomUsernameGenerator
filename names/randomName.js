//first names in english, common, male and female
const maleNames = [
  "James", "John", "Robert", "Michael", "William", "David", "Richard", "Steve", "Tucker", "Rick", "Jimmy",
  "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Brian", "Timmy", "Dan",
  "Ronald", "Anthony", "Kevin", "Jason", "Matthew", "Gary", "Timothy", "Jose", "Larry", "Jeffrey", "Frank",
  "Scott", "Eric", "Stephen", "Andrew", "Raymond", "Gregory", "Jerry", "Dennis", "Walter", "Harold", "Douglas",
  "Henry", "Carl", "Roger", "Joe", "Albert", "Justin", "Terry", "Gerald", "Keith", "Benjamin", "Howard", "Brendan",
  "Franklin", "Bobby", "Billy", "Eugene", "Lawrence", "Nicholas", "Brandon", "Harry", "Wayne", "Louis", "Gus",
  "Jeremy", "Austin", "Gordon", "Zachary", "Luther", "Byron", "Julian", "Isaac", "Morris", "Clifton", "Salvador", "Sergio",
  "Seth", "Arturo", "Freddy", "Alejandro", "Joey", "Wendell", "Chester", "Dustin", "Jordan", "Pedro", "Napoleon",
  "Corey", "Ian", "Casey", "Elmer", "Fred", "Glen", "Shane", "Hector", "Eddie", "Rodney", "Kyle", "Phillip", "Derek",
  "Jesus", "Brett", "Lee", "Dale", "Ben", "Manuel", "Ricardo", "Miguel", "Antonio", "Tony", "Ramon", "Leroy", "Cody",
  "Liam", "Noah", "Oliver", "Elijah", "Theodore", "Mateo", "Levi", "Sebastian", "Jack", "Alexander", "Bert", "Leonard",
  "Owen", "Asher", "Samuel", "Leo", "Hudson", "Aiden", "Joseph", "Logan", "Jackson", "Jeff", "Trent", "Tristian", "Mike",
  "Gabriel", "Grayson", "Wyatt", "Maverick", "Dylan", "Elias", "Thomas", "Jayden", "Jacob", "Lucas", "Josh", "Bartholomew",
  "Carter", "Santiago", "Ezekiel", "Charles", "Josiah", "Caleb", "Cooper", "Lincoln", "Miles", "Nathan", "Isaiah", "Kai",
  "Joshua", "Angel", "Adrian", "Cameron", "Nolan", "Waylon", "Jaxon", "Roman", "Eli", "Wesley", "Sam", "Garrett", "Toby",
  "Aaron", "Christian", "Ryan", "Leonardo", "Brooks", "Axel", "Walker", "Jonathan", "Easton", "Winston", "Dorian",
  "Everett", "Weston", "Bennett", "Jameson", "Landon", "Silas", "Beau", "Micah", "Damien", "Stan", "Kenny", "Jeffery",
  "Colton", "Jordan", "Jeremiah", "Parker", "Rowan", "Adam", "Theo", "Xavier", "Bill", "Craig", "Clyde", "Alfred", "Fredrick",
  "Hunter", "Dominic", "Jace", "Thiago", "Kayden", "Damian", "August", "Carson", "Austin", "Brady", "Chad", "Tobias",
  "Myles", "Amir", "Declan", "Emmett", "Ryder", "Luka", "Connor", "Jaxson", "Milo", "Enzo", "Stanley", "Jalen", "Silvio",
  "Giovanni", "Vincent", "Diego", "Luis", "Archer", "Harrison", "Kingston", "Jasper", "Legend", "Remy", "Don", "Slyvester",
  "Lorenzo", "Evan", "Jonah", "Chase", "Bryson", "Nathaniel", "Arthur", "Juan", "Duke", "Holden", "Travis", "Leon",
  "Cole", "Ashton", "Carlos", "Calvin", "Brayden", "Rhett", "Percy", "Tyrone", "Dante", "Jawonne", "Darnell", "Darius",
  "Emiliano", "Graham", "Max", "Leon", "Ivan", "Hayden", "Malachi", "Raymond", "Chris", "Noel", "Lester", "Ralph",
  "Dean", "Tyler", "Kaiden", "Elliott", "Arlo", "Emmanuel", "Ayden", "Colin", "Greg", "Mitchell", "Cory", "Ted", "Alvin",
  "Maxwell", "Ryker", "Finn", "Charlie", "Judah", "Trevor", "Augustus", "Barry", "Zack", "Clark", "Bryce", "Kobe", "Luigi",
  "Dawson", "Zayden", "Camden", "Alan", "Alex", "Felix", "Dave", "Drew", "Dexter", "Jin", "Joon", "Lester", "Lance", "Wilson",
  "Jesse", "Beckett", "Matthias", "Tucker", "Emilio", "Xander", "Oscar", "Beckham", "Spencer", "Jerome", "Geoff", "Tyrese",
  "Abraham", "Andres", "Gavin", "Brody", "Barrett", "Hayes", "Jett", "Joel", "Jared", "Casper", "Rufus", "Randy", "Francis",
  "Victor", "Peter", "Edward", "Patrick", "Grant", "Hamza", "Mohammed", "Matt", "Johnathan", "Phil", "Duane", "Dwight",
  "Tristan", "Kyrie", "Blake", "Griffin", "Malakai", "Rafael", "Israel", "Tate", "Lukas", "Andre", "Arnold", "Ron", "Troy",
  "Nico", "Marcus", "Skyler", "Javier", "Omar", "Simon", "Remington", "Callum", "Bernard", "Herbert", "Claude", "Floyd", "Allen",
  "Earl", "Curtis", "Norman", "Julius", "Marshall", "Maurice", "Rocco", "Harvey", "Orlando", "Alonzo", "Muhammad", "Maximus",
  "Oswald", "Melvin", "Doug", "Douglas", "Lyle", "Lionel", "Nelson", "Julio", "Gilbert", "Raul", "Solomon", "Enrique", "Vladimir",
];

const femaleNames = [
  "Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Millicent", "Tiffany",
  "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura", "Jan", "Siobhan",
  "Sarah", "Kimberly", "Deborah", "Jessica", "Shirley", "Cynthia", "Angela", "Melissa", "Brenda", "Amy", "Anna", "Marsha", "Latasha",
  "Rebecca", "Virginia", "Kathleen", "Pamela", "Martha", "Debra", "Amanda", "Stephanie", "Caroline", "Christine", "Molly", "Marcy",
  "Janet", "Catherine", "Frances", "Ann", "Joyce", "Diane", "Alice", "Julie", "Heather", "Teresa", "Doris", "Thelma", "Maxine",
  "Gloria", "Evelyn", "Cheryl", "Mildred", "Katherine", "Joan", "Ashley", "Judith", "Rose", "Janice", "Roxanne", "Caroline",
  "Nicole", "Judy", "Christina", "Kathy", "Theresa", "Beverly", "Denise", "Tammy", "Irene", "Jane", "Lori", "Rachel", "Katya",
  "Marilyn", "Andrea", "Louise", "Jacqueline", "Wanda", "Bonnie", "Julia", "Ruby", "Lois", "Tina", "Phyllis", "Norma", "Katrina",
  "Paula", "Diana", "Annie", "Lillian", "Emily", "Robin", "Peggy", "Crystal", "Gladys", "Rita", "Dawn", "Connie", "Florence",
  "Tracy", "Edna", "Carmen", "Rosa", "Cindy", "Grace", "Wendy", "Victoria", "Eleanor", "Danielle", "Debbie", "Gina", "Beth", "Maggie",
  "Arlene", "Nina", "Jenny", "Marlene", "Heidi", "Sabrina", "Justine", "Gretchen", "Cecilia", "Rochelle", "Wilma", "Majorie", "Cleo",
  "Melanie", "Lorraine", "Bernadette", "Emma", "Erin", "Velma", "Yvette", "Yolanda", "Audrey", "Vivian", "Lana", "Shannon", "Chantal",
  "Sheila", "Marion", "Vickie", "Becky", "Cassie", "Renee", "Joy", "Anita", "Mariah", "Joanne", "Candace", "Darlene", "Patty",
  "Mia", "Holly", "Brittany", "Lena", "Monique", "Abigail", "Ella", "Trisha", "Elaine", "Shelly", "Jill", "Candice", "Carrie",
  "Natalie", "Rosemary", "April", "Sherri", "Kaitlyn", "Bridget", "Melody", "Alexandra", "Lindsey", "Marissa", "Tanya", "Loretta",
  "Olivia", "Charlotte", "Amelia", "Sophia", "Isabella", "Ava", "Luna", "Camilla", "Sofia", "Brandy", "Megan", "Brooke", "Paige",
  "Scarlett", "Chloe", "Violet", "Penelope", "Aria", "Hazel", "Nora", "Layla", "Lily", "Aurora", "Ellie", "Lauren", "Mei", "Gia",
  "Madison", "Matilda", "Willow", "Zoe", "Stella", "Eliana", "Ivy", "Emilia", "Naomi", "Hannah", "Lucy", "Juana", "Lola", "Madeline",
  "Elena", "Maya", "Paisley", "Valentina", "Delilah", "Leilani", "Claire", "Sadie", "Autumn", "Brooklyn", "Reyna", "Kennedy", "Cora",
  "Savannah", "Athena", "Natalia", "Hailey", "Iris", "Bella", "Eloise", "Jade", "Gabriella", "Ariana", "Lydia", "Nevaeh", "Liliana",
  "Allison", "Maeve", "Samantha", "Eva", "Clara", "Hadley", "Josie", "Arya", "Eliza", "Charley", "Daisy", "Millie", "Freya",
  "Alina", "Sienna", "Isabelle", "Esther", "Sloane", "Amara", "Valeria", "Catalina", "Magnolia", "Kehlani", "Summer", "Ember", "Kaylee",
  "Georgia", "Juliet", "Anastasia", "Genevieve", "Amaya", "June", "Alana", "Lainey", "Rosalie", "Jasmine", "Ruth", "Ada", "Myla",
  "Callie", "Elsie", "Juliana", "Kailani", "Vera", "Kaia", "Hallie", "Arabella", "Aliyah", "Camille", "Ariel", "Selena", "Sawyer", "Nyla",
  "Delaney", "Mariana", "Leila", "Leah", "Octavia", "Kali", "Alicia", "Mckenna", "Angelina", "Adelaide", "Phoebe", "Paulina", "Eunice",
  "Enya", "Imogen", "Jenna", "Macy", "Lucienne", "Samara", "Sylivia", "Svetlana", "Tatiana", "Risa", "Sue", "Tamara", "Sasha", "Sonia",
  "Harmony", "Jolene", "Vanessa", "Valerie", "Vivienne", "Willa", "Zara", "Zelda", "Zora", "Zuri", "Zaria", "Zinnia", "Zola", "Nadia",
  "Portia", "Annika", "Astrid", "Blanca", "Dahlia", "Shauna", "Shayla", "Shoshana", "Cassandra", "Leticia", "Katarina", "Larissa",
];

const unisexNames = [
  "Jordan", "Taylor", "Alex", "Ryan", "Avery", "Casey", "Riley", "Peyton", "Hayden", "Angel",
  "Dakota", "Harper", "Parker", "Reagan", "Skyler", "Rowan", "Emerson", "Micah", "Morgan", "Blake",
  "Cameron", "Quinn", "Charlie", "River", "Sawyer", "Drew", "Aubrey", "Jamie", "Sage", "Sam",
  "Bailey", "Dylan", "Carter", "Ashton", "Hunter", "Logan", "Juniper", "Leslie", "Kendall",
  "Reese", "Kai", "Elliot", "Finley", "Rory", "Wren", "Piper", "Presley", "Ali", "Gale",
  "Phoenix", "Remi", "Tatum", "Armani", "Mackenzie", "Nova", "Finley", "Addison", "Jo",
  "Dallas", "Leighton", "Jayden", "Lyric", "Frankie", "Emery", "Marley", "Zion",
  "Eden", "Elliott", "Karter", "Shiloh", "Rylan", "Jean",
];

//array of last names/surnames
const surnameArray = [
"Johnson", "Brown", "Garcia", "Davis", "Martinez", "Lopez", "Wilson", "Thomas", "Moore", "Martin", "Perez", "White", 
"Sanchez", "Ramirez", "Robinson", "Young", "King", "Scott", "Nguyen", "Flores", "Adams", "Baker", "Rivera", "Mitchell", 
"Roberts", "Phillips", "Turner", "Parker", "Edwards", "Reyes", "Morris", "Murphy", "Rogers", "Ortiz", "Cooper", "Bailey", 
"Kelly", "Ramos", "Cox", "Richardson", "Brooks", "Wood", "Bennett", "Mendoza", "Hughes", "Alvarez", "Sanders", "Myers", 
"Ross", "Jimenez", "Jenkins", "Russell", "Bell", "Butler", "Barnes", "Fisher", "Simmons", "Jordan", "Alexander", "Graham", 
"Griffin", "Moreno", "Cole", "Bryant", "Gibson", "Tran", "Aguilar", "Murray", "Castro", "Owens", "Fernandez", "Woods", 
"Kennedy", "Vargas", "Chen", "Webb", "Guzman", "Crawford", "Simpson", "Hunter", "Mendez", "Shaw", "Mason", "Munoz", "Hicks", 
"Palmer", "Black", "Boyd", "Stone", "Fox", "Mills", "Rice", "Garza", "Ferguson", "Stephens", "Weaver", "Gardner", "Grant", 
"Kelley", "Hawkins", "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", 
"Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", 
"Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", 
"Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", 
"Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", 
"Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", 
"Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", 
"James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", 
"Ross", "Foster", "Jimenez", "Arnold", "Pierce", "Vazquez", "Hansen", "Peters", "Santos", "Hart", "Bradley", "Knight", 
"Elliott", "Cunningham", "Duncan", "Armstrong", "Hudson", "Carroll", "Lane", "Riley", "Andrews", "Alvarado", "Ray", "Delgado", 
"Berry", "Perkins", "Hoffman", "Johnston", "Matthews", "Pena", "Richards", "Contreras", "Willis", "Carpenter", "Lawrence", 
"Sandoval", "Guerrero", "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins", "Greene", "Nunez", "Wheeler", "Valdez", 
"Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison", "Franklin", "Carlson", "Austin", "Dominguez", "Carr", 
"Lawson", "Jacobs", "Obrien", "Lynch", "Singh", "Vega", "Bishop", "Montgomery", "Oliver", "Jensen", "Harvey", "Williamson", 
"Gilbert", "Dean", "Sims", "Espinoza", "Howell", "Li", "Wong", "Reid", "Hanson", "Le", "McCoy", "Garrett", "Burton", "Fuller", 
"Wang", "Weber", "Welch", "Rojas", "Lucas", "Marquez", "Fields", "Park", "Yang", "Little", "Banks", "Padilla", "Day", "Walsh", 
"Bowman", "Schultz", "Luna", "Fowler", "Mejia", "Davidson", "Acosta", "Brewer", "May", "Holland", "Juarez", "Newman", 
"Pearson", "Curtis", "Cortez", "Douglas", "Schneider", "Joseph", "Barrett", "Navarro", "Figueroa", "Keller", "Avila", "Wade", 
"Molina", "Stanley", "Hopkins", "Campos", "Barnett", "Bates", "Chambers", "Caldwell", "Beck", "Lambert", "Miranda", "Byrd", 
"Craig", "Ayala", "Lowe", "Frazier", "Powers", "Neal", "Leonard", "Gregory", "Carrillo", "Sutton", "Fleming", "Rhodes", 
"Shelton", "Schwartz", "Norris", "Jennings", "Watts", "Duran", "Walters", "Cohen", "McDaniel", "Moran", "Parks", "Steele", 
"Vaughn", "Becker", "Holt", "Deleon", "Barker", "Terry", "Hale", "Leon", "Hail", "Benson", "Haynes", "Horton", "Miles", 
"Lyons", "Pham", "Graves", "Bush", "Thornton", "Wolfe", "Warner", "Cabrera", "McKinney", "Mann", "Zimmerman", "Dawson", 
"Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales", "Fisher", 
"Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham", "Reynolds", "Smith", "Griffin", 
"Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson", "Ellis", "Tran", "Medina", "Aguilar", "Stevens", 
"Murray", "Ford", "Castro", "Marshall", "Owens", "Harrison", "Fernandez", "McDonald", "Woods", "Washington", "Kennedy", 
"Wells", "Vargas", "Henry", "Chen", "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", 
"Hunter", "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Munoz", "Hunt", "Hicks", "Holmes", "Palmer", 
"Wagner", "Black", "Robertson", "Boyd", "Rose", "Stone", "Salazar", "Fox", "Warren", "Mills", "Meyer", "Rice", "Schmidt", 
"Garza", "Daniels", "Ferguson", "Nichols", "Stephens", "Soto", "Weaver", "Ryan", "Gardner", "Payne", "Grant", "Dunn", 
"Kelley", "Spencer", "Hawkins", 
];

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
  'Soggy', 'Stink', 'Dingus', 'Poop', 'Boogers', 'Peepee', 'Butt', 'Anus', 'Butthole', 'Fart', 'Doodoo', 'Dingdong', 'Wiener', 'Flap', 'Juicy', 'Snot', 'Meat', 'Toot', 'Tit', 'Pee', 'Dingus', 'Dangus', 'Doodle', 'Boob', 'Bingle', 'Bongle',  'Hoot', 'Slap', 'Doofus', 'Gristle', 'Lard', 'Dump', 'Stick', 'Beef'
];

const sillyends = [
  'muncher', 'eater', 'whizzer', 'pisser', 'farter', 'flipper', 'flaps', 'meat', 'pocket', 'flopper', 
]

const swears = [
  'Fuck', 'Shit', 'Bitch', 'Bastard', 'Cunt', 'Ass', 'Asshole', 
];

module.exports = { maleNames, femaleNames, unisexNames, prefixArray, suffixArray, surnameArray, namesArray}