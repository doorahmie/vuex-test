<script setup>
    import { ref, reactive, toRaw, effectScope } from 'vue'
    const refMessage = ref('안녕하세요. 김민지 입니다.')
    const reactiveMessage = reactive({ msg: '싱크로나이즈 스위밍' })
    const toggleRefMessage = () => {
        refMessage.value = refMessage.value === '김건희로 개명한 김민지' ? '안녕하세요. 김민지 입니다.' : '김건희로 개명한 김민지'
    }
    const toggleReactiveMessage = () => {
        console.log('reactiveMessage.msg : ', reactiveMessage.msg)
        reactiveMessage.msg = reactiveMessage.msg === '아티스틱 스위밍' ? '싱크로나이즈 스위밍' : '아티스틱 스위밍'
    }
    // const returnBr = () => {
    //     // return <br />
    // }

</script>
<template>
    <div>
        <h1>RenderTest</h1>
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
        <p>reactive는 vue가 proxy를 이용해 만든 객체이다.
            shallowReactive도 있음.
        </p>
        <br />
        <br />
        <br />
        <p>toRaw(reactiveMessage) : {{toRaw(reactiveMessage)}}</p>
        <a href="https://vuejs.org/api/reactivity-advanced.html#toraw">toRaw메소드는 Vue가 생성한 프록시의 원본 객체를 반환한다.</a>
        <!-- <div v-html="returnBr"></div> -->
        <br />
        <br />
        <br />
        <p>Vue Proxy</p>
        <a href="https://ko.javascript.info/proxy">Vue는 Proxy를 사용한다.</a>
        <a
            href="https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Proxy-Reflect-%EA%B3%A0%EA%B8%89-%EA%B8%B0%EB%B2%95">proxy사용법</a>
        <br />
        <br />
        <br />
        <p>template 태그는 DOM에서 요소를 렌더링하기 위함이 아닌</p>
        <p>vue에 내장된 지시문을 사용하기 위한 자리표시자로 사용</p>
    </div>
</template>