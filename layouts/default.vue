<template>
  <div>
    <header class="header">
      <div class="header__wrapper">
        <nuxt-link class="header__link" to="/"><img src="~assets/images/logo.svg" alt="WhyK Log" /></nuxt-link>
      </div>
    </header>
    <main class="main">
      <Nuxt />
    </main>
    <footer class="footer">
      <ul class="account">
        <li class="account__item"><a class="account__link" href="http://github.com/windchime-yk" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li class="account__item"><a class="account__link" href="http://twitter.com/windchime_yk" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
      <small class="footer__copy">&copy; 2020 WhyK</small>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  @media screen and (max-width: 896px) {
    margin-right: 20px;
    margin-left: 20px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

p,
a,
li {
  font-size: 1.6rem;
}

.header {
  margin-bottom: 20q;
  padding-top: 20px;
  padding-bottom: 20px;
}

.header__wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.main {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.footer__copy {
  font-size: 1.2rem;
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
}
.account {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
}
.account__item {
  list-style: none;
  &:first-child {
    margin-right: 5px;
    &::after {
      margin-left: 5px;
      content: '/';
    }
  }
}
.account__link {
  font-size: 1.5rem;
}

.dark-mode {
  body {
    background-color: #091a28;
    color: #ebf4f1;
  }
  a {
    color: #1d98d1;
  }
}
</style>
