import { useCallback, useState } from "react";

export default function useProcessing() {
    const [processing, setProcessing] = useState<boolean>(false);

    const initProcessing = useCallback(() => {
        setProcessing(true)
    }, [])


    const endProcessing = useCallback(() => {
        setProcessing(false)
    }, [])

    return {
        processing, initProcessing, endProcessing
    }
}