import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=> {
        document.title = `${title} | Spice-palate`
    }, [title])
}

export default useTitle;