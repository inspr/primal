const MAX_NAME_LENGTH = 25
const MIN_NAME_LENGTH = 6

const computeMeshAndMaxLength = (
    firstName: string,
    lastName?: string,
    userId?: string
) => {
    let maxLength = firstName.length + (lastName?.length || 0)
    maxLength =
        userId && maxLength > userId.length
            ? maxLength
            : userId?.length || maxLength
    if (maxLength < MIN_NAME_LENGTH) maxLength = MIN_NAME_LENGTH
    return [Math.round(maxLength / 4), maxLength]
}

const formatDisplayName = (
    firstName: string,
    maxLength: number,
    lastName?: string
) => {
    if (maxLength > MAX_NAME_LENGTH && lastName?.length) {
        return `${firstName} ${lastName[0]}.`
    }
    return [firstName, lastName].join(" ")
}

export { computeMeshAndMaxLength, formatDisplayName }
