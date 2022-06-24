const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=c4afcdf7-aa0d-4e2f-a0cd-35fd2769d5d8';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=c4afcdf7-aa0d-4e2f-a0cd-35fd2769d5d8';

async function loadRandomMichis() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('random')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        //const img3 = document.getElementById('img3');
        //img.src = data[0].url;

        img1.src = data[0].url;
        img2.src = data[1].url;
        //img3.src = data[2].url;   
    }
}

async function loadFavoritesMichis() {
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favoritos')
    console.log(data)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    }

}

async function saveFavoriteMichis() {
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id: ''
        }),
    });

    const data = await res.json();

    console.log('Save')
    console.log(res)

    if (res.status !== 200) {
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    }

}

loadRandomMichis();
loadFavoritesMichis();