import { HRef } from "../types"

const renderDateBar = (index: number, arrayLength: number) => {
    return index != arrayLength - 1
}

const filterFromHomeAndBeyond = (objectMapper: [string, HRef][]) => {
    const whereIsHome = objectMapper
        .map((nameLink) => nameLink[0])
        .indexOf("home")

    if (whereIsHome > 0) {
        return objectMapper.filter((_, index) => index >= whereIsHome)
    }
    return objectMapper
}

const nameAndLinkArrayGenerator = (url: HRef, home: string) => {
    let objectMapper: { [key: string]: HRef } = {}
    let linkAccumulator = ""
    url.split("/").forEach((page) => {
        if (page) {
            linkAccumulator += `/${page}`
            objectMapper[page === home ? "home" : page] =
                linkAccumulator as HRef
        }
    })
    return filterFromHomeAndBeyond(Object.entries(objectMapper))
}

export { renderDateBar, filterFromHomeAndBeyond, nameAndLinkArrayGenerator }
