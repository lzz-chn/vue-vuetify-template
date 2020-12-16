<template>
    <div class="mqtt"></div>
</template>

<script>
import mqtt from 'mqtt'

export default {
    name: 'Mqtt',
    data() {
        return {
            client: null,
            wsUrl: process.env.VUE_APP_WS
        }
    },
    props: {
        connect: { type: Boolean, default: false },
        topic: { type: String | Array },
        clientId: { type: String },
        console: { type: Boolean, default: false }
    },
    watch: {
        connect(val) {
            if (val) {
                this.mqttInit(this.wsUrl, this.clientId)
                this.mqttReceiveMessages(this.topic)
            }
        }
    },
    beforeDestroy() {
        if (this.client) {
            this.client.end() // 销毁前关闭 mqtt 连接
        }
    },
    methods: {
        // 初始化并连接
        mqttInit(wsUrl, clientId) {
            let option = {
                connectTimeout: 40000,
                clientId: clientId,
                clean: true
            }
            this.client = mqtt.connect(wsUrl, option)
            this.console && console.log('开始链接')
        },
        // 主题订阅
        mqttSubscribe(topic) {
            if (Array.isArray(topic)) {
                topic.forEach(v => {
                    this.client.subscribe(v, { qos: 2 }, error => {
                        if (!error) {
                            this.console && console.log('订阅成功', v)
                        } else {
                            this.console && console.log('订阅失败', v)
                        }
                    })
                })
            } else {
                this.client.subscribe(topic, { qos: 2 }, error => {
                    if (!error) {
                        this.console && console.log('订阅成功 ', topic)
                    } else {
                        this.console && console.log('订阅失败 ', topic)
                    }
                })
            }
        },
        // 监听消息
        mqttReceiveMessages(topic) {
            // mqtt连接
            this.client.on('connect', e => {M
                this.console && console.log('连接成功')
                this.mqttSubscribe(topic)
            })
            // 接收消息处理
            this.client.on('message', (topic, message) => {
                this.console && console.log(`mqtt接收 ${topic}：${message}`)
                this.$emit('receiveMessage', topic, message.toString())
            })
            // 断开发起重连
            this.client.on('reconnect', () => {
                this.console && console.log('正在重连')
            })
            // 链接异常处理
            this.client.on('error', error => {
                this.console && console.log('连接失败: ', error)
            })
        },
        // 发送消息
        mqttSendMessage(topic, val) {
            this.client.publish(topic, JSON.stringify(val))
        }
    }
}
</script>

<style lang="less" scoped>
.mqtt {
}
</style>
