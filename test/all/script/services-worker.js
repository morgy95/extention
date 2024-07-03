// const response = await fetch('http://172.29.5.154:3008/');
// const piece = await response.json();

console.log(response);

console.log(location.href);

const btnSumbit = document.getElementById("btnSumbit");
const input = document.querySelectorAll("input");
const makedInput = document.querySelectorAll(".makedInput input");

const inputStatue = [false, false, false, false, false];

const dateObj = new Date();
const mois = dateObj.getUTCMonth() + 1;
const jour = dateObj.getUTCDate();
const année = dateObj.getUTCFullYear();

const date = `${jour}/${mois}/${année}`;

console.log(input.length);

for (let i = 1; i < input.length; i++) {
    input[i].addEventListener("click", () => {
        console.log(input[i].value);

        if(inputStatue[i] == false){
            inputStatue[i] = true;
            console.log(inputStatue[i]);
        }else{
            inputStatue[i] = false;
            console.log(inputStatue[i]);
        }
        
    });
}

btnSumbit.addEventListener("click", () => {
    console.log("btnSumbit cliqué");

    let nbTrue = 0;
    for(let i = 1; i < inputStatue.length; i++) {
        if(inputStatue[i] == true){
            nbTrue++;
        }
    }

    if(nbTrue != 1) {
        alert("Vous devez choisir 1 options");
    }else{

        if(inputStatue[1] == true){
            creationDonnees("passed");
        }else if(inputStatue[2] == true){
            creationDonnees("testé");
        }else if(inputStatue[3] == true){
            creationDonnees("A testé");
        }else if(inputStatue[4] == true){
            creationDonnees("décomission");
        }

    }
    
    });
    
    function creationDonnees(etatCircuit) {
        
    ramplirMakedInput(etatCircuit);
        
    const inputValue = document.querySelector("input").value;
    const dataTest = {
        "circuitName": inputValue,
        "etatCircuit": etatCircuit,
        "datePose": date,
        "dateTest": null,
        "decommission": null,
        "siteCircuit": "LF/LF"
    };
    console.log(dataTest);
    console.log("-----------------------------------------------------------");

    // Sauvegarder les données
    localStorage.setItem('mesDonnees', JSON.stringify(dataTest));
    console.log(dataTest);


    // fetch('http://172.29.5.154/', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/html', // Correction ici
    //     },
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Erreur lors de la requête');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log('Réponse du serveur :', data);
    // })
    // .catch(error => {
    //     console.error('Erreur lors de l\'envoi des données :', error);
    //     console.log('Contenu de la réponse :', response.text());
    // });
    
}


function ramplirMakedInput(etatCircuit) {
    makedInput[0].setAttribute("value", etatCircuit);
    
    switch (etatCircuit) {
        case "passed":
            makedInput[1].setAttribute("value", date);
            makedInput[2].setAttribute("value", date);
            makedInput[3].setAttribute("value", "");
            break;
        case "testé":
            makedInput[1].setAttribute("value", "");
            makedInput[2].setAttribute("value", "");
            makedInput[3].setAttribute("value", date);
        break;
        case "A testé":
            makedInput[1].setAttribute("value", date);
            makedInput[2].setAttribute("value", "");
            makedInput[3].setAttribute("value", "");
        break;
        case "décomission":
            makedInput[1].setAttribute("value", "");
            makedInput[2].setAttribute("value", "");
            makedInput[3].setAttribute("value", date);
        break;
    }

    makedInput[4].setAttribute("value", "LF/LF");

}
