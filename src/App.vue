<template>
  <div id="app">
    <!-- <div class="container is-max-desktop">
      <Navbar v-if="isNavbarVisible" />
    </div> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import keyring from '@polkadot/ui-keyring';
import Navbar from './components/Navbar.vue';
import isShareMode from '@/utils/isShareMode';

@Component<Dashboard>({
  metaInfo() {
    return {
      title: '💛 🖼 LUV NFT | The NFT marketplace to buy and sell what you LUV',
      titleTemplate: '%s | LUV NFT',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content:
            '💛 🖼 LUV NFT | The NFT marketplace to buy and sell what you LUV'
        },
        {
          property: 'og:title',
          content:
            '💛 🖼 LUV NFT | The NFT marketplace to buy and sell what you LUV'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://luvnft.com' },
        {
          property: 'og:description',
          content:
            '💛 🖼 LUV NFT | The NFT marketplace to buy and sell what you LUV'
        },
        {
          property: 'og:site_name',
          content:
            '💛 🖼 LUV NFT | The NFT marketplace to buy and sell what you LUV'
        },
        // { property: 'og:image', content: '/img/icons/android-chrome-256x256.png'}
        { property: 'og:locale', content: 'en_US' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@Luvnft' },
        {
          property: 'twitter:title',
          content:
            '💛 🖼 LUV NFT | The NFT marketplace to buy and sell what you LUV'
        },
        {
          property: 'twitter:description',
          content:
            ' 💛 🖼 LUV NFT | The NFT marketplace to buy and sell what you LUV'
        }
        // { property: 'twitter:image', content: (this.nft.image as string) },
      ]
    };
  },
  components: {
    Navbar
  }
})
export default class Dashboard extends Vue {
  get chainProperties() {
    return this.$store.getters.getChainProperties;
  }

  get ss58Format(): number {
    return this.chainProperties?.ss58Format;
  }

  public async loadKeyring(): Promise<void> {
    keyring.loadAll({
      ss58Format: this.ss58Format || 42,
      type: 'sr25519',
      isDevelopment: process.env.VUE_APP_KEYRING === 'true' || false
    });
  }

  public async mountWasmCrypto(): Promise<void> {
    await cryptoWaitReady();
    console.log('wasmCrypto loaded');
    this.loadKeyring();
    console.log('keyring init');
    this.$store.commit('keyringLoaded');
    console.log('keyring loaded');
  }

  public mounted(): void {
    this.mountWasmCrypto();
  }

  get isNavbarVisible() {
    return !isShareMode;
  }
}
</script>

<style lang="scss">
// Import Bulma's core
@import '~bulma/sass/utilities/_all';
@import './colors';
@import './layout';

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black
  ),
  'black': (
    $black,
    $white
  ),
  'light': (
    $light,
    $light-invert
  ),
  'dark': (
    $dark,
    $dark-invert
  ),
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'success': (
    $success,
    $success-invert
  ),
  'warning': (
    $warning,
    $warning-invert
  ),
  'danger': (
    $danger,
    $danger-invert
  )
);

$layout: (
  'container-offset': (
    $container-offset
  ),
  'container-max-width': (
    $container-max-width
  ),
  'tablet': (
    $tablet
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// DEV: for dark mode
// $scheme-main: rgb(27, 34, 44);
// $scheme-invert: $white;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
