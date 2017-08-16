<style scoped>
  .index {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }


</style>
<template>
  <div class="index">
    <Row>
      <img src="/dist/images/logo.png" style="width: 40%;left: 60% ;margin-top: 8%;">
    </Row>
    <Row style="margin-top: 9%">
      <Col span="12" offset="6">
      <Radio-group v-model="loginType" type="button">
        <Radio label="密码登录"></Radio>
        <Radio label="短信登录"></Radio>
      </Radio-group>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data: {
      loginType: "密码登录",
    },
    methods: {
      handleClick() {
        this.$toast('Hello world!');
      }
    }
  };
</script>