<template lang="">
  <div id="nav">
    <span>E~Blog</span>
    <ul>
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link to="/block">板块</router-link>
      </li>
      <li>
        <router-link to="/blog">博客</router-link>
      </li>
      <li>
        <router-link to="/recommend">资源</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="css">
#nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  color: white;
  background-color: black;
}
#nav span {
  margin: 0 20px;
  width: 150px;
  height: 64px;
  line-height: 64px;
  font-size: 34px;
  text-align: center;
}
#nav li {
  display: inline-block;
}
#nav a {
  display: inline-block;
  width: 100px;
  height: 64px;
  color: white;
  line-height: 64px;
  text-align: center;
}

#nav a:hover {
  animation: bounce 0.25s ease-in-out;
}

@keyframes bounce {
  50%{
    transform: translate(0, -5%);
  }
  100%{
    transform: translate(0, 0);
  }
}
</style>
