import { faGear, faHouse, faLayerGroup, faLifeRing } from '@fortawesome/free-solid-svg-icons';

export default {
    top: [
        {
            label: 'Dashboard',
            icon: faHouse,
            target: '/acme',
            roles: ['admin', 'editor'],
        },
        {
            label: 'Karten',
            icon: faLayerGroup,
            target: '/acme/cards',
            roles: ['admin', 'editor'],
        },
    ],
    bottom: [
        {
            label: 'Hilfe',
            icon: faLifeRing,
            target: '/docs',
            roles: ['admin'],
        },
        {
            label: 'Einstellungen',
            icon: faGear,
            target: '/acme/settings',
            roles: ['admin']
        }
    ],
}
