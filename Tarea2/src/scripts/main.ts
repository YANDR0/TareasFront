
async function dynamicData() {
    const dir = '../assets/jsons/data.json';
    const res = await fetch(dir);
    const data = await res.json();

    // Creación portada
    var tmpData = data.Portada
    var actualPage = document.getElementsByClassName('Portada')[0];
    var divPortada = document.createElement("div");
    
    for(let i in tmpData){
        let hs = document.createElement("h2");
        let text = document.createTextNode(i);
        hs.appendChild(text);
        divPortada.appendChild(hs);

        for(let j = 0; j < tmpData[i].length; j++){
            let ps = document.createElement("p");
            text = document.createTextNode(tmpData[i][j]);
            ps.appendChild(text);
            divPortada.appendChild(ps);
        }
    }
    actualPage.appendChild(divPortada);


    // Creacion info
    tmpData = data.Info;
    actualPage = document.getElementsByClassName('Info')[0];

    for(let i = 0; i < tmpData.length; i++){
        let key = Object.keys(tmpData[i])[0];
        let divs = document.createElement("div");
        let hs = document.createElement("h2");
        let text = document.createTextNode(key);
        let uls = document.createElement("ul");
        hs.appendChild(text);
        divs.appendChild(hs);
        
        for (let j = 0; j < tmpData[i][key].length; j++){
            let lis = document.createElement("li");
            text = document.createTextNode(tmpData[i][key][j]);
            lis.appendChild(text);
            uls.appendChild(lis)
        }

        divs.appendChild(uls);
        actualPage.appendChild(divs)
    }


    //Creacion pie

}

dynamicData()



