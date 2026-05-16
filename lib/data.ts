export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string

  // ✅ CHANGE: was image: string
  images: string[]

  rating: number
  reviews: number

  // ✅ ADD
  reviewList?: {
    id: number
    author: string
    avatar: string
    rating: number
    date: string
    comment: string
  }[]

  inStock: boolean
  featured: boolean
  specifications?: Record<string, string>
  warranty?: string
  deliveryTime?: string
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  productCount: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'Powerful laptops for work and creativity',
    icon: 'Laptop',
    productCount: 2,
  },
  {
    id: 'earbuds',
    name: 'Earbuds',
    description: 'Premium wireless audio experience',
    icon: 'Headphones',
    productCount: 2,
  },
  {
    id: 'keyboards',
    name: 'Keyboards',
    description: 'Mechanical and wireless keyboards',
    icon: 'Keyboard',
    productCount: 2,
  },
  {
    id: 'power-banks',
    name: 'Power Banks',
    description: 'Stay charged on the go',
    icon: 'Battery',
    productCount: 2,
  },
  {
    id: 'smartwatches',
    name: 'Smartwatches',
    description: 'Smart fitness and lifestyle trackers',
    icon: 'Watch',
    productCount: 4,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential tech accessories',
    icon: 'Cable',
    productCount: 2,
  },
]

