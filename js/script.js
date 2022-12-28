console.log('JS OK');


/* # Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*

#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. */


// Array oggetti dei post 

const post = [
    {
        id: '1',
        propic: 'https://picsum.photos/300/300',
        author: 'Phil Mangione',
        date: '11-21-2022',

        caption: '',
        img: 'https://picsum.photos/300/300',
        likes: 80,
    },

    {
        id: '2',
        propic: 'https://picsum.photos/300/300',
        author: 'Carla Maggi',
        date: '10-21-2021',

        caption: '',
        img: 'https://picsum.photos/300/300',
        likes: 50,


    },


    {
        id: '3',
        propic: 'https://picsum.photos/300/300',
        author: 'Marta Andreoli',
        date: '12-22-2022',

        caption: '',
        img: 'https://picsum.photos/300/300',
        likes: 90,


    }


]


console.log(post);


// Recupero elemento dalla pagina 

const postContainer = document.getElementById("container");






let posts = '';

for (let i = 0; i < post.length; i++) {
    
    posts += `

    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${post[i].propic}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${post[i].author}</div>
                    <div class="post-meta__time">${post[i].date}</div>
                </div>
            </div>
        </div>

        <div class="post__text">${post[i].caption}</div>
        <div class="post__image">
          <img src="${post[i].img}" alt="" />
        </div>

        

        



    </div>`;  

}






postContainer.innerHTML += posts;










