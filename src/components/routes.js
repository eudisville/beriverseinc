import Home from '../pages/Home'
import Ia from '../pages/Ia'
import Software from '../pages/Software'
import Cyber from '../pages/Cyber'
import Learn from '../pages/Learn'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/software',
        name: 'Software',
        component: Software
    },
    {
        path: '/ai',
        name: 'Artificial Intelligence',
        component: Ia
    },
    {
        path: '/cybersecurity',
        name: 'Cybersecurity',
        component: Cyber
    },
    {
        path: '/learn',
        name: 'Learn',
        component: Learn
    },
]

export default routes