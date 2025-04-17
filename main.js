let form = document.querySelector('form');
let helpPrenom = document.getElementById('helpPrenom');
let helpNom = document.getElementById('helpNom');
let helpEmail = document.getElementById('helpEmail');
let helpMotsDePasses = document.getElementById("helpMotsDePasse")
let helpConfPassword = document.getElementById('helpConfPassword');
let produitHidden = document.getElementById('produitHidden');
let blocaProduit = document.getElementById('blocaProduit');
let inscriptionBtn = document.getElementById('insBtn');
let cachProduit=document.getElementById('cachProduit');
blocaProduit.disabled = true;
produitHidden.style.display = 'none';
cachProduit.style.display = 'none';

/*******************************************************************************************************************/

document.getElementById('produitForm').addEventListener('submit', (e)=> {
    e.preventDefault();
    cachProduit.style.display = 'block';
    let nomProduit = document.getElementById('nomProduit').value;
    let quantite  = document.getElementById('quantite').value;
    let libelle = document.getElementById('libelle').value;
    let ceerProduit= document.createElement('tr');
    ceerProduit.innerHTML = `
    <td>${nomProduit}</td>
    <td>${quantite}</td>
    <td>${libelle}</td>
      <td> 
      <button class="btn btn-primary edit">Modifier</button>
      <button class="btn btn-danger supp">Supprimer</button>
      </td>
`
    ceerProduit.querySelector('.supp').addEventListener('click', (e)=> {
        ceerProduit.remove()
    })
    ceerProduit.querySelector('.edit').addEventListener('click', ()=> {

        let editedProduit =prompt('changer',nomProduit);
        let editedquantite =prompt('changer',quantite);
        let editedlibelle =prompt('changer',libelle);

            if (editedProduit !== null ) ceerProduit.cells[0].textContent= editedProduit;
            if (editedquantite !== null ) ceerProduit.cells[1].textContent=editedquantite;
            if (editedlibelle !== null ) ceerProduit.cells[2].textContent=editedlibelle;



    })
    document.querySelector('tbody').appendChild(ceerProduit);
})

//filtrer les quantite et nomProduit
document.getElementById('search').addEventListener('input', (e)=> {
   
    produitForm.innerHTML = '';
    let searchValue = e.target.value.toLowerCase();
    let produits = document.querySelectorAll('tbody tr');
    produits.forEach((produit) => {
        let nomProduit = produit.cells[0].textContent.toLowerCase();
        let quantite = produit.cells[1].textContent.toLowerCase();
        let libelle = produit.cells[2].textContent.toLowerCase();
        if (nomProduit.includes(searchValue) || quantite.includes(searchValue) || libelle.includes(searchValue)) {
            produit.style.display = 'table-row';
        } else {
            produit.style.display = 'none';
        }
    });
    cachProduit.style.display = 'block';

})
   

/*******************************************************************************************************************/
form.addEventListener("input", (e) => {
    let prenom = document.querySelector('#prenom');
    let nom = document.querySelector('#nom');
    let email = document.querySelector('#email');
    let motsDePasse = document.querySelector('#motsDePasse');
    let confirmationPasse = document.querySelector('#confirmationPasse');
    veryEmail(email)
    verificationChamps(prenom, nom)
    veryPassword(motsDePasse)
    if (confirmationPasse.value !== motsDePasse.value) {
        helpConfPassword.innerHTML = `<span class="text-danger">"Le mot de passe n'est pas 
        conforme</span>`;
    } else {
        helpConfPassword.innerHTML = "";
    }


});
/******************************************************************************************************************/


