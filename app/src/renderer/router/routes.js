import mainPage from '../components/main-page.vue';

export default [
	{
        path: '/',
        name: 'main',
        component: mainPage
    },
    {
        path: '*',
        redirect: '/'
    }
];
