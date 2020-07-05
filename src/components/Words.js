const categories = [
    ["alligator", "ant", "bear", "bee", "bird", "camel", "cat", "cheetah",
    "chicken", "chimpanzee", "cow", "crocodile", "deer", "dog", "dolphin", "duck",
    "eagle", "elephant", "fish", "fly", "fox", "frog", "giraffe", "goat",
    "goldfish", "hamster", "hippopotamus", "horse", "kangaroo", "lion", "lobster", "monkey",
    "octopus", "owl", "panda", "pig", "rabbit", "rat", "scorpion", "seal", "shark", 
    "sheep", "snail", "snake", "spider", "squirrel", "tiger", "turtle", "wolf", "zebra"],
    ["afghanistan", "albania", "algeria", "anguilla", "antarctica", "argentina", "armenia", "australia", 
    "austria", "azerbaijan", "bahamas", "bangladesh", "barbados", "belarus", "belgium", "bolivia",
    "bosnia", "brazil", "bulgaria", "burundi", "cambodia", "cameroon", "canada", "chile", "china", 
    "colombia", "croatia", "cuba", "cyprus", "czechia", "denmark", "ecuador", "egypt", "estonia", 
    "ethiopia", "fiji", "Finland", "France", "Georgia", "Germany", "Greece", "Greenland", "Guatemala", 
    "Haiti", "hongkong", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland",
    "israel", "italy", "jamaica", "japan", "jersey", "jordan", "kazakhstan", "kenya", "southkorea", 
    "northkorea", "latvia", "lebanon", "liberia", "libya", "lithuania", "luxembourg", "madagascar", 
    "malaysia", "maldives", "mali", "malta", "mexico", "moldova", "mongolia", "montenegro", "morocco", 
    "namibia", "nepal", "netherlands", "nicaragua", "nigeria", "norway", "oman", "pakistan", "panama",
    "paraguay", "peru", "philippines", "poland", "portugal", "puertorico", "qatar", "romania", 
    "russia", "serbia", "singapore", "slovakia", "slovenia", "southafrica", "spain", "sri lanka", 
    "sudan", "sweden", "switzerland", "taiwan", "tajikistan", "thailand", "tonga", "tunisia", "turkey", 
    "uganda", "ukraine", "unitedkingdom", "unitedstates", "uruguay", "uzbekistan", "yemen", 
    "zambia", "zimbabwe"],
    ["aqua", "beige", "black", "blue", "brown", "cyan", "gold", "grey", "green",
    "lavender", "lime", "magenta", "maroon", "navy", "olive", "orange", "peach", "pink",
    "purple", "red", "silver", "violet", "white", "yellow"],
    ["alternative", "grunge", "hardrock", "punk", "blues", "jazz", "country", "opera", 
    "classical", "western", "electronic", "pop", "hardcore", "house", "latin", "techno", 
    "trance", "electronic", "folk", "hiphop", "rap", "kpop", "soul", "reggae"],
    ["bowling", "boxing", "tennis", "skateboarding", "hockey", "yoga", "karate", "volleyball", "basketball",
    "baseball", "rugby", "wrestling", "running", "judo", "horseracing", "golf", "football", "soccer"]
]

function randomWord() {
    let categoryPlace = Math.floor(Math.random() * categories.length);
    let category;
    switch(categoryPlace){
        case 0: category = 'Animal'; break;
        case 1: category = 'Country'; break;
        case 2: category = 'Color'; break;
        case 3: category = 'Music Genre'; break;
        case 4: category = 'Sport'; break;
        default:
            // do nothing
    }
    return([categories[categoryPlace][Math.floor(Math.random()* categories[categoryPlace].length)], category])
}

export { randomWord }