/******************************************************************************************************************/

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//
//     let prenom = document.querySelector('#prenom').value;
//     let nom = document.querySelector('#nom').value;
//     let email = document.querySelector('#email').value;
//     let motsDePasse = document.querySelector('#motsDePasse').value;
//     let confirmationPasses = document.querySelector('#confirmationPasse').value;
//     let newElement = document.createElement('div');
//     let element = document.createElement('div');
//
//     newElement.innerHTML = `
//           <div class="card">
//             <img src="https://picsum.photos/200" class="card-img-top py-3 " alt="aleatoir image" style="width: 18rem; margin: auto ; border-radius: 90%" >
//             <div class="card-body">
//             <h2 class="card-title">Bienvenue ${prenom} ${nom}</h2>
//             <p class="card-text">...</p>
//             </div>
//          </div>
// `;
//         element.innerHTML = `
//             <div class="card ">
//             <img src="https://picsum.photos/200" class="card-img-top " alt="aleatoir image" style="width: 100%; height: 247px; object-fit: cover" >
//             <div class="card-body">
//             <h2 class="card-title">${prenom}</h2>
//             <hr>
//             <h2 class="card-title">${nom}</h2>
//             <hr>
//             <p class="card-text">${email}</p>
//             </div>
//          </d
//         `;
//
//
//     blocaProduit.disabled = false;
//     document.getElementById('matriculePersoon').appendChild(newElement);
//     document.getElementById('identityPersoon').appendChild(element);
//     console.log(newElement);
//     form.reset()
//     inscriptionBtn.disabled = true;
//     inscriptionBtn.innerHTML = `<span class="text-secondary">${nom}👋</span>`;
//
//
//
// })
form.addEventListener("submit", (e) => {
    e.preventDefault();
    NProgress.start(); // Démarre la progress bar
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    let email = document.querySelector('#email').value;
    let motsDePasse = document.querySelector('#motsDePasse').value;
    let confirmationPasses = document.querySelector('#confirmationPasse').value;
    setTimeout(function() {
        NProgress.done(); // Termine la progress bar
  
        // Redirige vers l'accueil
        // window.location.href = 'index.html';
   
   
    if (motsDePasse === confirmationPasses) {
        let newElement = document.createElement('div');
        let element = document.createElement('div');

        newElement.innerHTML = `
            <div class="card">
                <img src="https://picsum.photos/200" class="card-img-top py-3" alt="aleatoir image" style="width: 18rem; margin: auto ; border-radius: 90%">
                <div class="card-body">
                    <h2 class="card-title">Bienvenue ${prenom} ${nom}</h2>
                    <p class="card-text border-success">Inscription réussie 🎉</p>
                </div>
            </div>
        `;

        element.innerHTML = `
            <div class="card">
                <img src="https://picsum.photos/200" class="card-img-top" alt="aleatoir image" style="width: 100%; height: 247px; object-fit: cover">
                <div class="card-body">
                    <h2 class="card-title">${prenom}</h2>
                    <hr>
                    <h2 class="card-title">${nom}</h2>
                    <hr>
                    <p class="card-text">${email}</p>
                </div>
            </div>
        `;

        blocaProduit.disabled = false;
        document.getElementById('matriculePersoon').appendChild(newElement);
        document.getElementById('identityPersoon').appendChild(element);
        form.reset();
        inscriptionBtn.disabled = true;
        inscriptionBtn.innerHTML = `<span class="text-secondary">${nom}👋</span>`;
        // Hide the modal after submission
        let modal = bootstrap.Modal.getInstance(document.getElementById('inscriptionModal'));
        modal.hide(); // Add this line
    }
    // Sinon, ne rien faire (ni message d’erreur, ni création de carte)
}, 2000)
});


/******************************************************************************************************************/

function verificationChamps(prenom, nom) {
    if (prenom.value.trim() === "") {
        helpPrenom.innerHTML = `<span class="text-danger">champs requis</span>`;
    } else {
        helpPrenom.innerHTML = "";
    }
    if (nom.value.trim() === "") {
        helpNom.innerHTML = `<span class="text-danger">champs requis</span>`;
    } else {
        helpNom.innerHTML = "";
    }
}

function veryEmail(mgs) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regEmail = emailRegex.test(mgs.value);
    if (!regEmail) {
        // s'il ne correspond pas
        helpEmail.innerHTML = `<span class="text-danger">Format email incorrect</span>`;
        console.error('E-mail doesn\'t match');
    } else {
        helpEmail.innerHTML = `<span class="text-success ">Format email correct</span>`
    }
}

const veryPassword = (psw) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    let regPassword = passwordRegex.test(psw.value)
    if (!regPassword) {
        helpMotsDePasses.innerHTML = `<span class="text-danger">Le mot de passe doit contenir au 
         moins une majuscule, un chiffre et un caractère spécial (8 caractères minimum)</span>`;

    } else {
        helpMotsDePasses.innerHTML = `<span class="text-success">Accepted</span>`;
    }
}
/******************************************************************************************************************/
let affichProduit=()=>{
    produitHidden.style.display = 'block';
     produitHidden.style.transitionDuration = '5s';

}

/******************************************************************************************************************/