export const products: Product[] = [

  // ─── LAPTOPS (2) ───────────────────────────────────────────────
  {
  id: 'Hp-Probook-11',
  name: 'Hp Probook 11 Laptop',
  description: 'Hp Probook 11 - TOUCH- 256GB SSD/4GB RAM-Intel PENTIUM QUAD CORE WIN 11 Pro Laptop +Mouse &USB Light.',
  price: 221000,
  originalPrice: 500000,
  category: 'power-banks',
  images: ['/laptops/4.jpg', '/laptops/5.jpg', '/laptops/6.jpg'],
  rating: 4.8,
  reviews: 10,
  reviewList: [
    {
      id: 1,
      author: 'Chukwuemeka O.',
      avatar: 'CO',
      rating: 5,
      date: '2024-12-10',
      comment: 'Excellent power bank! Charges my phone super fast and the battery life is amazing.',
    },
    {
      id: 2,
      author: 'Fatima A.',
      avatar: 'FA',
      rating: 5,
      date: '2024-12-05',
      comment: 'Very slim and portable. Great value for the price.',
    },
    {
      id: 3,
      author: 'Tunde B.',
      avatar: 'TB',
      rating: 4,
      date: '2024-11-28',
      comment: 'Good product. Delivery was fast too.',
    },
  ],

  inStock: true,
  featured: true,
  specifications: {
    'Capacity': '24,000mAh',
    'Output': '140W Max',
    'Ports': '2 USB-C, 1 USB-A',
    'Display': 'Smart LED Display',
    'Recharge': '1.5 hours (140W)',
  },
  warranty: '6 Months',
  deliveryTime: '1-2 business days',
},
  {
  id: 'Hp-EliteBook-840-G5',
  name: 'Hp EliteBook 840 G5 Laptop',
  description: 'Hp EliteBook 840 G5 TOUCHSCREEN Core I5-16GB RAM/256GB SSD/Backlit Keyboard/FP Reader WIN 11 Pro+BAG.',
  price: 495000,
  originalPrice: 1160000,
  category: 'power-banks',
  images: ['/laptops/1.jpg', '/laptops/2.jpg', '/laptops/3.jpg'],
  rating: 4.8,
  reviews: 10,
  reviewList: [
    {
      id: 1,
      author: 'Chukwuemeka O.',
      avatar: 'CO',
      rating: 5,
      date: '2024-12-10',
      comment: 'Excellent power bank! Charges my phone super fast and the battery life is amazing.',
    },
    {
      id: 2,
      author: 'Fatima A.',
      avatar: 'FA',
      rating: 5,
      date: '2024-12-05',
      comment: 'Very slim and portable. Great value for the price.',
    },
    {
      id: 3,
      author: 'Tunde B.',
      avatar: 'TB',
      rating: 4,
      date: '2024-11-28',
      comment: 'Good product. Delivery was fast too.',
    },
  ],

  inStock: true,
  featured: true,
  specifications: {
    'Capacity': '24,000mAh',
    'Output': '140W Max',
    'Ports': '2 USB-C, 1 USB-A',
    'Display': 'Smart LED Display',
    'Recharge': '1.5 hours (140W)',
  },
  warranty: '6 Months',
  deliveryTime: '1-2 business days',
},

  // ─── EARBUDS (2) ────────────────────────────────────────────────
  {
    id: 'airpods-pro-2',
    name: 'Apple AirPods Pro 2',
    description: 'Active Noise Cancellation, Adaptive Audio, and Personalized Spatial Audio with dynamic head tracking.',
    price: 185000,
    originalPrice: 210000,
    category: 'earbuds',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 312,
    inStock: true,
    featured: true,
    specifications: {
      'Chip': 'Apple H2',
      'ANC': 'Active Noise Cancellation',
      'Battery': '6 hours (30 with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX4',
    },
    warranty: '1 Year Apple Warranty',
    deliveryTime: '1-2 business days',
  },
  {
    id: 'samsung-buds2-pro',
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'Hi-Fi 24bit audio with intelligent ANC and seamless Galaxy ecosystem integration.',
    price: 145000,
    originalPrice: 165000,
    category: 'earbuds',
    image: 'https://images.unsplash.com/photo-1628815113969-0487917f6da7?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 234,
    inStock: true,
    featured: true,
    specifications: {
      'Driver': 'Coaxial 2-way',
      'ANC': 'Intelligent ANC',
      'Battery': '5 hours (18 with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Audio': '24bit Hi-Fi, 360 Audio',
    },
    warranty: '1 Year Samsung Warranty',
    deliveryTime: '1-2 business days',
  },

  // ─── KEYBOARDS (2) ──────────────────────────────────────────────
  {
    id: 'keychron-q1-pro',
    name: 'Keychron Q1 Pro',
    description: 'Premium wireless mechanical keyboard with QMK/VIA support, gasket mount, and hot-swappable switches.',
    price: 125000,
    category: 'keyboards',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    specifications: {
      'Layout': '75% (84 keys)',
      'Switches': 'Gateron G Pro',
      'Connectivity': 'Bluetooth 5.1, USB-C',
      'Battery': '4000mAh',
      'Mount': 'Gasket Mount',
    },
    warranty: '1 Year Keychron Warranty',
    deliveryTime: '3-5 business days',
  },
  {
    id: 'keychron-k8-pro',
    name: 'Keychron K8 Pro',
    description: 'TKL wireless mechanical keyboard with hot-swappable switches, RGB backlight, and multi-device Bluetooth.',
    price: 85000,
    originalPrice: 95000,
    category: 'keyboards',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 134,
    inStock: true,
    featured: true,
    specifications: {
      'Layout': 'TKL 87 keys',
      'Switches': 'Gateron G Pro (Hot-swap)',
      'Connectivity': 'Bluetooth 5.1, USB-C',
      'Battery': '4000mAh',
      'Backlight': 'RGB per-key',
    },
    warranty: '1 Year Keychron Warranty',
    deliveryTime: '3-5 business days',
  },

  // ─── POWER BANKS (2) ────────────────────────────────────────────
  {
  id: 'EASYPIE-20000',
  name: 'EASYPIE Power Bank',
  description: 'EASYPIE 20000mAh Ultra Slim Power Bank Fast Charging & Dual USB Ports Portable Charger for Mobile Phone.',
  price: 10000,
  originalPrice: 20000,
  category: 'power-banks',
  images: ['/powerbank/1.jpg', '/powerbank/2.jpg', '/powerbank/5.jpg'],
  rating: 4.8,
  reviews: 10,
  reviewList: [
    {
      id: 1,
      author: 'Chukwuemeka O.',
      avatar: 'CO',
      rating: 5,
      date: '2024-12-10',
      comment: 'Excellent power bank! Charges my phone super fast and the battery life is amazing.',
    },
    {
      id: 2,
      author: 'Fatima A.',
      avatar: 'FA',
      rating: 5,
      date: '2024-12-05',
      comment: 'Very slim and portable. Great value for the price.',
    },
    {
      id: 3,
      author: 'Tunde B.',
      avatar: 'TB',
      rating: 4,
      date: '2024-11-28',
      comment: 'Good product. Delivery was fast too.',
    },
  ],

  inStock: true,
  featured: true,
  specifications: {
    'Capacity': '24,000mAh',
    'Output': '140W Max',
    'Ports': '2 USB-C, 1 USB-A',
    'Display': 'Smart LED Display',
    'Recharge': '1.5 hours (140W)',
  },
  warranty: '6 Months',
  deliveryTime: '1-2 business days',
},
  {
  id: 'FOOMEE-AF32',
  name: 'FOOMEE AF32 Power Bank',
  description: 'FOOMEE AF32 30000mAh 22.5w Type-C Fast Charging Power Bank with Built-in Strap and Flashlight.',
  price: 30000,
  originalPrice: 40000,
  category: 'power-banks',
  images: ['/powerbank/3.jpg', '/powerbank/4.jpg', '/powerbank/6.jpg'],
  rating: 4.8,
  reviews: 10,
  reviewList: [
    {
      id: 1,
      author: 'Victor O.',
      avatar: 'CO',
      rating: 5,
      date: '2024-12-10',
      comment: 'Excellent power bank! Charges my phone super fast and the battery life is amazing.',
    },
    {
      id: 2,
      author: 'Kehinde A.',
      avatar: 'FA',
      rating: 5,
      date: '2024-12-05',
      comment: 'Very slim and portable. Great value for the price.',
    },
    {
      id: 3,
      author: 'Babatunde B.',
      avatar: 'TB',
      rating: 4,
      date: '2024-11-28',
      comment: 'Good product. Delivery was fast too.',
    },
  ],

  inStock: true,
  featured: true,
  specifications: {
    'Capacity': '24,000mAh',
    'Output': '140W Max',
    'Ports': '2 USB-C, 1 USB-A',
    'Display': 'Smart LED Display',
    'Recharge': '1.5 hours (140W)',
  },
  warranty: '6 Months',
  deliveryTime: '1-2 business days',
},

  // ─── SMARTWATCHES (2) ───────────────────────────────────────────
  {
    id: 'apple-watch-9',
    name: 'Apple Watch Series 9',
    description: 'The most powerful Apple Watch with S9 chip, double tap gesture, and precision finding for iPhone.',
    price: 350000,
    originalPrice: 380000,
    category: 'smartwatches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 198,
    inStock: true,
    featured: true,
    specifications: {
      'Chip': 'Apple S9 SiP',
      'Display': 'Always-On Retina LTPO OLED',
      'Battery': '18 hours',
      'Features': 'Double Tap, Precision Finding',
      'Sensors': 'Blood Oxygen, ECG, Temperature',
    },
    warranty: '1 Year Apple Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    description: 'The most rugged and capable Apple Watch for adventurers with a massive 49mm titanium case and 60-hour battery.',
    price: 580000,
    originalPrice: 620000,
    category: 'smartwatches',
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 87,
    inStock: true,
    featured: true,
    specifications: {
      'Chip': 'Apple S9 SiP',
      'Case': '49mm Titanium',
      'Battery': 'Up to 60 hours',
      'Display': 'Always-On Retina, 3000 nits',
      'Features': 'Dual GPS, Siren, Depth gauge',
    },
    warranty: '1 Year Apple Warranty',
    deliveryTime: '2-3 business days',
  },

  // ─── ACCESSORIES (2) ────────────────────────────────────────────
  {
    id: 'usb-c-hub-12in1',
    name: 'Anker 12-in-1 USB-C Hub',
    description: 'Transform your laptop with dual HDMI, ethernet, SD card slots, and 100W pass-through charging.',
    price: 65000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    featured: true,
    specifications: {
      'Ports': '12 ports total',
      'Video': 'Dual HDMI 4K@60Hz',
      'Data': 'USB 3.0, SD/microSD',
      'Network': 'Gigabit Ethernet',
      'Power': '100W PD Pass-through',
    },
    warranty: '18 Months Anker Warranty',
    deliveryTime: '1-2 business days',
  },
  {
    id: 'laptop-stand-pro',
    name: 'Rain Design mStand',
    description: 'Elegant aluminum laptop stand that elevates your screen to eye level for better ergonomics.',
    price: 45000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    specifications: {
      'Material': 'Aluminum',
      'Height': '15cm elevation',
      'Cable': 'Management system',
      'Compatibility': 'All laptops up to 17"',
      'Weight': '1.4kg',
    },
    warranty: '5 Years Warranty',
    deliveryTime: '2-3 business days',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Adebayo Johnson',
    role: 'Software Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'Provic Technologies delivered my MacBook Pro in just 2 days! The packaging was premium and the laptop was exactly as described. Best tech vendor in Lagos.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Chioma Okonkwo',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'I was skeptical at first, but Provic exceeded my expectations. The customer support team helped me choose the perfect keyboard for my design work.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emmanuel Okafor',
    role: 'Computer Science Student',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content: 'As a student, budget is tight. Provic helped me find quality earbuds at an affordable price. The installment payment option was a lifesaver!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Blessing Adekunle',
    role: 'Content Creator',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'My webcam and ring light from Provic Technologies elevated my content quality significantly. Fast delivery to Abuja and excellent follow-up service.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Tunde Bakare',
    role: 'Startup Founder',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    content: 'Provic set up our entire office with laptops and accessories. Professional service, bulk discounts, and they even provided tech consultation. Highly recommend!',
    rating: 5,
  },
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How long does delivery take?',
    answer: 'We offer fast delivery across Nigeria. Lagos deliveries typically take 1-2 business days, while deliveries to other major cities take 3-5 business days. Remote areas may take up to 7 business days.',
    category: 'delivery',
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, card payments (Visa, Mastercard), mobile money, and cash on delivery in Lagos. We also offer installment payment plans for purchases above N100,000.',
    category: 'payment',
  },
  {
    id: '3',
    question: 'Do your products come with warranty?',
    answer: 'Yes! All our products come with manufacturer warranty. The warranty period varies by product and brand, typically ranging from 6 months to 3 years. We also offer extended warranty options.',
    category: 'warranty',
  },
  {
    id: '4',
    question: 'What is your return policy?',
    answer: 'We offer a 7-day return policy for unopened products and a 14-day exchange policy for defective items. Products must be in original packaging with all accessories included.',
    category: 'refunds',
  },
  {
    id: '5',
    question: 'Are your products original and authentic?',
    answer: 'Absolutely! We only source from authorized distributors and verified vendors. All our products are 100% authentic with valid serial numbers that can be verified with manufacturers.',
    category: 'authenticity',
  },
  {
    id: '6',
    question: 'How can I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking number via SMS and email. You can track your order through our website or WhatsApp. Our team also provides proactive updates.',
    category: 'tracking',
  },
  {
    id: '7',
    question: 'Do you offer corporate or bulk discounts?',
    answer: 'Yes! We offer special pricing for bulk orders and corporate clients. Contact our sales team for customized quotes and dedicated account management for your organization.',
    category: 'payment',
  },
  {
    id: '8',
    question: 'Can you source specific products not listed?',
    answer: 'Absolutely! Our device sourcing service can help you find specific gadgets not in our catalog. Just tell us what you need, and we will source it from trusted suppliers worldwide.',
    category: 'delivery',
  },
]

