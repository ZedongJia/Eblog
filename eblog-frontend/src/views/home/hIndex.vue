<template lang="">
  <div class="layout flex-row-1">
    <div id="filter"></div>
    <div id="highLight"></div>
    <div id="home-bg"></div>
    <!-- 引导 -->
    <Card static>
      <h1 class="title">~ Welcome ~</h1>
    </Card>
    <Card
      id="leading"
      class="flex-row-1"
      static
    >
      <Card
        style="margin: 0; padding: 0; height: 600px"
        static
      >
        <div
          class="view-loss"
          :style="'background-image: url(' + require('./images/1.webp') + ')'"
        ></div>
        <h1
          style="color: white; margin: 250px 0"
          class="title"
        >
          掌握一门语言是学习编程的开始
        </h1>
      </Card>
      <Card
        style="margin: 0; padding: 0; height: 600px"
        static
      >
        <div
          class="view-loss"
          :style="'background-image: url(' + require('./images/2.webp') + ')'"
        ></div>
        <h1
          style="color: white; margin: 250px 0"
          class="title"
        >
          制作游戏是学会运用语言的过程
        </h1>
      </Card>
      <Card
        style="margin: 0; padding: 0; height: 600px"
        static
      >
        <div
          class="view-loss"
          :style="'background-image: url(' + require('./images/3.webp') + ')'"
        ></div>
        <h1
          style="color: white; margin: 250px 0"
          class="title"
        >
          不满足的心态是自我进步的征兆
        </h1>
      </Card>
      <Card
        style="margin: 0; padding: 0; height: 600px"
        static
      >
        <div
          class="view-loss"
          :style="'background-image: url(' + require('./images/4.webp') + ')'"
        ></div>
        <h1
          style="color: white; margin: 250px 0"
          class="title"
        >
          学会优化是通往更高水平的阶梯
        </h1>
      </Card>
    </Card>
    <!-- 时间轴 -->
    <Card static>
      <h1 class="title">~ Memory Start ~</h1>
    </Card>
    <div id="axis">
      <div id="line"></div>
      <!-- 250px -->
      <Card
        v-for="item in introList"
        :key="item.k"
        :data-img="item.img"
        @mouseenter="showIntro"
        @mouseleave="hideIntro"
        round
      >
        <h3>{{ item.k }}</h3>
        <Intro
          class="hide"
          :style="item.intro1Style"
          static
        >
          <h3 class="tip-b">{{ item.content }}</h3>
        </Intro>
        <Intro
          class="hide"
          :style="item.intro2Style"
        >
          <img
            style="width: 100%; height: 100%; border-radius: 10px"
            :src="require('./' + item.img)"
            alt=""
          />
        </Intro>
        <div
          :class="{
            pointer: true,
            left: item.pointer === 'left',
            right: item.pointer === 'right',
            hide: true
          }"
          :style="item.pointerStyle"
        ></div>
      </Card>
    </div>
    <!-- 链接板块 -->
    <Card static>
      <h1 class="title">~ Link Block ~</h1>
    </Card>
    <Card
      id="quick-link"
      class="flex-row-2"
      static
    >
      <Card
        @mouseenter="highLight"
        @mouseleave="toNormal"
      >
        <Card static>
          <h3 class="title">你可能感兴趣的</h3>
        </Card>
        <Card
          v-for="item in leftList"
          :key="item.path"
          class="link-item"
        >
          <p
            :data-path="item.path"
            class="tip"
          >
            {{ item.text }}
          </p>
        </Card>
      </Card>
      <Card
        @mouseenter="highLight"
        @mouseleave="toNormal"
      >
        <Card static>
          <h3 class="title">更多有趣的讯息</h3>
        </Card>
        <Card
          v-for="item in rightList"
          :key="item.path"
          class="link-item"
        >
          <p
            :data-path="item.path"
            class="tip"
          >
            {{ item.text }}
          </p>
        </Card>
      </Card>
    </Card>
    <!-- tips板块 -->
    <Card
      id="tips"
      static
    >
      <h1 class="title">~ Tips ~</h1>
      <h3
        class="tip"
        style="margin: 50px 0"
      >
        · 在板块区，你可以找到你想要的话题
      </h3>
      <h3
        class="tip"
        style="margin: 50px 0"
      >
        · 在博客区，你可以看到对应话题的板块，如果没有选择它不会显示的
      </h3>
      <h3
        class="tip"
        style="margin: 50px 0"
      >
        · 在资源区，你可以找到你想要了解的学习资源
      </h3>
      <h3
        class="tip"
        style="margin: 50px 0"
      >
        · 注意使用搜索功能加快你的搜索哦
      </h3>
    </Card>
  </div>
