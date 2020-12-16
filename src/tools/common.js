export default {
    /**
     * @description 转换日期格式
     * @param {object} date Date实例对象
     * @returns YYYY-MM-DD HH:MM:SS
     */
    transformDate(date) {
        return date ? new Date(date).toLocaleString('chinese', { hour12: false }).replace(/\//g, '-') : '-'
    },
    /**
     * @description 计算时长
     * @param {string} timestamp 时间戳
     * @returns D天 H时 M分 S秒
     */
    calculationTime(timestamp) {
        if (timestamp) {
            let days = timestamp / 1000 / 60 / 60 / 24
            let daysRound = Math.floor(days)
            let hours = timestamp / 1000 / 60 / 60 - 24 * daysRound
            let hoursRound = Math.floor(hours)
            let minutes = timestamp / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound
            let minutesRound = Math.floor(minutes)
            let seconds = timestamp / 1000 - 24 * 60 * 60 * daysRound - 60 * 60 * hoursRound - 60 * minutesRound
            let secondsRound = Math.floor(seconds)
            let time = hoursRound + ' : ' + minutesRound + ' : ' + seconds
            return `${daysRound == 0 ? '' : daysRound + '天 '}
            ${hoursRound == 0 ? '' : hoursRound + '时'}
            ${minutesRound == 0 ? '' : minutesRound + '分'}
            ${secondsRound == 0 ? '-' : secondsRound + '秒'}`
        } else {
            return '-'
        }
    },
    /**
     * @description 判断是否为ios系统
     * @returns true or false
     */
    isIOS() {
        let u = navigator.userAgent
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

        return isIOS ? true : false
    },
    /**
     * @description 识别网络环境
     * @returns 接口地址
     */
    recognitionEnv() {
        let ip = window.location.hostname
        let isInterNet = false

        isInterNet = ip.match(/^10\./) // 10.0.0.0--10.255.255.255
        isInterNet = ip.match(/^172\.1[6-9]|2[0-9]|31\./) // 172.16.0.0--172.31.255.255
        isInterNet = ip.match(/^192\.168\./) // 192.168.0.0--192.168.255.255

        return Boolean(isInterNet) ? globalConfig.api.intraNet : globalConfig.api.extraNet
    }
}
