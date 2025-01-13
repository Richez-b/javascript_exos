l = console.log
const user = document.querySelector('#userCard');
user.style.width = '500px'
async function randomUser(){
    try {
        const data = await fetch('https://randomuser.me/api').then(res => res.json());
        l(data)

        let img = user.querySelector('img')
        img.setAttribute('src', data.results[0].picture.thumbnail);

        let divBody = user.querySelector('.card-body');

        let h5 = divBody.querySelector('h5')
        h5.innerText = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;

        
        let p = user.querySelector('p');
        p.innerText = data.results[0].email + '\n' +
                        'Adresse : ' + data.results[0].location.postcode + ' - ' +
                        data.results[0].location.city + '\n'+
                        `(${data.results[0].location.state}-${data.results[0].location.country})`+  '\n' + data.results[0].cell
        let a = user.querySelector('a');
        a.className = 'btn btn-warning'
        a.addEventListener('click',()=> {
            randomUser();  
        },{once:true})
    } catch (error){
        console.error('Pas de donées ! ');
    }
}
randomUser()