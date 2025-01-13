export function moduleHello(name) {
    console.log('Bonjour depuis hello.js '+ name);
    // alert(`Bonjour ${name}`)
    // return `Bonjour depuis hello.js : ${name}`
}

export async function changeTitle(balise){
    const newText = await fetch('https://api.chucknorris.io/jokes/random').then(res=> res.json());
    console.log(newText)
    return balise.innerText = newText.value;
}