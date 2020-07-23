const INDEX = ()=> import('@pages/index');
const DATE = ()=> import('@pages/date');
const CELEBRATION = ()=> import('@pages/celebration');


export const routes = [
    {
        path: '/',
        name: 'main',
        component: INDEX
    },
    {
        path: '/:date',
        name: 'date',
        component: DATE
    },
    {
        path: '/:date/:index',
        name: 'celebration',
        component: CELEBRATION
    },
    {
        path: '*',
        name: 'any',
        component: INDEX
    }
]
