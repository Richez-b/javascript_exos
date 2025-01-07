log = console.log;
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg',
  };
userData["adress"] = "44 rue du truc";
userData.name = ' John SEAGAL'

let profil = document.querySelector('div');
profil.style.display = 'flex';
profil.style.justifySelf = 'center';

profil.style.backgroundImage = 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)';
profil.style.color = 'white';
profil.style.fontWeight = 'bold';
profil.style.fontSize = '18px';
profil.style.width= '450px';
profil.style.height= '650px';
profil.style.lineHeight= '1px';

let img = document.createElement('img');

img.setAttribute('src', userData.img);
img.style.height = '300px';
img.style.padding = '10px';

profil.appendChild(img);

for (const [key, value] of Object.entries(userData)) {
    if(key == 'img'){
        continue;
    }
    let data = document.createElement('p');
    data.innerText = value;
    data.style.paddingLeft = '20px'
    profil.append(data);
}

profil.style.flexDirection = 'column';
