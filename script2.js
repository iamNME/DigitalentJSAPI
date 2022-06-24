function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

let modul = GetURLParameter('id');

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const fetchDetailData = async () => {
    const response = await fetch(`https://imdb-api.com/en/API/Title/k_o0tn28j4/${modul}`, requestOptions);

    const json = await response.json();
    console.log(json);

    const actors = json.actorList;

    let data= '';
    let data1 = '';
    for(let i = 0; i < actors.length; i++){
        data1 = data1 + `<div class="col-3 mt-2 mb-2">
                            <img src="${actors[i].image}" height="150" width="150" style="object-fit: cover" alt="actor picture">
                            <p>${actors[i].name}</p>
                        </div>`;
    }

    data = data +   `<div class="col-8">
                        <div class="card">
                            <img src="${json.image}" height="600" alt="poster film">
                            <div class="card-body p-5">
                                <h2 class="mb-3">${json.fullTitle}</h2>
                                <p><strong>Director :</strong> ${json.directors}</p>
                                <p><strong>Genre :</strong> ${json.genres}</p>
                                <p><strong>Rating :</strong> ${json.imDbRating}</p>
                                <p style="text-align: justify"><strong>Short Description :</strong> ${json.plot}</p>
                                <p>
                                    <strong>Actors :</strong>
                                    <div class="row">
                                        ${data1}
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>`;
    // data = data + json.fullTitle;

    document.getElementById("tampilDetailData").innerHTML = data;
}

fetchDetailData();

// fetch(`https://imdb-api.com/en/API/Title/k_o0tn28j4/${modul}`, requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));