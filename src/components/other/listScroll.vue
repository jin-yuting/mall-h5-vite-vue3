<template>
  <div ref="wrapper" class="scroll-wrapper">
    <slot></slot>
  </div>
</template>

<script setup>
import BScroll from "better-scroll";
import { ref, onMounted } from "vue";
const props = defineProps({
  /**
   * 1 滚动的时候会派发scroll事件，会截流。
   * 2 滚动的时候实时派发scroll事件，不会截流。
   * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
   */
  probeType: {
    type: Number,
    default: 1,
  },
  // 点击列表是否派发click事件
  click: {
    type: Boolean,
    default: true,
  },
  // 是否开启横向滚动
  scrollX: {
    type: Boolean,
    default: false,
  },
  // 是否派发滚动事件
  listenScroll: {
    type: Boolean,
    default: false,
  },
  // 列表的数据
  scrollData: {
    type: Array,
    default: null,
  },
  // 是否派发滚动到底部的事件，用于上拉加载
  pullup: {
    type: Boolean,
    default: false,
  },
  // 是否派发顶部下拉的事件，用于下拉刷新
  pulldown: {
    type: Boolean,
    default: false,
  },
  // 是否派发列表滚动开始的事件
  beforeScroll: {
    type: Boolean,
    default: false,
  },
  // 当数据更新后，刷新scroll的延时
  refreshDelay: {
    type: Number,
    default: 20,
  },
});
const wrapper = ref(null);
//向外抛出的事件名称列表
const emit = defineEmits(["scroll", "scrollToEnd", "pulldown", "beforeScroll"]);

const initScroll = () => {
  const scroll = new BScroll(wrapper.value, {
    probeType: props.probeType,
    click: props.click,
    scrollX: props.scrollX,
  });
  // 是否派发滚动事件
  if (props.listenScroll) {
    scroll.on("scroll", (position) => {
      emit("scroll", position);
    });
  }
  if (props.pullup) {
    scroll.on("scrollEnd", () => {
      // 滚动到底部
      if (scroll.y <= scroll.maxScrollY + 50) {
        // 派发滚动到底部的事件
        emit("scrollToEnd");
      }
    });
  }
  if (props.pulldown) {
    scroll.on("touchend", (pos) => {
      // 下拉动作
      if (pos.y > 50) {
        // 下拉刷新
        emit("pulldown");
      }
    });
  }
  if (props.beforeScroll) {
    scroll.on("beforeScrollStart", () => {
      // 列表滚动前触发
      emit("beforeScroll");
    });
  }
};
const disable = () => {
  // 代理 better-scroll 的 disable 方法
  scroll && scroll.disable();
};
const enable = () => {
  // 代理 better-scroll 的 enable 方法
  scroll && scroll.enable();
};
const refresh = () => {
  // 代理 better-scroll 的 refresh 方法
  scroll && scroll.refresh();
};
const scrollTo = () => {
  // 代理 better-scroll 的 scrollTo 方法
  scroll && scroll.scrollTo.apply(scroll, arguments);
};
const scrollToElement = () => {
  // 代理 better-scroll 的 scrollToElement 方法
  scroll && scroll.scrollToElement.apply(scroll, arguments);
};

onMounted(() => {
  initScroll();
});
</script>

<style lang="less" scoped>
.scroll-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 10px;
}
</style>