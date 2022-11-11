class Router {
    add(routeName , page){
        this.routes[routeName] = page
    }

     route(event) {
        event = event || window.event
        event.preventDefault() // não faça o padrão. o padrão do click é redirecionar para uma nova pagina.
        
        window.history.pushState({}, "", event.target.href) //EstadoEmpurre a primeira parte é o que eu quero adicionar
        this.handle()
    }


     handle(){
        const {pathname}  = window.location  // o location tem o href,origin, pathname e etc
    
        const route = this.routes[pathname] || routes[404]
        
        fetch(route) // buscou 
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}