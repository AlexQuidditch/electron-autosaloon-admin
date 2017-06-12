import mainPage from '../components/main-page';
import cataloguePage from '../components/catalogue';
import editorPage from '../components/editor/editor';
import pricesPage from '../components/prices';
import backupPage from '../components/backup';
import servicePage from '../components/service';
import servicesPage from '../components/services';
import otherPage from '../components/other';
import videoPage from '../components/video';

export default [
	{
        path: '/',
        name: 'main',
        component: mainPage
    },
	{
		path: '/prices',
		name: 'prices',
		component: pricesPage
	},
	{
        path: '/catalogue',
        name: 'catalogue',
        component: cataloguePage
    },
	{
        path: '/service',
        name: 'service',
        component: servicePage
    },
	{
        path: '/services',
        name: 'services',
        component: servicesPage
    },
	{
		path: '/editor',
		name: 'editor',
		component: editorPage
	},
	{
		path: '/other',
		name: 'other',
		component: otherPage
	},
	{
		path: '/video',
		name: 'video',
		component: videoPage
	},
	{
		path: '/backup',
		name: 'backup',
		component: backupPage
	},
	{
		path: '*',
		redirect: '/'
	}
];
