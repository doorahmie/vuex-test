<script setup>
    import { ref, reactive } from 'vue'
    const refMessage = ref('안녕하세요. 김민지 입니다.')
    const reactiveMessage = reactive({ msg: '싱크로나이즈 스위밍' })
    const toggleRefMessage = () => {
        refMessage.value = refMessage.value === '김건희로 개명한 김민지' ? '안녕하세요. 김민지 입니다.' : '김건희로 개명한 김민지'
    }
    const toggleReactiveMessage = () => {
        console.log('reactiveMessage.msg : ', reactiveMessage.msg)
        reactiveMessage.msg = reactiveMessage.msg === '아티스틱 스위밍' ? '싱크로나이즈 스위밍' : '아티스틱 스위밍'
    }
</script>
<template>
    <div>
        <h1>HookTest</h1>
        <br />
        <br />
        <br />
        <p>message using ref : {{refMessage}}</p>
        <button @click="toggleRefMessage">Change refMessage</button>
        <br />
        <br />
        <br />
        <p>message using reactive : {{reactiveMessage.msg}}</p>
        <button @click="toggleReactiveMessage">Change refMessage</button>
    </div>
</template>