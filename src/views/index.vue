<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

</style>
<template>

    <div class="index">
        <div class="app-icon"/>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">登录</mt-tab-item>
            <mt-tab-item id="2">注册</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
               内容1
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                内容2
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-button @click.native="handleClick">按钮</mt-button>
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
                </h1>
                <h2>
                    <p>{{ $t('welcome') }}</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }, handleClick() {
                this.$toast('Hello world!');
            }
        }
    };
</script>