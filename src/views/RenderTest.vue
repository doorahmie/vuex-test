<script setup>
    import { ref, reactive, toRaw, effectScope, computed } from 'vue'
    const refMessage = ref('안녕하세요. 김민지 입니다.')
    const reactiveMessage = reactive({ msg: '싱크로나이즈 스위밍' })
    const getReactiveMessageLength = computed(() => {
        return reactiveMessage.msg.length > 9 ? 'Yes' : 'No'
    })
    const nowWithComputed = computed(() => Date.now(), {
        // https://vuejs.org/api/reactivity-core#computed
        onTrack(e) {
            // debugger
            console.log('onTrack : ', e)
        },
        onTrigger(e) {
            // debugger
            console.log('onTrigger : ', e)
        }
    })

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
    // a computed ref
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
        <a href="https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue">Reactivity</a>
        <br />
        <br />
        <br />
        <p>reactive : vue가 proxy를 이용해 만든 객체
            shallowReactive도 있음. readonly두 shallowReadonly도 있음.
        </p>
        <p>디폴트는 ref가 먼저다. 비구조화 할당하지 말것. 반응형 연결 끊어지는 것</p>
        <p>객체 유형에만 사용 할 것</p>
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
        <a href="https://ko.javascript.info/proxy">Vue는 JS의 Proxy를 사용한다.</a>
        <a
            href="https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Proxy-Reflect-%EA%B3%A0%EA%B8%89-%EA%B8%B0%EB%B2%95">proxy사용법</a>
        <br />
        <br />
        <br />
        <p>template : DOM에서 요소를 렌더링하기 위함이 아닌</p>
        <p>vue에 내장된 지시문을 사용하기 위한 자리표시자로 사용</p>
        <br />
        <br />
        <br />
        <p>computed : {{getReactiveMessageLength}}</p>
        <p>toRaw computed : {{toRaw(getReactiveMessageLength)}}</p>
        <p>now with computed : {{nowWithComputed}}</p>
        <p>now with computed는 계속 새로 호출되어, 새로운 값을 반환한다. 캐싱이 없다. 다른 예시는 없나...날짜는 계속 바뀌긴 하잖아</p>
        <p>새로운 값을 computed할 때는, setter를 설정해줄 수 있다.</p>
        <code lang="javascript">
            import { ref, computed } from 'vue'

            const firstName = ref('John')
            const lastName = ref('Doe')

            const fullName = computed({
                // getter
                get() {
                    return firstName.value + ' ' + lastName.value
                },
                // setter
                set(newValue) {
                    // Note: we are using destructuring assignment syntax here.
                    [firstName.value, lastName.value] = newValue.split(' ')
                }
            })
        </code>
        <br />
        <br />
        <br />
    </div>
</template>