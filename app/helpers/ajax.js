export function ajax(props) {
    let {url, cbSuccess, cbError} = props

    fetch(url)
    .then((response) => response.ok? response.json(): Promise.reject(response))
    .then((json) => cbSuccess(json))
    .catch((error) =>{
        document.getElementById('root').innerHTML = `
            <div class="error">
                <p>Error ${error.status}: ${error.statusText}</p>
            </div>
        `
        console.log(error)
        cbError()
    })
}