const messages = [
    "Arath",
    "Ana",
    "Diego",
    "Laura",
    "Oscar",
    "Freddy",
    "Christian",
    "Carolina",
    "Paulina",
    "Evelyn"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };