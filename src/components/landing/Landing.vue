<template>
  <div class="home-container">
    <div class="header">
      <div class="logo">
        <a href="https://blkluv.org">
          <img src="images/logo.svg" alt="logo" />
        </a>
      </div>
      <div class="menu">
        <ul>
          <li>
            <a href="mailto:info@luvnft.com">CONTACT</a>
          </li>
        </ul>
      </div>
      <div class="hamburger">
        <img src="images/home/hamburger.svg" @click="isModalActive = true" />
      </div>
      <b-modal v-model="isModalActive">
        <div class="header-menu">
          <ul>
            <li><a href="mailto:info@luvnft.com">CONTACT</a></li>
            <li><a href="https://twitter.com/luvnft">TWITTER</a></li>
            <li><a href="https://t.me/luvnft">TELEGRAM</a></li>
            <li><a href="https://instagram.com/luvnft">INSTAGRAM</a></li>
            <li><a href="https://api.elasticemail.com/form?lid=_gqT8YCXDfz5r4kCOLecrw2">SIGN UP EMAIL</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPZv_yzsdJXxhegVP6_JpnhGeWbD8_ac2DCMddt4vm8DYqeQ/viewform">CREATORS APPLY </a></li>
          </ul>
        </div>
      </b-modal>
    </div>
    <div class="banner">
      <div class="left">
        <img src="images/home/title.svg" class="title" />
        <p class="description">
          Tribe owned NFT Marketplace to create, share, sell and buy digital
          collectibles. No ⛽️ gas fee gang.
        </p>
        <a href="https://api.elasticemail.com/form?lid=_gqT8YCXDfz5r4kCOLecrw2"
          >SIGN UP</a
        >
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
          We partner with top brands, artists, athletes, and creators to bring
          dope drops on-blockchain. Apply
          <a href="https://forms.gle/13Qi1r2EBJaoc39T8">here</a>.
        </p>
      </div>
      <div class="right">
        <img src="images/home/contact-email.png" class="title" />
        <!-- <iframe src="https://api.elasticemail.com/form?lid=_gqT8YCXDfz5r4kCOLecrw2" height="350" /> -->
        <!-- <img src="images/home/contact-form-title.svg" class="title" />
        <input type="text" />
        <button type="button">Register</button> -->
      </div>
    </div>
    <div class="footer-menu">
      <div>
        <ul>
          <li><a href="https://t.me/luvnft">TELEGRAM</a></li>
          <li><a href="https://hahz@blkluv.org">CONTACT</a></li>
        </ul>
      </div>
      <div class="logo">
        <a href="https://blkluv.org">
          <img src="images/home/footer-logo.svg" alt="logo" />
        </a>
      </div>
      <div>
        <ul>
          <li style="margin-right: 30px">
            <a href="https://instagram.com/luvnft">INSTAGRAM</a>
          </li>
          <li><a href="https://twitter.com/luvnft">TWITTER</a></li>
        </ul>
      </div>
    </div>
    <div class="footer">
      © LUV NFT 💛, Inc. 2021. Do what you LUV for a living
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isModalActive: false,
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
            "Only %1 of our tribe has ever received investor capital, therefore the remaining 99% of us will unite to invest in each other to build our future, blockchain by blockchain.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" src="../../styles/home.scss"></style>