</template>
<script setup>
// 导入组件
import Intro from './components/introIndex.vue'
// 处理事件
const introList = [
  {
    k: '壹',
    intro1Style: 'top: 50%; left: 800%',
    intro2Style: 'top: 50%; left: -700%',
    pointerStyle: 'top: 50%; left: -120%',
    pointer: 'left',
    img: 'images/6.jpg',
    content:
      '人生就是一场旅行，不在乎目的地，在乎的应该是沿途的风景以及看风景的心情'
  },
  {
    k: '贰',
    intro1Style: 'top: 50%; left: -700%',
    intro2Style: 'top: 50%; left: 800%',
    pointerStyle: 'top: 50%; left: 220%',
    pointer: 'right',
    img: 'images/7.jpg',
    content:
      '你不能控制天气，但你可以改变你的情绪。你不能改变你的外表，但你可以掌握自己。你不能预见明天，但你可以珍惜今天'
  },
  {
    k: '叁',
    intro1Style: 'top: 50%; left: 800%',
    intro2Style: 'top: 50%; left: -700%',
    pointerStyle: 'top: 50%; left: -120%',
    pointer: 'left',
    img: 'images/8.jpg',
    content:
      '当你快乐的时候，你应该认为这种快乐不是永恒的。当你痛苦的时候，你应该认为这种痛苦不是永恒的'
  },
  {
    k: '肆',
    intro1Style: 'top: 50%; left: -700%',
    intro2Style: 'top: 50%; left: 800%',
    pointerStyle: 'top: 50%; left: 220%',
    pointer: 'right',
    img: 'images/9.jpg',
    content: '有时候你必须跳出窗外，然后在坠落的过程中长出翅膀'
  }
]

function showIntro (e) {
  // 显示卡片
  const items = e.target.getElementsByClassName('hide')
  const intro1 = items[0]
  const intro2 = items[1]
  const pointer = items[2]
  intro1.classList.remove('hide')
  intro1.classList.add('show')
  intro2.classList.remove('hide')
  intro2.classList.add('show')
  pointer.classList.remove('hide')
  pointer.classList.add('show')
  // 设置背景
  const bg = document.querySelector('#home-bg')
  bg.style.backgroundImage = 'url(' + require('./' + e.target.dataset.img) + ')'
}
function hideIntro (e) {
  // 隐藏卡片
  const items = e.target.getElementsByClassName('show')
  const intro1 = items[0]
  const intro2 = items[1]
  const pointer = items[2]
  intro1.classList.remove('show')
  intro1.classList.add('hide')
  intro2.classList.remove('show')
  intro2.classList.add('hide')
  pointer.classList.remove('show')
  pointer.classList.add('hide')
  // 设置背景
  const bg = document.querySelector('#home-bg')
  bg.style.backgroundImage = 'url(' + require('./images/5.webp') + ')'
}

// 处理quick-link
const leftList = [
  {
    path: '/#',
    text: 'ML'
  },
  {
    path: '/#',
    text: 'ML'
  },
  {
    path: '/#',
    text: 'ML'
  },
  {
    path: '/#',
    text: 'ML'
  }
]

const rightList = [
  {
    path: '/#',
    text: 'NLP'
  },
  {
    path: '/#',
    text: 'NLP'
  },
  {
    path: '/#',
    text: 'NLP'
  },
  {
    path: '/#',
    text: 'NLP'
  }
]
// 处理移动高光
function follow (event) {
  event = event || window.event
  const vnode = document.querySelector('#highLight')
  const mouseX = event.pageX - 100
  const mouseY = event.pageY - 100
  vnode.style.top = mouseY + 'px'
  vnode.style.left = mouseX + 'px'
}

function highLight () {
  // 聚焦
  const filter = document.getElementById('filter')
  const highLight = document.querySelector('#highLight')
  addEventListener('mousemove', follow)
  filter.style.opacity = 1
  highLight.style.opacity = 1
}

function toNormal () {
  // 去聚焦
  const filter = document.getElementById('filter')
  const highLight = document.querySelector('#highLight')
  removeEventListener('mousemove', follow)
  filter.style.opacity = 0
  highLight.style.opacity = 0
}
</script>
<style lang="css" scoped>
#filter {
  opacity: 0;
  pointer-events: none;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 1s;
}

#highLight {
  opacity: 0;
  pointer-events: none;
  z-index: 201;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  box-shadow: 0 0 200px 100px white;
}

#home-bg {
  opacity: 0.5;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('./images/5.webp');
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.5s;
}

#axis {
  position: relative;
  margin: 50px auto;
  display: flex;
  flex-flow: column wrap;
  width: 100px;
}

#axis > * {
  margin: 100px auto;
  background-color: white;
}

#line {
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  width: 5px;
  height: 100%;
  border-radius: 5px;
  background-color: black;
}

#axis .pointer {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center;
  width: 52px;
  height: 80px;
  background-image: url('./images/0.png');
  background-size: cover;
  background-repeat: no-repeat;
  transition: 1s;
}

#axis h3 {
  cursor: default;
}

.left {
  transform: translate(-50%, -50%) rotateZ(90deg);
}

.right {
  transform: translate(-50%, -50%) rotateZ(-90deg);
}

.hide {
  opacity: 0;
}

.show {
  opacity: 1;
}

#quick-link > * {
  border-radius: 30px 10px 30px 10px;
}

#quick-link p {
  cursor: pointer;
  width: 100%;
  height: 32px;
  line-height: 32px;
}

#quick-link .link-item:hover {
  background-color: black;
}

#quick-link .link-item:hover p {
  font-size: 20px;
  font-weight: bold;
  color: rgb(255, 255, 255);
}
</style>
