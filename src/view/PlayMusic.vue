<template>
  <div class="play-music">
<!--    <audio @canplay="getDuration" @timeupdate="updateTime" ref="au" controls src="music/again.mp3">-->
<!--      不支持-->
<!--    </audio>-->

  </div>
</template>

<script>
export default {
  name: "PlayMusic",
  data () {
    return {
      musicDuration: 0,
      currentTime: 0
    }
  },
  methods: {
    getDuration() {
      this.musicDuration = this.$refs.au.duration
      console.log('总时间', this.musicDuration); //此时可以获取到duration
    },
    updateTime(e) {
      this.currentTime = e.target.currentTime;  //获取audio当前播放时间
      console.log('当前时间', this.currentTime, parseInt(this.currentTime))
    },
  }
}
</script>

<style lang="less" scoped>
.play-music {
  width: 100%;
  height: 100vh;
}
</style>