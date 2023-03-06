// Number 1
function instagramPost(handle, content, imageLink, views, likes){
    this.handle = handle,
    this.content = content,
    this.imageLink = imageLink,
    this.views = views,
    this.likes = likes
}

// Number 2
post1 = new instagramPost('forgoodcode', 'picture', 'www.instagram.com/p/CpD5VrPraPM/?utm_source=ig_web_copy_link', 40567, 20354)
post2 = new instagramPost('theampedfamily', 'reels', 'www.instagram.com/reel/CpD1vrOuvIr/?utm_source=ig_web_copy_link', 5200, 4916)

//Number 3
//a
const createPerson = (name, age, location) => {
    return{
        name,
        age,
        location
    }
}

const musa = createPerson('musaDawodu', 19, 'lagos')


//b
const createJambScores = (eng, govt, lit, crk) => {
    return{
        eng,
        govt,
        lit,
        crk
    }
}

const jambScores = createJambScores(70, 85, 82, 94)
musa.jambScores = jambScores

//Number 4
//i. the for...in method

const evan = {
    height : '6ft',
    complexion : 'caramel'
}

const ebube = {}

for (let key in evan){
 ebube[key] = evan[key]
}

//ii. object.assign

const jean = Object.assign({}, evan)

//iii. spread operator

const aku = {...evan}

//Number 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}

for (let entry of Object.entries(presidentialCandidates)){
    console.log(`${entry[1]} is the presidential candidate of ${entry[0]}`);
}