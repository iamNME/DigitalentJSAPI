const fetchData = async () => {
    const valueInputFilm = document.getElementById("inputFilm").value;

    const response = await fetch(`https://imdb-api.com/en/API/Search/k_o0tn28j4/${valueInputFilm}`, {method: 'GET', redirect: 'follow'});
    // console.log(response);

    const json = await response.json();
    // console.log(json);

    const results = await json.results;
    console.log(results);

    let data= '';
    for(let i = 0; i < results.length; i++){
        data = data +   `<div class="col-4">
                            <div class="card mt-2 mb-2">
                                <img src="${results[i].image}" height="350" alt="poster film">
                                <div class="card-body">
                                    <h3>${results[i].title} ${results[i].description}</h3>
                                    <a href="detailFilm.html?id=${results[i].id}" class="btn btn-success" style="margin-top: 3rem">Lihat Detail</a>
                                </div>
                            </div>
                        </div>`;
    }

    document.getElementById("tampilData").innerHTML = data;
}

// const fetchDetailData = async () => {
//     const response = await fetch(`https://imdb-api.com/en/API/Title/k_o0tn28j4/${modul}`, {method: 'GET', redirect: 'follow'});

//     const json = await response.json();

//     const results = await json.results;
//     console.log(results);

//     let data= '';
//     for(let i = 0; i < results.length; i++){
//         data = data +   `<div class="col-4">
//                             <div class="card mt-2 mb-2">
//                                 <img src="${results[i].image}" height="350" alt="poster film">
//                                 <div class="card-body">
//                                     <h3>${results[i].title} ${results[i].description}</h3>
//                                     <a href="detailFilm.html?id=${results[i].id}" class="btn btn-success" style="margin-top: 3rem">Lihat Detail</a>
//                                 </div>
//                             </div>
//                         </div>`;
//     }

//     document.getElementById("tampilDetailData").innerHTML = data;
// }