export const services: Service[] = [
  {
    id: '1',
    title: 'Gadget Sales',
    description: 'Premium tech gadgets sourced from trusted vendors worldwide. Laptops, earbuds, keyboards, smartwatches, and more.',
    icon: 'ShoppingBag',
    features: [
      'Authentic products only',
      'Competitive pricing',
      'Multiple payment options',
      'Fast nationwide delivery',
    ],
  },
  {
    id: '2',
    title: 'Device Sourcing',
    description: 'Can\'t find what you need? We source specific gadgets and tech products from verified global suppliers.',
    icon: 'Search',
    features: [
      'Global supplier network',
      'Custom specifications',
      'Competitive quotes',
      'Quality assurance',
    ],
  },
  {
    id: '3',
    title: 'Tech Consultation',
    description: 'Expert advice to help you choose the right tech for your needs, budget, and use case.',
    icon: 'MessageCircle',
    features: [
      'Personalized recommendations',
      'Budget optimization',
      'Future-proof guidance',
      'Comparison analysis',
    ],
  },
  {
    id: '4',
    title: 'Workspace Setup Guidance',
    description: 'Complete guidance for setting up your ideal home office or creative workspace.',
    icon: 'Monitor',
    features: [
      'Ergonomic setup advice',
      'Equipment recommendations',
      'Cable management tips',
      'Productivity optimization',
    ],
  },
  {
    id: '5',
    title: 'Student Tech Assistance',
    description: 'Special support for students with budget-friendly options and educational discounts.',
    icon: 'GraduationCap',
    features: [
      'Student discounts',
      'Installment plans',
      'Budget recommendations',
      'Academic tool advice',
    ],
  },
]

export const trustedBrands = [
  'Berrytech',
  'Logitech',
  'Stofile',
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured)
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}
