
async function fetchData() {
    const dir = '../assets/jsons/data.json';
    const res = await fetch(dir);
    const data = await res.json()
    return data
}

function createPortada(){

}

function createInfo(){

}

function createFooter(){

}

const data = fetchData();
createPortada();
createInfo();
createFooter();







