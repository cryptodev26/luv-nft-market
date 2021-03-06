const Remark = () => import('@/views/Remark.vue');
const Gallery = () => import('@/components/rmrk/Gallery/Gallery.vue')
const Mint = () => import('@/components/rmrk/Gallery/Mint.vue')
const GalleryRare = () => import('@/components/rmrk/Gallery/GalleryRare.vue')
const GalleryItem = () => import('@/components/rmrk/Gallery/GalleryItem.vue')
const rmrkCredit = () => import('@/components/rmrk/Credit/Credit.vue')
const rmrkFaq = () => import('@/components/rmrk/Faq.vue')
const Packs = () => import('@/components/rmrk/Pack/Packs.vue')
const PackItem = () => import('@/components/rmrk/Pack/PackItem.vue')
const CollectionItem = () => import('@/components/rmrk/Gallery/CollectionItem.vue')

export default [
  {
    path: '/rmrk/create',
    name: 'rmrk',
    component: Remark
  },
  {
    path: '/rmrk/gallery',
    name: 'nft',
    component: Gallery,
  },
  {
    path: '/rmrk/mint',
    name: 'mint',
    component: Mint,
  },
  {
    path: '/rmrk/rare',
    name: 'nftRare',
    component: GalleryRare,
  },
  {
    path: '/rmrk/detail/:id',
    name: 'nftDetail',
    component: GalleryItem,
  },
  {
    path: '/rmrk/credit',
    name: 'rmrkCredit',
    component: rmrkCredit
  },
  {
    path: '/rmrk/faq',
    name: 'rmrkFaq',
    component: rmrkFaq,
  },
  {
    path: '/rmrk/packs',
    name: 'packs',
    component: Packs,
  },
  {
    path: '/rmrk/pack/:id',
    name: 'packDetail',
    component: PackItem,
  },
  {
    path: '/rmrk/collection/:id',
    name: 'collectionDetail',
    component: CollectionItem,
  },
];
