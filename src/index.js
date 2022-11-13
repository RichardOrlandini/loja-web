import  {Router} from './router.js'
//import  {createImg, createCard} from './imoveis'

const router =  new Router()
router.add("/", "/pages/home.html")
router.add("/cadastro", "/pages/cadastro.html")
router.add("/imoveis", "/pages/imoveis.html")
router.add("/login", "/pages/login.html")
router.add("/sobre", "/pages/sobre.html")
router.add( 404  , "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

//Pagina de Imoveis

/*

import { CardView } from './Card.js'

new CardView("app")

*/