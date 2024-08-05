import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Products from '../pages/Products'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/contact',
        name: 'Contact Us',
        component: Contact
    },
]

export default routes;