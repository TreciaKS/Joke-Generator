// grab and store ids 
let displayEmojies = document.getElementById("display-emojis")
let welcomeText = document.getElementById("welcome-text")
let generateBtn = document.getElementById("generate-btn")

// generate random emojies after joke is generated (clicked)
function generateEmojies() {
    let randomEmojies = ["🤣🤣🤣", "😅😅😅", "🤭🤭🤭", "😋😋😋", "😂😂😂", "😎😎😎", "😛😛😛", "😜😜😜", "🤪🤪🤪"]
    let myEmoji = randomEmojies[Math.floor(Math.random() * randomEmojies.length)]
    displayEmojies.textContent = myEmoji

    // to change btn to red and adds emojies to welcome text
    welcomeText.textContent = `Funny isn't it? 😋` 
    generateBtn.style.backgroundColor = 'red'
}

function generateJoke() {

    fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes?limit=30", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jokes-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "00cdce758dmshf568644be6eb228p14b320jsn22e767e76c0c"
	}
})
    .then(res => res.json())
    .then(data => {
        const myJoke = data

        // console.log(data)
        let text = ""
        for (let item of myJoke) {
            text = `
                <p>${item.joke}</p>
            `
        }
        document.getElementById("display-joke").innerHTML = text
    })
    .catch(err => {
        console.error(err);
    }) 

generateEmojies() 
}