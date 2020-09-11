import { Title } from './components/Title.js'
import { PostCard } from './components/PostCard.js'
import api from './helpers/wp_api.js'
import { ajax } from './helpers/ajax.js'
import { Loader } from './components/Loader.js'
import { PostTemplate } from './components/PostTemplate.js'

export function App() {
    const d = document
    const $root = d.getElementById('root')
    const $posts = d.createElement('section')

    let { hash } = window.location
    let $html = ''

    $posts.id = "posts"
    $posts.classList.add("grid-fluid")

   

    console.log(window.location)

    if(!hash || hash === '#/') {
        console.log(hash)
        $root.innerHTML = ''
        $root.appendChild(Title())
        $root.appendChild($posts)
        $root.appendChild(Loader())
        ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                console.log(posts)
                posts.forEach(post => $html += PostCard(post))
                
                $posts.innerHTML = $html
                d.querySelector(".loader").style.display = "none"
            }
        })
    }else {
        $root.innerHTML = ''
        $root.appendChild(Loader())
        ajax({
            url: `${api.POST}/${localStorage.getItem('postId')}`,
            cbSuccess: (post) => {
                root.innerHTML = PostTemplate(post)
            }
        })
    }
}

// este archivo wrapper que va contener la logica de programación  que apunta a root element