const ramalsApoio = [
    {
        setor:"REGINA - COPEIRA",
        ramal:"9821",
    },
    {
        setor:"SALA DE REUNIÃO/ 3° ANDAR",
        ramal:"9843",
    },
]

const ramalsDiretoria = [
    {
        setor:"FERNANDO ",
        ramal:"9825/9826",
    },
    {
        setor:"HELCIO",
        ramal:"9840",
    },
    {
        setor:"TEUBER",
        ramal:"9827",
    },
    {
        setor:"NIVEA ",
        ramal:"9825/9835",
    },
    {
        setor:"RENAN ",
        ramal:"9808",
    }
]

const ramalsComercial = [
    {
        setor:"CLAUDINEI",
        ramal:"9829",
    },
    {
        setor:"ALAN",
        ramal:"9819/9832",
    },
    
]

const ramalsContabilidade = [
    {
        setor:"ANDREIA",
        ramal:"9822",
    },
    {
        setor:"MAICON",
        ramal:"9823",
    },
    {
        setor:"JOÃO VITOR",
        ramal:"9814",
    },
    {
        setor:"LETICIA",
        ramal:"9847",
    },
    {
        setor:"ROSANGELA",
        ramal:"9816",
    }
]

const ramalsFinanceiro = [
    {
        setor:"ELIANA",
        ramal:"9831",
    },
    {
        setor:"FLAVIA",
        ramal:"9836",
    },
    {
        setor:"GUILHERME",
        ramal:"9837",
    },
    {
        setor:"SONIA",
        ramal:"9830",
    },
]

const ramalsJuridico = [
    {
        setor:"CARINA",
        ramal:"9834",
    },
    {
        setor:"IVINA / DR. CARLOS",
        ramal:"9844",
    },
]

const ramalsRecepcao = [
    {
        setor:"RECEPÇÃO - KRYS",
        ramal:"9800/9812",
    },
]

const ramalsContaCorrente = [
    {
        setor:"RAIRA",
        ramal:"9842",
    },
    {
        setor:"RODRIGO",
        ramal:"9838",
    },
]

const ramalsTi = [
    {
        setor:"WELLINGTON - TI",
        ramal:"9899",
    },
    {
        setor:"SIVALDO/NICOLAS - USINA",
        ramal:"9298",
    },
]


function createcollumApoio () {
        const tbody = document.querySelector("#tbodyApoio");

        ramalsApoio.forEach((obj)=>{
        const {setor, ramal} = obj;

        const item = document.createElement("div");
        item.classList.add("ramal-item")

        const nomeSetor = document.createElement("span");
        nomeSetor.classList.add("ramal-item")
        nomeSetor.textContent = setor;

        const numeroRamal = document.createElement("span");
        numeroRamal.classList.add("ramal-numero");
        numeroRamal.textContent = ramal;

        item.appendChild(nomeSetor);
        item.appendChild(numeroRamal);

        tbody.appendChild(item);
        })
}

createcollumApoio();

function createcollumDiretoria () {
    const tbody = document.querySelector("#tbodyDiretoria");

    ramalsDiretoria.forEach((obj)=>{
    const {setor, ramal} = obj;

    const item = document.createElement("div");
    item.classList.add("ramal-item");

    const nomeSetor = document.createElement("span");
    nomeSetor.classList.add("ramal-item")
    nomeSetor.textContent = setor;

    const numeroRamal = document.createElement("span");
    numeroRamal.classList.add("ramal-numero");
    numeroRamal.textContent = ramal;

    item.appendChild(nomeSetor);
    item.appendChild(numeroRamal);

    tbody.appendChild(item);
    })
}

createcollumDiretoria();

function createcollumComercial () {
    const tbody = document.querySelector("#tbodyComercial");

    ramalsComercial.forEach((obj)=>{
    const {setor, ramal} = obj;

    const item = document.createElement("div");
    item.classList.add("ramal-item");

    const nomeSetor = document.createElement("span");
    nomeSetor.classList.add("ramal-item");
    nomeSetor.textContent = setor;

    const numeroRamal = document.createElement("span");
    numeroRamal.classList.add("ramal-numero");
    numeroRamal.textContent = ramal;

    item.appendChild(nomeSetor);
    item.appendChild(numeroRamal);

    tbody.appendChild(item);

    })
}

