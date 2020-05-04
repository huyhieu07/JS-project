var listQuote = [
    {
        quote: "“Do one thing every day that scares you.”",
        author: "― Eleanor Roosevelt"
    },
    {
        quote: "“We are what we pretend to be, so we must be careful about what we pretend to be.”",
        author: "― Kurt Vonnegut, Mother Night"
    },
    {
        quote: "“When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.”",
        author: "― Paulo Coelho, The Alchemist"
    },
    {
        quote: "“Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.”",
        author: "― Neil Gaiman, Fables & Reflections"
    },
    {
        quote: "“And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.”",
        author: "― Antoine de Saint-Exupéry, The Little Prince"
    },
    {
        quote: "“What's meant to be will always find a way”",
        author: "― Trisha Yearwood"
    },
    {
        quote: "“The flower that blooms in adversity is the rarest and most beautiful of all.”",
        author: "― Walt Disney Company, Mulan"
    },
    {
        quote: "“We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.”",
        author: "― Maya Angelou"
    },
    {
        quote: "“Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.”",
        author: "― Maya Angelou"
    },
    {
        quote: "“You never have to change anything you got up in the middle of the night to write.”",
        author: "― Saul Bellow"
    },
    {
        quote: "“The unexamined life is not worth living.”",
        author: "― Socrates"
    },
    {
        quote: "“Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.”",
        author: "― Roy T. Bennett, The Light in the Heart"
    },
    {
        quote: "“It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.”",
        author: "― Vincent Van Gogh"
    },
    {
        quote: "“Instead of worrying about what you cannot control, shift your energy to what you can create.”",
        author: "― Roy T. Bennett, The Light in the Heart"
    },
    {
        quote: "“The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.”",
        author: "― Kalu Ndukwe Kalu"
    },
    {
        quote: "“Pain is temporary. Quitting lasts forever.”",
        author: "― Lance Armstrong Sally Jenkins, Every Second Counts"
    },
    {
        quote: "“It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.”",
        author: "― Roy T. Bennett"
    },
    {
        quote: "“It's not the load that breaks you down, it's the way you carry it.”",
        author: "― Lou Holtz"
    },
    {
        quote: "“If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.”",
        author: "― Roy T. Bennett, The Light in the Heart"
    },
    {
        quote: "“More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.”",
        author: "― Roy T. Bennett, The Light in the Heart"
    },
    {
        quote: "“Take responsibility of your own happiness, never put it in other people’s hands.”",
        author: "― Roy T. Bennett, The Light in the Heart"
    },
    {
        quote: "“Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.”",
        author: "― Roy T. Bennett"
    },
    {
        quote: "“Life is too short to waste your time on people who don’t respect, appreciate, and value you.”",
        author: "― Roy T. Bennett, The Light in the Heart"
    },
    {
        quote: "“You have power over your mind - not outside events. Realize this, and you will find strength.”",
        author: "― Marcus Aurelius, Meditations"
    },
    {
        quote: "“No man ever steps in the same river twice, for it's not the same river and he's not the same man.”",
        author: "–Heraclitus"
    }
]


function getRandomNumber(range){
    return Math.floor(Math.random() * range)
}

function getQuote(){
    return listQuote[getRandomNumber(listQuote.length)]
}

function Thongdiep(){
    var quoteID = getQuote()
    var quote = quoteID.quote
    var author = quoteID.author
    document.getElementById('showQuote').innerText = quote
    document.getElementById('tacgia').innerText = author
}

window.onload = Thongdiep


