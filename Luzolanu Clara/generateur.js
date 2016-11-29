// ouvrir le terminal
// > cd nom_du_dossier
// (à la place de nom_du_dossier on peut également le glisser dans la fenêtre du terminal)
// > node generateur.js
// YOUPI 


fs = require("fs");

// nbr ¶
var paragraphs = 3000;

// nbr phrase minimum
var minlength = 2;

// nbr phrase maximum
var maxlength = 10;




var randomize = function() {
    return 0.5 - Math.random();
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomTag(){

    tags = ["#", "##", "###", "", "- "];

    return tags[ randomNumber(0, tags.length) ];

}

var lyrics = [
    "Les phénomènes du somnambulisme spontané sont généralement connus ",
    "La réalité de ceux de la veille. ",
    "Les rêves et le somnambulisme diffèrent entre eux du tout au tout. ",
    "Une région aussi ténébreuse que celle des songes. ",
    "Une région aussi ténébreuse que celle du somnabulisme. ",
    "Le moi lui-même est anéanti. ",
    "On ne croit pouvoir faire de trop grands sacrifices. ",
    "La nature de cet état extraordinaire. ",
    "Un tel souvenir n'en est pas un. ",
    "Dans un sommeil complet il n’y a   nul souvenir. ",
    "Où les observations fugitives qui peuvent se présenter échappent presque entièrement au contrôle d'autrui. ",
    "Là où il y à souvenir, le sommeil n’était pas parfait. ",
    "Ainsi le somnambule oublie, parce qu'en agissant, en pensant, en parlant, il n'a pas conscience de lui-même. ",
    "Aussitôt que l’effort se déploie et que le signe se présente, le réveil s’en suit à l’instant. ",
    "Des scènes de sa vie somnambulique. ",
    "Ce que le soleil est aux planètes. ",
    "Ce que la terre est à la lune. ",
    "Ce que le jour est à la nuit. ",
    "Ce que la lumière est à la chaleur. ",
    "Ce que la vie animale est à la vie végétative. ",
    "Ce que la veille est au sommeil. ",
    "Pendant le sommeil et le somnambulisme cet effort est suspendu. ",
    "C'est ce qu’il y a d'étrange et d'anomal dans les rêves. ",
    "L'homme comme dans la nature. ",
    "Le somnambule se souvient fort bien de son propre état de veille. ",
    "L'illusion qui l’abuse. ",
    "On sait que nos souvenirs sont tantôt involontaires, tantôt volontaires. ",
    "Cet état de l'âme est agréable. ",
    "On n'y regarde pas de bien près. ",
    "Les sens du rêveur sont pour ainsi dire oblitérés. ",
    "Ils en diffèrent que par un moindre degré d'isolement de l'âme. ",
    "L'esprit s'y repose agréablement. ",
    "Ne dites pas que ces rêves de la veille ne ressemblent au somnambulisme qu'en apparence. ",
    "Les rêveries en questions.  ",
    "Elle se voit dans le passé ",
    "On me pardonnera. ",
    "Il est entièrement absorbé par les idées. ",
    "Les idées du somnambulisme. ",
    "Une fenêtre et des sons viennent frapper mon oreille. ",
    "J'entends chanter un air et je sais que je l'ai déjà entendu. ",
    "L'âme à la fois une et multiple. ",
    "Vous ne pourriez peut-être pas le dire. ",
    "Voilà précisément ce qui arrive. ",
    "Vous connaissez immédiatement votre état actuel. ",
    "Nos sens étaient fermés au monde extérieur. ",
    "Des idées qui ne se rapportaient à rien de matériel. ",
    "Les sens font subitement invasion dans l'âme. ",
    "La condition fondamentale du souvenir. ",
    "Involontaire  ou volontaire. ",
    "Vous êtes, par exemple, assis dans votre chambre. ",
    "Vous vous levez pour vous rendre dans une autre partie de la maison. ",
    "Il a la conscience des objets extérieurs. ",
    "Totalement étranger au premier. ",
    "Cet état d'isolement. ",
    "Cette absence de toute distraction. ",
    "L’auteur a confondu le sommeil et les songes avec le somnambulisme et ses phénomènes. ",
    "Cette concentration de l'attention. ",
    "La rapidité des conceptionse. ",
    "Nous privant de notre liberté. ",
    "L'isolement des somnambules. ",
    "Le froid qu'il peut faire  aujourd'hui. ",
    "Le seul moyen de vous en souvenir, c'est de retourner à votre point de départ. ",
    "Toute connaissance approfondie des choses. ",
    "C'est qu'il a fallu tout ce temps pour se recueillir. ",
    "L'association des idées. ",
    "Rappelez-vous un de ces moments . ",
    "La pesanteur de vos organes. ",
    "La lourde chaine de son organisation matérielle. ",
    "Il sera maintenant superflu. ",
    "Et je l'admets dans sa généralité. ",
    "Je connais votre explication. ",
    "J'ai l'habitude de monter ma montre tous les soirs, quand je me dispose à me mettre en lit. ",
    "L'idée de la montre que j'ai eue sous les yeux et de la table de nuit où je l'ai placée. ",
    "Nous voilà sur la voie de l'explication. ",
    "Je le reconnais, je lui fais un signe. ",
    "Je revois cet ami et je me souviens de l'avoir. ",
    "Somewhere, someone's calling me when the chips are down. ",
    "Wake up in the wrong town, boy you really get around. ",
    "Nous ne nous souvenons jamais des premières années de notre enfance. ",
    "Il y aura bientôt vingt ans. ",
    "Le premier acte de son existence dans le temps. ",
    "Tout ce qui est vivant et organisé . ",
    "Des châteaux en Espagne. ",
    "L'auteur ne le dit pas. ",
    "J'ai peine à le croire. ",
    "Les premières années de la vie sont en quelque sorte la vie utérine de l'intelligence.",
    "Les idées, le souvenir. ",
    "L'erreur fondamentale ! ",
    "L'abolition du moi ! ",
    "Mais il y a plus que cela. ",
    "un noeud dans son mouchoir . ",
    "Cette  singularité d'une mémoire qui ne s'exerce que d'un côté. ",
    "Nous le verrons. ",
    "La conscience du moi. ",
    "Le souvenir est donc bien inconciliable. ",
    "Le somnambule spontané. ",
    "Le plus léger exercice de la volonté. ",
    "Un noeud dans ses cheveux. ",
    "Ce qui n'est pas moins vrai. "
];



var contenu = "";


if (maxlength < minlength) {
    console.log('maxlength must be more than the minimum length');
    return false;
}

for (var i = 0; i < paragraphs; i++) {
    // $('.paragraphs').append('<p class="generated"></p>');

    // contenu+= randomTag();

    lyrics.sort(randomize);
    var sentenceCount = randomNumber(minlength, maxlength);

    for (var x = 0; x < sentenceCount; x++) {
        contenu += lyrics[x];   
    }

    contenu += "\n\n";
}

// console.log(contenu);

fs.writeFile("./paroles.txt", contenu, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Le fichier a été sauvé :-)");
});