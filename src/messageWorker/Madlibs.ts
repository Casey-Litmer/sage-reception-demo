

//=================================================================================
//NAMES
export const FIRST_NAMES = [
    "Oliver", "Liam", "Noah", "James", "William", "Elijah", "Henry", "Lucas", "Barnabas", 
    "Ethan", "Alexander", "Mason", "Benjamin", "Daniel", "Matthew", "Jackson", "Sebastian"
];

export const LAST_NAMES = [
    "Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis", 
    "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas"
];

export const getRandomName = () => {
    const randFirstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    const randLastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    return `${randFirstName} ${randLastName}`;
};

//=================================================================================
//DATE FORMATTING
export const namesOfMonth = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const nthDay = (n: number) => {
    const dayString = `${n+1}`;
    if (dayString.endsWith('1')) return `${dayString}st`; else
    if (dayString.endsWith('2')) return `${dayString}nd`; else
    if (dayString.endsWith('3')) return `${dayString}rd`; 
    else return `${dayString}th`;
};

export const getRandomDate = () => {
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    const minTime = minDate.getTime();
    const maxTime = maxDate.getTime();

    const randDate = new Date(minTime + Math.random()*(maxTime - minTime));
    randDate.setMinutes(0, 0, 0);

    return randDate;
};

//=================================================================================
//MADLIBS
export const madlib = (name: string, date:Date) => {
    const month = namesOfMonth[date.getMonth()];
    const day = nthDay(date.getDay());
    const hour = `${date.getHours()}:00`;
    const randLib = Math.floor(Math.random()*16);

    const MADLIBS = [
    `Hey, this is ${name}. My kitchen sink is leaking bad. Any chance you could stop by on ${month} ${day} at ${hour}?`,
    `Hi, I need help installing some ceiling lights. Could you come on ${month} ${day} around ${hour} in the afternoon?`,
    `Hello, my yard is overgrown, and I need it cleaned up. Can you make it out ${month} ${day} at ${hour}?`,
    `Hey, I'm remodeling my kitchen and need some advice. Are you available on ${month} ${day} at ${hour}?`,
    `Hi, my AC isn't working, and it's getting unbearable. I get off work at ${hour}. Could you come by then on ${month} ${day}?`,
    `Hello, I want my living room repainted. Would you be free to check it out on ${month} ${day} at ${hour}?`,
    `Hi, my water heater stopped working, and I have no hot water. Can you come over on ${month} ${day}, say around ${hour}`,
    `Hey, I need an extra outlet in my garage for a new freezer before my bachelor party at ${hour}. Could you swing by on the ${day} of ${month} afternoon?`,
    `Hello my name is ${name}, I noticed a leak in my roof after last night's storm. Could you check it out on ${month} ${day}?  There will be another hurricane at ${hour}!`,
    `Hi, I need some new sod and tree trimming done. Would ${month} ${day} at ${hour} work for you?`,
    `Hey, I'm thinking of adding a deck to my backyard. Any chance you're free on ${month} ${day} at ${hour}?`,
    `Hi, my furnace is making loud noises. Could you come by on ${month} ${day}, maybe around ${hour}?`,
    `Hello, I just bought a new dishwasher and need it installed. Are you available on the ${day} of ${month} at ${hour}?`,
    `Hi, I'd like to repaint my bedroom. Would ${month} ${day} at ${hour} work for you?`,
    `Hey it's ${name}, my breaker box needs an upgrade this ${month}. Could you take a look on the ${day} at ${hour}?`,
    `Hi, I found some missing shingles on my roof in ${month}. Do you have time on the ${day}, maybe around ${hour}?`,
    ];

    return MADLIBS[randLib];
};

//=================================================================================
//PHONE NUMBERs
export const getRandomPhoneNumber = () => {
    const numbers = Array.from({length: 10}, () => Math.floor(Math.random()*10)).join('');
    return `${numbers.slice(0,3)}-${numbers.slice(3,6)}-${numbers.slice(6,10)}`;
};

//=================================================================================
//TIME TO RESPOND
export const getRandomTime = (curve: number) => {
    const max = 100000;
    const min = 20000;
    return min + (max-min) * (Math.random()**curve)
};