createcollumComercial ();

function createcollumContabilidade () {
    const tbody = document.querySelector("#tbodyContabilidade");

    ramalsContabilidade.forEach((obj)=>{
        const {setor,ramal} = obj;

        const item = document.createElement("div");
        item.classList.add("ramal-item");

        const nomeSetor = document.createElement("span");
        nomeSetor.classList.add("ramal-item");
        nomeSetor.textContent = setor;

        const numeroRamal = document.createElement("span")
        numeroRamal.classList.add("ramal-numero");
        numeroRamal.textContent = ramal


        item.appendChild(nomeSetor);
        item.appendChild(numeroRamal);

        tbody.appendChild(item);

    })
}

createcollumContabilidade ();

function createcollumFinanceiro () {
    const tbody = document.querySelector("#tbodyFinanceiro");

    ramalsFinanceiro.forEach((obj)=>{
        const {setor,ramal} = obj;

        const item = document.createElement("div");
        item.classList.add("ramal-item");

        const nomeSetor = document.createElement("span");
        nomeSetor.classList.add("ramal-item");
        nomeSetor.textContent = setor;

        const numeroRamal = document.createElement("span")
        numeroRamal.classList.add("ramal-numeor");
        numeroRamal.textContent = ramal

        item.appendChild(nomeSetor);
        item.appendChild(numeroRamal);

        tbody.appendChild(item);
    })
}

createcollumFinanceiro();

function createcollumJuridico () {
    const tbody = document.querySelector("#tbodyJuridico");

    ramalsJuridico.forEach((obj)=>{
        const {setor, ramal} = obj;
        const item = document.createElement("div");
        item.classList.add("ramal-item");

        const nomeSetor = document.createElement("span");
        nomeSetor.classList.add("ramal-item");
        nomeSetor.textContent = setor;

        const numeroRamal = document.createElement("span");
        numeroRamal.classList.add("ramal-numero");
        numeroRamal.textContent = ramal;

        item.appendChild(nomeSetor);
        item.appendChild(numeroRamal);

        tbody.appendChild(item);
    })
}

createcollumJuridico();

function createcollumRecepcao () {
    const tbody = document.querySelector("#tbodyRecepcao");

    ramalsRecepcao.forEach((obj)=>{
        const {setor,ramal} = obj;

        const item = document.createElement("div");
        item.classList.add("ramal-item");

        const nomeSetor = document.createElement("span");
        nomeSetor.classList.add("ramal-item");
        nomeSetor.textContent = setor;

        const numeroRamal = document.createElement("span");
        numeroRamal.classList.add("ramal-numero");
        numeroRamal.textContent = ramal;

        item.appendChild(nomeSetor);
        item.appendChild(numeroRamal);

        tbody.appendChild(item);
    })
}

createcollumRecepcao ();

function createcollumContaCorrente () {
    const tbody = document.querySelector("#tbodyContaCorrente");

    ramalsContaCorrente.forEach((obj)=>{
        const {setor,ramal} = obj;

        const item = document.createElement("div");
        item.classList.add("ramal-item");

        const nomeSetor = document.createElement("span");
        nomeSetor.classList.add("ramal-item")
        nomeSetor.textContent = setor;

        const numeroRamal = document.createElement("span");
        numeroRamal.classList.add("ramal-numero");
        numeroRamal.textContent = ramal;

        item.appendChild(nomeSetor);
        item.appendChild(numeroRamal);

        tbody.appendChild(item);
    })
}

createcollumContaCorrente();

function createcollumTi () {
    const tbody = document.querySelector("#tbodyTi");

    ramalsTi.forEach((obj)=>{
        const {setor,ramal} = obj;

        const item = document.createElement("div");
        item.classList.add("ramal-item");
    

        const nomeSetor = document.createElement("span");
        nomeSetor.classList.add("ramal-item");
        nomeSetor.textContent = setor;

        const numeroRamal = document.createElement("span");
        numeroRamal.classList.add("ramal-numero");
        numeroRamal.textContent = ramal;

        item.appendChild(nomeSetor);
        item.appendChild(numeroRamal);

        tbody.appendChild(item);
    })
}

createcollumTi();