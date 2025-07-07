function main() {
    const timerEl = document.querySelector('[data-js="timer"]')
    const dayEl = timerEl.querySelector('[data-js="day"]')
    const hourEl = timerEl.querySelector('[data-js="hour"]')
    const minEl = timerEl.querySelector('[data-js="min"]')
    const secEl = timerEl.querySelector('[data-js="sec"]')
    const startTimestamp = new Date(2025, 4, 26, 23).getTime()
    const endTimestamp = new Date(2025, 7, 23, 2, 43).getTime()
    const nowTimestamp = new Date().getTime()

    const fullPeriod = endTimestamp - startTimestamp
    const pastPeriod = nowTimestamp - startTimestamp
    
    const pastPercent = Math.round(pastPeriod / (fullPeriod / 100))

    const diEl = document.querySelector('[data-js="di"]')
    const overlay = document.querySelector('[data-js="overlay"]')

    const tt = pastPercent / 20
    diEl.style.transition = 'all ' + tt + 's linear 1.5s'
    overlay.style.transition = 'width ' + tt + 's linear 1.5s'
    diEl.style.left = pastPercent + '%'
    diEl.style.transform = 'translateX(-100%)'
    overlay.style.width = pastPercent + '%'

    setInterval(() => {
        let now = new Date().getTime()
        let remPeriod = fullPeriod - (now - startTimestamp)
        const day = getDays()
        const hour = getHours()
        const min = getMin()
        const sec = getSec()

        secEl.innerHTML = sec
        minEl.innerHTML = min
        hourEl.innerHTML = hour
        dayEl.innerHTML = day

        function getDays() {
            let d = Math.floor(remPeriod / 86400000)
            remPeriod = remPeriod - d * 86400000

            let dStr = '<span>' + d + '</span> ' + dayTitle(d)
            return dStr
        }

        function getHours() {
            let h = Math.floor(remPeriod / 3600000)
            remPeriod = remPeriod - h * 3600000

            let hStr = '<span>' + h + '</span> ' + hourTitle(h)
            return hStr
        }

        function getMin() {
            let m = Math.floor(remPeriod / 60000)
            remPeriod = remPeriod - m * 60000

            let mStr = '<span>' + m + '</span> ' + minTitle(m)
            return mStr
        }

        function getSec() {
            let s = Math.floor(remPeriod / 1000)
            remPeriod = remPeriod - s * 1000

            let sStr = '<span>' + s + '</span> ' + secTitle(s)
            return sStr
        }
        
    }, 1000)

    function dayTitle(number) {
        if (number > 10 && [11, 12, 13, 14].includes(number%100)) return 'дней';
        last_num = number%10;
        if (last_num == 1) return 'день';
        if ([2,3,4].includes(last_num)) return 'дня';
        if ([5,6,7,8,9, 0].includes(last_num)) return 'дней';
    }

    function hourTitle(number) {
        if (number > 10 && [11, 12, 13, 14].includes(number%100)) return 'часов';
        last_num = number%10;
        if (last_num == 1) return 'час';
        if ([2,3,4].includes(last_num)) return 'часа';
        if ([5,6,7,8,9, 0].includes(last_num)) return 'часов';
    }

    function minTitle(number) {
        if (number > 10 && [11, 12, 13, 14].includes(number%100)) return 'минут';
        last_num = number%10;
        if (last_num == 1) return 'минута';
        if ([2,3,4].includes(last_num)) return 'минуты';
        if ([5,6,7,8,9, 0].includes(last_num)) return 'минут';
    }

    function secTitle(number) {
        if (number > 10 && [11, 12, 13, 14].includes(number%100)) return 'секунд';
        last_num = number%10;
        if (last_num == 1) return 'секунда';
        if ([2,3,4].includes(last_num)) return 'секунды';
        if ([5,6,7,8,9, 0].includes(last_num)) return 'секунд';
    }

}

document.addEventListener('DOMContentLoaded', () => {
    main()
})