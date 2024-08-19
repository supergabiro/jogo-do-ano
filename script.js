const storyText = [
    {
        text: "Você se encontra em uma encruzilhada na floresta. Um caminho leva para uma caverna escura, enquanto o outro leva para uma clareira iluminada. Qual caminho você escolhe?",
        choices: [
            { text: "Caminho para a caverna", next: 1 },
            { text: "Caminho para a clareira", next: 2 }
        ]
    },
    {
        text: "Dentro da caverna, você vê dois caminhos: um que parece estar seco e outro que está alagado. Qual caminho você segue?",
        choices: [
            { text: "Caminho seco", next: 3 },
            { text: "Caminho alagado", next: 4 }
        ]
    },
    {
        text: "Na clareira, você encontra um velho altar com uma caixa misteriosa e um caminho que continua pela floresta. O que você faz?",
        choices: [
            { text: "Abrir a caixa", next: 5 },
            { text: "Seguir pela floresta", next: 6 }
        ]
    },
    {
        text: "Você segue o caminho seco na caverna e encontra um baú com um tesouro. Fim da jornada!",
        choices: []
    },
    {
        text: "Você segue o caminho alagado e encontra um lago subterrâneo. Fim da jornada!",
        choices: []
    },
    {
        text: "A caixa misteriosa na clareira contém um mapa para um tesouro escondido. Fim da jornada!",
        choices: []
    },
    {
        text: "Seguir pela floresta leva você a uma cidade perdida. Fim da jornada!",
        choices: []
    }
];

let currentIndex = 0;

function updateStory() {
    const story = storyText[currentIndex];
    document.getElementById('story').textContent = story.text;
    document.getElementById('choice1').textContent = story.choices[0]?.text || "";
    document.getElementById('choice2').textContent = story.choices[1]?.text || "";
    document.getElementById('choice1').style.display = story.choices[0] ? 'block' : 'none';
    document.getElementById('choice2').style.display = story.choices[1] ? 'block' : 'none';
}

function makeChoice(index) {
    const nextIndex = storyText[currentIndex].choices[index]?.next;
    if (nextIndex !== undefined) {
        currentIndex = nextIndex;
        updateStory();
    }
}

document.getElementById('choice1').addEventListener('click', () => makeChoice(0));
document.getElementById('choice2').addEventListener('click', () => makeChoice(1));

updateStory();
