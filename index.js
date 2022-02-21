// grab and store ids 
let displayEmojies = document.getElementById("display-emojis")
let displayJokes = document.getElementById("display-joke")
let welcomeText = document.getElementById("welcome-text")
let generateBtn = document.getElementById("generate-btn")

// generate random emojies after joke is generated (clicked)
function generateEmojies() {
    let randomEmojies = ["🤣🤣🤣", "😅😅😅", "🤭🤭🤭", "😋😋😋", "😂😂😂", "😎😎😎", "😛😛😛", "😜😜😜", "🤪🤪🤪"]
    let myEmoji = randomEmojies[Math.floor(Math.random() * randomEmojies.length)]
    displayEmojies.textContent = myEmoji
}
function generateJoke() {
    welcomeText.textContent = "Funny isn't it? 😉"
    generateBtn.style.backgroundColor = 'red'

    generateEmojies()
}