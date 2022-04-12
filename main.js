

/* Creiamo il nostro array di oggetti che rappresentano ciascun post. 
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes. */

const posts_list = [
    {
        id: 1,
        autore: 'Ginevra Giolitto',
        foto_autore: 'https://unsplash.it/300/300?image=',
        data_pubblicazione: '02/04/2022',
        descrizione: 'un post che dice qualcosa',
        url_immagine: 'https://unsplash.it/300/300?image=',
        contatore_like: 150
    },

    {
        id: 2,
        autore: 'Victor Enache',
        foto_autore: 'https://unsplash.it/300/300?image=',
        data_pubblicazione: '04/10/2022',
        descrizione: "un'altro post che dice qualcosa",
        url_immagine: 'https://unsplash.it/300/300?image=',
        contatore_like: 12
    },

    {
        id: 3,
        autore: 'Andrea Perazzini',
        foto_autore: 'https://unsplash.it/300/300?image=',
        data_pubblicazione: '04/10/2022',
        descrizione: "un'altro post che dice qualcosa",
        url_immagine: 'https://unsplash.it/300/300?image=',
        contatore_like: 35
    },

    {
        id: 4,
        autore: 'Samuele Mazzarini',
        foto_autore: 'https://unsplash.it/300/300?image=',
        data_pubblicazione: '04/05/2022',
        descrizione: "un'altro post che dice qualcosa",
        url_immagine: '',
        contatore_like: 9
    }
]

/* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. */

//elenco degli ID dei post piaciuti
const post_piaciuti = []

posts_list.forEach((post,index) => {
    const all_content = document.querySelector('.all_content')
    const card = document.createElement('div')
    card.classList.add('card')
    all_content.append(card)
    let img_post;
    if(post.url_immagine !== ''){
        img_post = `<img src="${post.url_immagine}" alt="" class="img_post">`
    }
    else{
        img_post = ''
    }

    card.setAttribute("id", `n_${post.id}`);

    card.insertAdjacentHTML("beforeend",

    `<div class="autore"> 
        <img src="${post.foto_autore}" alt="" class="img_autore"> 
        <div class="nome_data"> 
            <div class="nome"> 
                ${post.autore}
            </div>
            <!-- /.nome -->
            <div class="data">
                ${post.data_pubblicazione}
            </div>
            <!-- /.data -->
        </div>
        <!-- /.nome_data -->
    </div>
    <!-- /.autore -->
    <div class="post_text">
        ${post.descrizione}
    </div>
    <!-- /.post_text -->
    <div class="img_post_contenitore">
     ${img_post}
    </div>
    <!-- /.img_post -->
    <div class="interazioni">
        <div class="like">
        <i class="fa-solid fa-thumbs-up"></i>
        <span>Mi Piace</span>
        </div>
        <!-- /.like -->
        <div class="contatore_like">
            Piace a <strong>${post.contatore_like}</strong> persone
        </div>
        <!-- /.contatore_like -->
    </div>
    <!-- /.interazioni -->`
    );


    const like = document.querySelector(`#n_${post.id} .like`)
    const contatore = document.querySelector(`#n_${post.id} .contatore_like strong`)

    like.addEventListener('click', () => {
        like.classList.toggle('active')

        const classi_di_like = like.classList
    
        if(classi_di_like.contains('active')){
            contatore.innerHTML = post.contatore_like + 1
            if(!post_piaciuti.includes(post.id)){
                 post_piaciuti.push(post.id)
            }
           
        }else{
            contatore.innerHTML = post.contatore_like
            if(post_piaciuti.includes(post.id)){
                post_piaciuti.splice(post_piaciuti.indexOf(post.id), 1)
            }
        }

        console.log('Array con "id" dei post piaciuti:', post_piaciuti)
    })

})




    


        
  
