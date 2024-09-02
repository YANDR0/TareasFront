
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

    // Creacion pie
    tmpData = data.Pie;
    actualPage = document.getElementsByClassName('Pie')[0];
    
    for(let i in tmpData){
        let divPie = document.createElement("div");
        let hs = document.createElement("h2");
        let text = document.createTextNode(i);
        let uls = document.createElement("ul");
        var correo = "";
        hs.appendChild(text);
        divPie.appendChild(hs);

        for (let j = 0; j < tmpData[i].length; j++){
            let lis = document.createElement("li");
            text = document.createTextNode(tmpData[i][j]['sitio']);
            let link = tmpData[i][j]['link'];
            
            if(!link){
                correo = tmpData[i][j]['sitio'];
                lis.appendChild(text);
            } else {
                let as = document.createElement("a");
                as.href = link.toString();
                as.appendChild(text);
                lis.appendChild(as);
            }

            uls.appendChild(lis);
        }

        divPie.appendChild(uls);

        if(i == "Contacto"){
            divPie.insertAdjacentHTML('beforeend', 
            `<form action="https://formsubmit.co/${correo}" method="POST">
                <input type="text" name="name" placeholder="Nombre" required >
                <input type="email" name="email" placeholder="Correo" required>
                <button type="submit">Enviar</button>
           </form><br>`);
        }

        actualPage.appendChild(divPie);        

    }


}

dynamicData();



