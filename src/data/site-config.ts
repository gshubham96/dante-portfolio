export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'shubham-garg',
    subtitle: 'Marine Scientist, Engineer',
    description: 'An online portfolio to showcase my work.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/gshubham96'
        },
        {
            text: 'LinkedIn',
            href: 'www.linkedin.com/in/gshubham96'
        }
    ],
    hero: {
        title: 'Hi there & welcome to my corner of the web!',
        text: "I'm **Shubham Garg**, a Marine Engineer and Software Developer based in Delhi, India. With a passion for technology and problem-solving, I specialize in finding autonomy solutions, ranging from embedded control systems to advanced path planning and state machine implementations for real-world problems.\ As a freelancer, I thrive on collaborating with innovative startups and established companies, helping them transform their ideas into reality. My unique blend of engineering expertise and software skills allows me to tackle complex challenges and deliver efficient, scalable solutions. Feel free to explore some of my coding endeavors on <a href='https://github.com/gshubham96'>GitHub</a>.",
        image: {
            src: '/01.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to my newsletter',
        text: 'One update per month. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
