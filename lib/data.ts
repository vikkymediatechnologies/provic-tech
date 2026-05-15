// export interface Product {
//   id: string
//   name: string
//   description: string
//   price: number
//   originalPrice?: number
//   category: string
//   image: string
//   rating: number
//   reviews: number
//   inStock: boolean
//   featured?: boolean
//   specifications?: Record<string, string>
//   warranty?: string
//   deliveryTime?: string
// }

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
    productCount: 10,
  },
  {
    id: 'earbuds',
    name: 'Earbuds',
    description: 'Premium wireless audio experience',
    icon: 'Headphones',
    productCount: 5,
  },
  {
    id: 'keyboards',
    name: 'Keyboards',
    description: 'Mechanical and wireless keyboards',
    icon: 'Keyboard',
    productCount: 8,
  },
  {
    id: 'power-banks',
    name: 'Power Banks',
    description: 'Stay charged on the go',
    icon: 'Battery',
    productCount: 6,
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
    productCount: 8,
  },
]

export const products: Product[] = [

  // ─── LAPTOPS (10) ───────────────────────────────────────────────
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14" M3 Pro',
    description: 'The most advanced MacBook Pro with M3 Pro chip, stunning Liquid Retina XDR display, and all-day battery life.',
    price: 1499000,
    originalPrice: 1650000,
    category: 'laptops',
  images: ['/powerbank/1.jpg', '/powerbank/2.jpg', '/powerbank/5.jpg'],
    rating: 4.9,
    reviews: 128,
    inStock: true,
    featured: true,
    specifications: {
      'Processor': 'Apple M3 Pro',
      'RAM': '18GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '14.2" Liquid Retina XDR',
      'Battery': 'Up to 17 hours',
    },
    warranty: '1 Year Apple Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'macbook-air-15',
    name: 'MacBook Air 15" M3',
    description: 'Supercharged by M3, the 15-inch MacBook Air is the thinnest, lightest 15-inch laptop ever with a gorgeous display.',
    price: 1199000,
    originalPrice: 1320000,
    category: 'laptops',
  images: ['/powerbank/1.jpg', '/powerbank/2.jpg', '/powerbank/5.jpg'],
    rating: 4.8,
    reviews: 214,
    inStock: true,
    featured: true,
    specifications: {
      'Processor': 'Apple M3',
      'RAM': '16GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '15.3" Liquid Retina',
      'Battery': 'Up to 18 hours',
    },
    warranty: '1 Year Apple Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'hp-pavilion-15',
    name: 'HP Pavilion 15 Gaming',
    description: 'Powerful gaming laptop with Intel Core i7, NVIDIA RTX 4060, and 144Hz display for immersive gaming.',
    price: 750000,
    originalPrice: 850000,
    category: 'laptops',
  images: ['/powerbank/1.jpg', '/powerbank/2.jpg', '/powerbank/5.jpg'],
    rating: 4.7,
    reviews: 89,
    inStock: true,
    featured: true,
    specifications: {
      'Processor': 'Intel Core i7-13700H',
      'RAM': '16GB DDR5',
      'Storage': '512GB NVMe SSD',
      'Graphics': 'NVIDIA RTX 4060 6GB',
      'Display': '15.6" FHD 144Hz',
    },
    warranty: '2 Years HP Warranty',
    deliveryTime: '3-5 business days',
  },
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15 OLED',
    description: 'Stunning 3.5K OLED display with Intel Core i9 and RTX 4070 for creative professionals.',
    price: 1350000,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 112,
    inStock: true,
    specifications: {
      'Processor': 'Intel Core i9-13900H',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Graphics': 'NVIDIA RTX 4070 8GB',
      'Display': '15.6" 3.5K OLED',
    },
    warranty: '2 Years Dell Premium Support',
    deliveryTime: '3-5 business days',
  },
  {
    id: 'lenovo-thinkpad-x1',
    name: 'Lenovo ThinkPad X1 Carbon',
    description: 'Ultra-light business laptop with exceptional keyboard, long battery life, and military-grade durability.',
    price: 1250000,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    specifications: {
      'Processor': 'Intel Core i7-1365U',
      'RAM': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Display': '14" 2.8K OLED',
      'Weight': '1.12 kg',
    },
    warranty: '3 Years Lenovo Warranty',
    deliveryTime: '2-4 business days',
  },
  {
    id: 'asus-rog-zephyrus-g14',
    name: 'ASUS ROG Zephyrus G14',
    description: 'AMD Ryzen 9 powerhouse with RTX 4070 and a stunning 165Hz QHD mini-LED display in a compact 14-inch body.',
    price: 980000,
    originalPrice: 1100000,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 97,
    inStock: true,
    featured: true,
    specifications: {
      'Processor': 'AMD Ryzen 9 7940HS',
      'RAM': '16GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Graphics': 'NVIDIA RTX 4070 8GB',
      'Display': '14" QHD+ 165Hz mini-LED',
    },
    warranty: '2 Years ASUS Warranty',
    deliveryTime: '3-5 business days',
  },
  {
    id: 'microsoft-surface-pro-9',
    name: 'Microsoft Surface Pro 9',
    description: '2-in-1 tablet-laptop with Intel Core i7, stunning 13" PixelSense display, and all-day battery life.',
    price: 890000,
    originalPrice: 960000,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 74,
    inStock: true,
    specifications: {
      'Processor': 'Intel Core i7-1255U',
      'RAM': '16GB LPDDR5',
      'Storage': '256GB SSD',
      'Display': '13" PixelSense 2880×1920',
      'Battery': 'Up to 15.5 hours',
    },
    warranty: '2 Years Microsoft Warranty',
    deliveryTime: '3-4 business days',
  },
  {
    id: 'acer-swift-x-14',
    name: 'Acer Swift X 14',
    description: 'Slim and powerful creator laptop with AMD Ryzen 7, NVIDIA RTX 4050, and a 2.8K OLED display.',
    price: 650000,
    originalPrice: 720000,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 61,
    inStock: true,
    specifications: {
      'Processor': 'AMD Ryzen 7 7840U',
      'RAM': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Graphics': 'NVIDIA RTX 4050 6GB',
      'Display': '14" 2.8K OLED 90Hz',
    },
    warranty: '1 Year Acer Warranty',
    deliveryTime: '3-5 business days',
  },
  {
    id: 'lg-gram-16',
    name: 'LG Gram 16 (2024)',
    description: 'Feather-light 16-inch laptop weighing just 1.19 kg with Intel Core Ultra 7 and MIL-SPEC durability.',
    price: 1050000,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 53,
    inStock: true,
    specifications: {
      'Processor': 'Intel Core Ultra 7 155H',
      'RAM': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Display': '16" WQXGA IPS Anti-glare',
      'Weight': '1.19 kg',
    },
    warranty: '3 Years LG Warranty',
    deliveryTime: '3-5 business days',
  },
  {
    id: 'razer-blade-15',
    name: 'Razer Blade 15 (2024)',
    description: 'Premium gaming laptop with Intel Core i9, RTX 4080, and a blazing-fast 240Hz QHD display in an all-aluminum chassis.',
    price: 1750000,
    originalPrice: 1900000,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 88,
    inStock: true,
    specifications: {
      'Processor': 'Intel Core i9-14900HX',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Graphics': 'NVIDIA RTX 4080 12GB',
      'Display': '15.6" QHD 240Hz',
    },
    warranty: '1 Year Razer Warranty',
    deliveryTime: '3-5 business days',
  },

  // ─── EARBUDS (5) ────────────────────────────────────────────────
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
    id: 'sony-wf-1000xm5',
    name: 'Sony WF-1000XM5',
    description: 'Industry-leading noise cancellation in a remarkably small and comfortable design with exceptional sound.',
    price: 220000,
    category: 'earbuds',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 187,
    inStock: true,
    specifications: {
      'Driver': '8.4mm Dynamic',
      'ANC': 'HD Noise Cancellation',
      'Battery': '8 hours (24 with case)',
      'Connectivity': 'Bluetooth 5.3, LDAC',
      'Codec': 'LDAC, AAC, SBC',
    },
    warranty: '1 Year Sony Warranty',
    deliveryTime: '2-3 business days',
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
  {
    id: 'bose-quietcomfort-earbuds-2',
    name: 'Bose QuietComfort Earbuds 2',
    description: 'Personalized noise cancellation and immersive sound with CustomTune technology that tailors audio to your ears.',
    price: 230000,
    originalPrice: 260000,
    category: 'earbuds',
    image: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 143,
    inStock: true,
    specifications: {
      'ANC': 'CustomTune Personalized ANC',
      'Battery': '6 hours (24 with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX4',
      'Features': 'Aware Mode, Touch Controls',
    },
    warranty: '1 Year Bose Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'nothing-ear-2',
    name: 'Nothing Ear (2)',
    description: 'Iconic transparent design with Hi-Res Audio certification, dual-driver setup, and up to 36 hours total battery.',
    price: 95000,
    originalPrice: 110000,
    category: 'earbuds',
    image: 'https://images.unsplash.com/photo-1631176093617-571f6e6d4aaa?w=600&h=400&fit=crop',
    rating: 4.5,
    reviews: 178,
    inStock: true,
    specifications: {
      'Driver': '11.6mm + planar tweeter',
      'ANC': 'Active Noise Cancellation',
      'Battery': '6.3 hours (36 with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Codec': 'LHDC 5.0, AAC, SBC',
    },
    warranty: '1 Year Nothing Warranty',
    deliveryTime: '2-3 business days',
  },

  // ─── KEYBOARDS (8) ──────────────────────────────────────────────
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
  {
    id: 'logitech-mx-keys',
    name: 'Logitech MX Keys S',
    description: 'Advanced wireless illuminated keyboard with smart backlighting and multi-device connectivity.',
    price: 95000,
    category: 'keyboards',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    specifications: {
      'Layout': 'Full Size',
      'Type': 'Low-profile',
      'Connectivity': 'Bluetooth, Logi Bolt',
      'Battery': '10 days (5 months without backlight)',
      'Features': 'Smart Backlighting, Flow',
    },
    warranty: '2 Years Logitech Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'razer-blackwidow-v4',
    name: 'Razer BlackWidow V4 Pro',
    description: 'Flagship wireless gaming keyboard with Razer Yellow mechanical switches, Command Dial, and Chroma RGB.',
    price: 175000,
    originalPrice: 195000,
    category: 'keyboards',
    image: 'https://images.unsplash.com/photo-1595225476474-63036fd1a93c?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 72,
    inStock: true,
    specifications: {
      'Layout': 'Full Size with Numpad',
      'Switches': 'Razer Yellow (Linear)',
      'Connectivity': 'HyperSpeed Wireless, Bluetooth, USB',
      'Battery': 'Up to 200 hours',
      'Features': 'Command Dial, Chroma RGB',
    },
    warranty: '2 Years Razer Warranty',
    deliveryTime: '3-4 business days',
  },
  {
    id: 'corsair-k100-rgb',
    name: 'Corsair K100 RGB',
    description: 'High-performance wired gaming keyboard with OPX optical-mechanical switches and iCUE AXON processing.',
    price: 155000,
    category: 'keyboards',
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 95,
    inStock: true,
    specifications: {
      'Layout': 'Full Size',
      'Switches': 'Corsair OPX Optical-Mechanical',
      'Connectivity': 'USB-A (detachable)',
      'Polling Rate': '4000Hz',
      'Features': 'Control Wheel, 44-zone RGB',
    },
    warranty: '2 Years Corsair Warranty',
    deliveryTime: '3-5 business days',
  },
  {
    id: 'apple-magic-keyboard',
    name: 'Apple Magic Keyboard with Touch ID',
    description: 'Sleek, rechargeable wireless keyboard with Touch ID, scissor-mechanism keys, and seamless Apple device pairing.',
    price: 75000,
    originalPrice: 85000,
    category: 'keyboards',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 188,
    inStock: true,
    specifications: {
      'Layout': 'Compact (US English)',
      'Type': 'Scissor mechanism',
      'Connectivity': 'Bluetooth',
      'Battery': '1 month per charge',
      'Features': 'Touch ID, Lightning charging',
    },
    warranty: '1 Year Apple Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'ducky-one-3',
    name: 'Ducky One 3 SF',
    description: 'Compact 65% hot-swap mechanical keyboard with seamless design, triple-layer dampening, and Cherry MX switches.',
    price: 110000,
    category: 'keyboards',
    image: 'https://images.unsplash.com/photo-1642443826936-fbe5c4f08fde?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 64,
    inStock: true,
    specifications: {
      'Layout': '65% (67 keys)',
      'Switches': 'Cherry MX Red (Hot-swap)',
      'Connectivity': 'USB-C detachable',
      'Features': 'Triple-layer dampening, RGB',
      'Case': 'POM plate, PC foam',
    },
    warranty: '1 Year Ducky Warranty',
    deliveryTime: '4-6 business days',
  },
  {
    id: 'nuphy-air75-v2',
    name: 'NuPhy Air75 V2',
    description: 'Ultra-slim 75% wireless mechanical keyboard with low-profile switches, gasket mount, and 3-mode connectivity.',
    price: 98000,
    originalPrice: 115000,
    category: 'keyboards',
    image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 47,
    inStock: true,
    specifications: {
      'Layout': '75% (84 keys)',
      'Switches': 'NuPhy Wisteria (Low-profile)',
      'Connectivity': 'Bluetooth 5.0, 2.4GHz, USB-C',
      'Battery': '3000mAh',
      'Mount': 'Gasket Mount',
    },
    warranty: '1 Year NuPhy Warranty',
    deliveryTime: '3-5 business days',
  },

  // ─── POWER BANKS (6) ────────────────────────────────────────────
  // {
  //   id: 'EASYPIE-20000',
  //   name: 'EASYPIE Power Bank',
  //   description: 'EASYPIE 20000mAh Ultra Slim Power Bank Fast Charging & Dual USB Ports Portable Charger for Mobile Phone.',
  //   price: 10000,
  //   originalPrice: 20000,
  //   category: 'power-banks',
  //   image: '/powerbank/1.jpg',
  //   rating: 4.8,
  //   reviews: 10,
  //   inStock: true,
  //   featured: true,
  //   specifications: {
  //     'Capacity': '24,000mAh',
  //     'Output': '140W Max',
  //     'Ports': '2 USB-C, 1 USB-A',
  //     'Display': 'Smart LED Display',
  //     'Recharge': '1.5 hours (140W)',
  //   },
  //   warranty: '6 Months',
  //   deliveryTime: '1-2 business days',
  // },
  {
  id: 'EASYPIE-20000',
  name: 'EASYPIE Power Bank',
  description: 'EASYPIE 20000mAh Ultra Slim Power Bank Fast Charging & Dual USB Ports Portable Charger for Mobile Phone.',
  price: 10000,
  originalPrice: 20000,
  category: 'power-banks',

  // ✅ CHANGE: was image: '/powerbank/1.jpg'
  images: ['/powerbank/1.jpg', '/powerbank/2.jpg', '/powerbank/5.jpg'],

  rating: 4.8,
  reviews: 10, // keep this as the count for the card

  // ✅ ADD: actual review objects
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
    id: 'anker-prime-20000',
    name: 'Anker Prime 20,000mAh',
    description: '200W ultra-fast power bank with smart display, capable of charging a MacBook Pro in under 45 minutes.',
    price: 110000,
    originalPrice: 130000,
    category: 'power-banks',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 142,
    inStock: true,
    featured: true,
    specifications: {
      'Capacity': '20,000mAh',
      'Output': '200W Max',
      'Ports': '2 USB-C, 1 USB-A',
      'Display': 'Smart Digital Display',
      'Recharge': '43 min (via 170W adapter)',
    },
    warranty: '18 Months Anker Warranty',
    deliveryTime: '1-2 business days',
  },
  {
    id: 'samsung-25w-bank',
    name: 'Samsung 25W Battery Pack 10,000mAh',
    description: 'Sleek 10,000mAh power bank with Super Fast Charging and Wireless PowerShare in a premium finish.',
    price: 35000,
    category: 'power-banks',
    image: 'https://images.unsplash.com/photo-1609592806596-b56d5b5f3f5b?w=600&h=400&fit=crop',
    rating: 4.5,
    reviews: 189,
    inStock: true,
    specifications: {
      'Capacity': '10,000mAh',
      'Output': '25W USB-C',
      'Features': 'Wireless PowerShare',
      'Weight': '234g',
      'Ports': '1 USB-C, 1 USB-A',
    },
    warranty: '1 Year Samsung Warranty',
    deliveryTime: '1-2 business days',
  },
  {
    id: 'baseus-65w-20000',
    name: 'Baseus 65W 20,000mAh',
    description: 'Charge your laptop, phone, and tablet simultaneously with 65W PD output and a built-in LED power indicator.',
    price: 45000,
    originalPrice: 55000,
    category: 'power-banks',
    image: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 211,
    inStock: true,
    specifications: {
      'Capacity': '20,000mAh',
      'Output': '65W USB-C PD',
      'Ports': '2 USB-C, 2 USB-A',
      'Features': 'LED Power Indicator',
      'Weight': '430g',
    },
    warranty: '1 Year Baseus Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'mophie-powerstation-xl',
    name: 'Mophie Powerstation XL',
    description: 'Slim 10,000mAh power bank with 20W USB-C PD and a premium fabric finish that fits any lifestyle.',
    price: 42000,
    originalPrice: 50000,
    category: 'power-banks',
    image: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=600&h=400&fit=crop',
    rating: 4.5,
    reviews: 98,
    inStock: true,
    specifications: {
      'Capacity': '10,000mAh',
      'Output': '20W USB-C PD',
      'Ports': '1 USB-C, 1 USB-A',
      'Design': 'Premium fabric finish',
      'Weight': '220g',
    },
    warranty: '2 Years Mophie Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'ugreen-nexode-25000',
    name: 'UGREEN Nexode 25,000mAh',
    description: '130W fast charging power bank with 4 ports, dual USB-C PPS, and a built-in transparent shell for a futuristic look.',
    price: 72000,
    originalPrice: 85000,
    category: 'power-banks',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 76,
    inStock: true,
    specifications: {
      'Capacity': '25,000mAh',
      'Output': '130W Max',
      'Ports': '2 USB-C, 2 USB-A',
      'Features': 'PPS, Smart Power Distribution',
      'Weight': '490g',
    },
    warranty: '2 Years UGREEN Warranty',
    deliveryTime: '2-4 business days',
  },

  // ─── SMARTWATCHES (4) ───────────────────────────────────────────
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
  {
    id: 'samsung-galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6 Classic',
    description: 'Iconic rotating bezel with advanced BIA health sensors, sleep coaching, and Wear OS 4 on a stunning sapphire display.',
    price: 215000,
    originalPrice: 240000,
    category: 'smartwatches',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    specifications: {
      'Chip': 'Exynos W930',
      'Display': 'Super AMOLED, Sapphire Crystal',
      'Battery': '40 hours',
      'OS': 'Wear OS 4',
      'Sensors': 'BIA, Heart Rate, SpO2, Skin Temp',
    },
    warranty: '1 Year Samsung Warranty',
    deliveryTime: '1-2 business days',
  },
  {
    id: 'garmin-fenix-7',
    name: 'Garmin Fēnix 7 Pro Solar',
    description: 'Multi-sport GPS smartwatch with solar charging, advanced health metrics, and up to 37-day battery life.',
    price: 490000,
    originalPrice: 540000,
    category: 'smartwatches',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 63,
    inStock: true,
    specifications: {
      'GPS': 'Multi-band GPS + Solar',
      'Battery': 'Up to 37 days (Solar)',
      'Display': '1.3" MIP, Gorilla Glass',
      'Sports': '60+ pre-loaded activity profiles',
      'Sensors': 'Pulse Ox, HRV, Stress, Body Battery',
    },
    warranty: '1 Year Garmin Warranty',
    deliveryTime: '3-5 business days',
  },

  // ─── ACCESSORIES (8) ────────────────────────────────────────────
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
  {
    id: 'webcam-4k',
    name: 'Logitech Brio 4K Pro',
    description: '4K Ultra HD webcam with HDR, autofocus, and Windows Hello support for premium video calls.',
    price: 125000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 198,
    inStock: true,
    specifications: {
      'Resolution': '4K Ultra HD',
      'FPS': 'Up to 90fps at 1080p',
      'HDR': 'RightLight 3 with HDR',
      'Mic': 'Dual omnidirectional',
      'Features': 'Windows Hello, 5x zoom',
    },
    warranty: '2 Years Logitech Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'logitech-mx-master-3s',
    name: 'Logitech MX Master 3S',
    description: 'Premium wireless mouse with MagSpeed electromagnetic scroll, 8K DPI sensor, and near-silent clicks.',
    price: 58000,
    originalPrice: 68000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 312,
    inStock: true,
    featured: true,
    specifications: {
      'Sensor': '8000 DPI Darkfield',
      'Scroll': 'MagSpeed Electromagnetic',
      'Connectivity': 'Bluetooth, Logi Bolt 2.4GHz',
      'Battery': '70 days per charge',
      'Buttons': '7 programmable buttons',
    },
    warranty: '2 Years Logitech Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'samsung-t7-ssd',
    name: 'Samsung T7 Portable SSD 1TB',
    description: 'Fast, reliable external SSD with 1,050MB/s read speeds, password protection, and a compact metal design.',
    price: 55000,
    originalPrice: 65000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 276,
    inStock: true,
    specifications: {
      'Capacity': '1TB',
      'Read Speed': '1,050 MB/s',
      'Write Speed': '1,000 MB/s',
      'Interface': 'USB 3.2 Gen 2',
      'Features': 'AES 256-bit encryption',
    },
    warranty: '3 Years Samsung Warranty',
    deliveryTime: '1-2 business days',
  },
  {
    id: 'belkin-magsafe-stand',
    name: 'Belkin MagSafe 3-in-1 Stand',
    description: 'Charge your iPhone, Apple Watch, and AirPods simultaneously on a sleek MagSafe-certified charging stand.',
    price: 48000,
    originalPrice: 58000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 121,
    inStock: true,
    specifications: {
      'Compatibility': 'iPhone 12+, AirPods, Apple Watch',
      'iPhone Charging': '15W MagSafe',
      'Apple Watch': 'Fast Charge (Series 7+)',
      'Input': 'USB-C 20W adapter included',
      'Features': 'Portrait & landscape viewing',
    },
    warranty: '2 Years Belkin Warranty',
    deliveryTime: '2-3 business days',
  },
  {
    id: 'ugreen-nexode-pro-65w',
    name: 'UGREEN Nexode Pro 65W Charger',
    description: 'Compact 3-port GaN charger delivering 65W to charge a MacBook, iPhone, and AirPods simultaneously.',
    price: 28000,
    originalPrice: 35000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1601144072436-b8c3e48396c7?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 183,
    inStock: true,
    specifications: {
      'Total Output': '65W',
      'Ports': '2 USB-C, 1 USB-A',
      'Technology': 'GaN II Pro',
      'Size': '33% smaller than Apple 61W',
      'Safety': 'ActiveShield 2.0',
    },
    warranty: '2 Years UGREEN Warranty',
    deliveryTime: '1-2 business days',
  },
  {
    id: 'twelve-south-hirise-3',
    name: 'Twelve South HiRise 3 Deluxe',
    description: 'Adjustable stand with integrated MagSafe charging for iPhone and a dedicated Apple Watch fast-charge module.',
    price: 62000,
    originalPrice: 72000,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 57,
    inStock: true,
    specifications: {
      'iPhone Charging': '15W MagSafe',
      'Apple Watch': 'Fast Charge module',
      'Height': 'Adjustable 6.5"–10.5"',
      'Material': 'Aluminum & stainless steel',
      'Cable': 'Built-in 1m braided USB-C',
    },
    warranty: '2 Years Twelve South Warranty',
    deliveryTime: '3-4 business days',
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
