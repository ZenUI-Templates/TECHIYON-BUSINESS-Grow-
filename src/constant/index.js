import client3 from '/clients/logo (1).png';
import client4 from '/clients/logo (2).png';
import client5 from '/clients/logo (3).png';
import client2 from '/clients/logo.png';
import client1 from '/clients/slack.png';

export const clients = [client1, client2, client3, client4, client5];

export const pricingTableInfo = [
  {
    packageName: 'Basic Package',
    price: '$39',
    discountPrice: '$29',
    whatsIncluded: [
      '60 Unique Screens',
      'Apps source file',
      '400+ Free fonts',
      'Color source',
      'Icon included',
      'All Sketch, Figma Files',
    ],
    link: '',
    offNow: null,
    extra: [],
  },
  {
    packageName: 'Premium Package',
    price: '$65',
    discountPrice: '$59',
    whatsIncluded: [
      '60 Unique Screens',
      'Apps source file',
      '400+ Free fonts',
      'Color source',
      'Icon included',
      'All Sketch, Figma Files',
    ],
    link: '',
    offNow: '50% Off Now',
    extra: ['HTML 5', 'Frontend support', 'Web Source'],
  },
];

export const faq = [
  {
    question: 'How long until we deliver your first blog post?',
    answer:
      'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.',
  },
  {
    question: 'How long until we deliver your first blog post?',
    answer:
      'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.',
  },
  {
    question: 'How long until we deliver your first blog post?',
    answer:
      'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.',
  },
  {
    question: 'How long until we deliver your first blog post?',
    answer:
      'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.',
  },
  {
    question: 'How long until we deliver your first blog post?',
    answer:
      'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.',
  },
];

export const footerNavigation = [
  {
    widget_title: 'Links',
    links: [
      {
        name: 'Overons',
        link: '',
      },
      {
        name: 'Social Media',
        link: '',
      },
      {
        name: 'Counters',
        link: '',
      },
      {
        name: 'Contact',
        link: '',
      },
    ],
  },
  {
    widget_title: 'Company',
    links: [
      {
        name: 'Terms & Conditions',
        link: '',
      },
      {
        name: 'Privacy Policy',
        link: '',
      },
      {
        name: 'Contact',
        link: '',
      },
    ],
  },
];

export const mainNavigation = [
  {
    name: 'FEATURES',
    link: null,
    submenu: [
      {
        name: 'FEATURE 1',
        link: '',
      },
      {
        name: 'FEATURE 2',
        link: '',
      },
      {
        name: 'FEATURE 2',
        link: '',
      },
    ],
  },
  {
    name: 'PRICING',
    link: '',
  },
  {
    name: 'WATCH A DEMO',
    link: '',
  },
];

export const variants1 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export const variants2 = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export const variants3 = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export const variants4 = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const animationVariants1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 1,
    },
  }),
};

export const animationVariants2 = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 1,
    },
  }),
};
