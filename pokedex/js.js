
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApiSecurePlus =  async () => {
//     try {
//         const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
//         console.log(rawData);
        
//         // Vérification du statut de la réponse
            // if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            //     console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            //     return; // Sortir de la fonction si la réponse n'est pas OK
            // }

//         const transformedData = await rawData.json();
//         console.log(transformedData);
//         apiDiv.innerHTML = transformedData.name.fr;
//     } catch (error) {
//         console.error("Erreur lors de l'appel à l'API : ", error);
//     }
// }
// contactApiSecurePlus();
const apiDiv = document.querySelector('.apiContacter');
async function drawPokedex() {
    try {
        const data = await fetch('https://tyradex.vercel.app/api/v1/gen/1').then(res => res.json());
        data.forEach(pokemon => {
            const card = document.createElement('ul');
            card.className = 'card col-2 m-2 p-2';
            card.innerHTML = `
                <img src="${pokemon.sprites.regular}" alt="${pokemon.name.fr}">
                <h5>${pokemon.name.fr}</h5>
                <li>Type : ${pokemon.types.map(type => type.name).join(', ')}</li>
                <li>Poids : ${pokemon.weight}</li>
                <li>Taille : ${pokemon.height}</li>
            `;
            const shinyButton = document.createElement('button');
            shinyButton.textContent = 'Afficher Shiny';
            shinyButton.className = 'btn btn-primary btn-sm mt-2';
            
            // Gestionnaire d'événements pour afficher la version shiny
            shinyButton.addEventListener('click', () => {
                const img = card.querySelector('img');
                const isShiny = img.src === pokemon.sprites.shiny;
                img.src = isShiny ? pokemon.sprites.regular : pokemon.sprites.shiny;
                shinyButton.textContent = isShiny ? 'Afficher Shiny' : 'Version Normale';
            });
            card.append(shinyButton);
            apiDiv.append(card);
        });
    } catch (error){
        console.error('Erreur : ',error);
    }
}
drawPokedex();