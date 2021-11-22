// Your challenge

//     Write an async function which takes an apiUrl and jokeId which returns a promise.
//     The data will need to be filtered to get the specified joke by id.
//     When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.

// Handle error cases

//     If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
//     Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.

// Throw error in a promise style
// Info

// Get the data using the mocked fetch(url) function, which implements the basics of the fetch api. Learn about fetch. Learn about async/await.

// Joke data shape:

// {
//   jokes: [{ 
//     id: 101,
//     setup: "Who is Santa's favorite singer?",
//     punchLine: "Elf-is Presley!"
//   },
// ...moreJokes]
// // Use for your tests ^^


async function sayJoke(apiUrl, jokeId){
	try{
		const res = await fetch(apiUrl)
		const data = await res.json()
		const jokes = data.jokes.map(x => x)
		const funshuns = {
			getJoke: (joke) => jokes.filter(x => x.id === x.joke),
			saySetup: () => this.getJoke(jokeId).setUp,
			sayPunchLine: () => this.getJoke(jokeId).punchLine
		}
		return jokes.id === jokeId ? `Setup: ${funshuns.saySetup()}\n Punchline: ${funshuns.sayPunchLine()}` : `new Error('No jokes at url: ${apiUrl})`
	}catch(err){
		console.error(`new Error('No jokes at url: ${apiUrl})`)
	}
}



console.log(sayJoke('http://great.jokes/christmas', 101))