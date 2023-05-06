import LogoImg from '../src/assets/img/header/logo-1.svg';
import WelcomeImg from '../src/assets/img/hero/hero-1.svg';

export const header = {
    logo: LogoImg,
    btnText: 'Land Docket',
};

export const nav = [
    { name: 'Home', href: '/welcome' },
    { name: 'User', href: '/user' },
    { name: 'Land Inspector', href: '/landinspectorlogin' },
];

export const hero = {
    title: 'Welcome to Land Registration Platform',
    subtitle: 'Helps you securely register and transfer land',
    image: WelcomeImg,
};
