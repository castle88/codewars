// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Examples:

// spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
// spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'


function spongeMeme(sentence) {
	let arr = sentence.split(' ')
	return arr.map((x, i) => {
		if(arr.length % 2 !== 0){
			if(x.length > 3){
				return x.split('').map((y, i) => i % 2 === 0 ? y.toUpperCase() : y.toLowerCase()).join('')
			}else{
				return x.split('').map((y, i) => i % 2 === 0 ? y.toLowerCase() : y.toUpperCase()).join('')
			}
		}else{
			if(i % 2 === 0){
				return x.split('').map((y, i) => i % 2 === 0 ? y.toLowerCase() : y.toUpperCase()).join('')
			}else{
				return x.split('').map((y, i) => i % 2 === 0 ? y.toUpperCase() : y.toLowerCase()).join('')
			}
		}
	}).join(' ')
}
											//  StOp mAkInG SpOnGeBoB mEmEs!
console.log(spongeMeme("stop Making spongebob Memes!"))					// 'StOp mAkInG SpOnGeBoB MeMeS!'
console.log(spongeMeme("testing for odd length sentence"))				// 'TeStInG FoR OdD LeNgTh SeNtEnCe'