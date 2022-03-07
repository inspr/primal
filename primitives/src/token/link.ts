export type referrerKinds =
    // No referrer information is sent
    | "no-referrer"
    // Default. Sends the origin, path, and query string if the protocol security level stays the same or is higher
    // (HTTP to HTTP, HTTPS to HTTPS, HTTP to HTTPS is ok). Sends nothing to less secure level (HTTPS to HTTP is not ok)
    | "no-referrer-when-downgrade"
    // Sends the origin (scheme, host, and port) of the document
    | "origin"
    // Sends the origin of the document for cross-origin request. Sends the origin, path, and query string for same-origin request
    | "origin-when-cross-origin"
    // Sends a referrer for same-origin request. Sends no referrer for cross-origin request
    | "same-origin"
    // Sends the origin if the protocol security level stays the same or is higher
    // (HTTP to HTTP, HTTPS to HTTPS, and HTTP to HTTPS is ok). Sends nothing to less secure level (HTTPS to HTTP)
    | "strict-origin-when-cross-origin"
    // Sends the origin, path, and query string (regardless of security). Use this value carefully!
    | "unsafe-url"
    // Same as 'origin' but doesn't downgrades from HTTPS to HTTP (will remove Referer if source is HTTPS and dest HTTP)
    | "strict-origin"

export type relKinds =
    // Provides a link to an alternate representation of the document (i.e. print page, translated or mirror)
    | "alternate"
    // Provides a link to the author of the document
    | "author"
    // Permanent URL used for bookmarking
    | "bookmark"
    // Indicates that the referenced document is not part of the same site as the current document
    | "external"
    // Provides a link to a help document
    | "help"
    // Provides a link to licensing information for the document
    | "license"
    //	Provides a link to the next document in the series
    | "next"
    //	Links to an unendorsed document, like a paid link.
    // ("nofollow" is used by Google, to specify that the Google search spider should not follow that link)
    | "nofollow"
    //	Requires that any browsing context created by following the hyperlink must not have an opener browsing context
    | "noopener"
    // Makes the referrer unknown. No referer header will be included when the user clicks the hyperlink
    | "noreferrer"
    //	The previous document in a selection
    | "prev"
    // Links to a search tool for the document
    | "search"
    // A tag (keyword) for the current document
    | "tag"
