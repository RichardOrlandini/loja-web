import  {Router} from './router.js'

const routes = new Router()
router.add("/", "/page/home.html")
router.add("/imoveis", "/pages/Imoveis/imoveis.html")
router.add("/cadastro", "/pages/cadastro.html")
router.add("/login", "/pages/login")
router.add("/sobre", "/pages/sobre.html")
router.add( 404  , "/pages/404.html")


router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()