<template>
  <div class="home-container">
    <div class="header">
      <div class="logo">
        <img src="images/logo.svg" />
      </div>
      <div class="menu">
        <ul>
          <li><router-link to="/">CREATE</router-link></li>
          <li><router-link to="/">MARKETPLACE</router-link></li>
          <li><router-link to="/">CONTACT</router-link></li>
        </ul>
      </div>
      <button class="hamburger"><img src="images/home/hamburger.svg" /></button>
    </div>
    <div class="banner">
      <div class="left">
        <img src="images/home/title.svg" class="title" />
        <p class="description">
          Tribe owned NFT Marketplace to create, share, sell and buy digital collectibles.
        </p>
        <button>START CREATING</button>
      </div>
      <div class="right">
        <img src="images/home/1.png" />
      </div>
    </div>
    <div class="why">
      <img src="images/home/why-title.svg" class="title" />
      <div class="body">
        <div v-for="(item, index) in whyUs" :key="index" class="item">
          <div class="avatar">
            <img :src="item.avatar" />
          </div>
          <p class="title">{{ item.title }}</p>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="about">
      <div v-for="(item, index) in aboutUs" :key="index" class="item">
        <div class="avatar">
          <img :src="item.avatar" />
        </div>
        <div class="content">
          <p class="title">{{ item.title }}</p>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="left">
        <img src="images/home/contact-title.svg" class="title" />
        <p class="description">
          We partner with top brands, artists, athletes, and creators to bring dope drops
          on-blockchain. Apply <a href="https://forms.gle/13Qi1r2EBJaoc39T8">here</a>.
        </p>
      </div>
      <div class="right">
        <iframe src="https://api.elasticemail.com/form?lid=_gqT8YCXDfz5r4kCOLecrw2" />
        <!-- <img src="images/home/contact-form-title.svg" class="title" />
        <input type="text" />
        <button type="button">Register</button> -->
      </div>
    </div>
    <div class="footer-menu">
      <div>
        <ul>
          <li><a href="https://discord.gg/cGp8T43b">TRIBE</a></li>
          <li><a href="https://hahz@blkluv.org">CONTACT</a></li>
        </ul>
      </div>
      <div class="logo">
        <img src="images/home/footer-logo.svg" />
      </div>
      <div>
        <ul>
          <li><a href="https://instagram.com/luvnft">INSTAGRAM</a></li>
          <li><a href="https://twitter.com/luvnft">TWITTER</a></li>
        </ul>
      </div>
    </div>
    <div class="footer">© LUV NFT, Inc. 2021. Do what you LUV for a living</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      whyUs: [
        {
          title: "GO DIGITAL",
          avatar: "images/home/why-1.png",
          description:
            "Turn your customers or fans into patrons by selling your digital goodies. Money is going digital, shouldn’t your products?",
        },
        {
          title: "NO MIDDLEMAN",
          avatar: "images/home/why-2.png",
          description:
            "Buy and sell what you LUV without the middleman fees. A true rewarding heart-to-heart connection.",
        },
        {
          title: "SPREAD LUV",
          avatar: "images/home/why-3.png",
          description:
            "Once you purchase a digital collectible, such as crypto art, you can resell it in our secondary marketplace to other collectors.",
        },
      ],
      aboutUs: [
        {
          title: "AUTHENTICATE YOUR LUV MAGIC",
          avatar: "images/home/about-1.png",
          description:
            "Ditigitally sign your work by creating a tokenized certificate using our blockchain technology. No longer will anyone profit on your trending creations.",
        },
        {
          title: "SHOWCASE YOUR LUV MAGIC",
          avatar: "images/home/about-2.png",
          description:
            "Customize your profile to display your NFT collections, certified on the Polkadot blockchain, to patrons around the world. Crypto payments allow you to sell your digital goodies internationally. ",
        },
        {
          title: "A TRIBE OF CREATORS",
          avatar: "images/home/about-3.png",
          description:
            "Only %1 of our tribe has ever received investor capital, therefore the remaining 99% of us have pooled our crypto money together to build our future, blockchain by blockchain.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" src="../../styles/home.scss"></style>
