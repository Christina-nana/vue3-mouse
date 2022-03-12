// 鼠标时间模块
import { onMounted, onUnmounted, ref } from 'vue'
interface Position{
    x:number
    y:number
}
export default function useMouse():Position{
    let x = ref<number>(0)
    let y = ref<number>(0)
    function mouseEvent(e:MouseEvent) {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        window.addEventListener('mousemove', mouseEvent)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', () => { })
    })
    return {x,y}
}
