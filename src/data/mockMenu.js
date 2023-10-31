import { faGear, faHouse, faLayerGroup, faLifeRing } from '@fortawesome/free-solid-svg-icons';

export default {
    top: [
        {
            label: 'Dashboard',
            icon: faHouse,
            target: '/acme',
            end: true,
            roles: ['admin', 'editor'],
        },
        {
            label: 'Karten',
            icon: faLayerGroup,
            target: '/acme/cards',
            end: true,
            roles: ['admin', 'editor'],
        },
    ],
    bottom: [
        {
            label: 'Hilfe',
            icon: faLifeRing,
            target: '/docs',
            external: true,
            roles: ['admin']
        },
        {
            label: 'Einstellungen',
            icon: faGear,
            target: '/acme/settings',
            end: true,
            roles: ['admin']
        }
    ],
}
