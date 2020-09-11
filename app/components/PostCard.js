
export function PostCard(props) {
    const {id, date, title, slug, excerpt} = props;

    return `
        <article class="post-card">
            <h2>${title.rendered}</h2>
            <div>${excerpt.rendered}</div>
            <time datetime="${date}">${new Date(date).toLocaleString()}</time>
            <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
        </article>
    `
}