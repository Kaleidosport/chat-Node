const badWordRegexes = [
    "pute",
    "pouffe",
    "pouf",
    "poufiase",
    "pouffy",
    "poufyase",
    "pouffyase",
    "cul",
    "enculé",
    "en cule",
    "ntm",
    "nique ta mère",
    "enfoiré",
    "pédé",
    "pd",
    "salot",
    "mbdtc",
    "fu",
    "fuck",
    "fucker",
    "facka",
    "maddafacka",
    "bitch",
    "biatch",
    "motherfucker",
    "fum",
    "ass",
    "asshole",
    "fucking",
    "fils de pute",
    "fdp",
    "bite",
    "fuckoff",
    "fuq",
    "fuqa",
    "porn",
    "porno",
    "pr0n",
    "p0rn",
    "gang bang",
    "cilit bang",
    "hand job",
    "blow job"

];
const input = "bitch";

const Censored = badWordRegexes.reduce(
    (input, regex) =>
        
        input.replace(regex,
            badWord => "*".repeat(badWord.length)
            ),
    input
);

// console.log(Censored);