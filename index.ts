import { ref } from "vue"

const useToggle = (initValue = false) => {
    const state = ref(initValue)

    const toggleState = () => {
        return state.value = !state.value
    }

    return [state, toggleState]
};

export default useToggle;
