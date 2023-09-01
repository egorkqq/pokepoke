export interface NamedAPIResource {
  /** The name of the referenced resource */
  name: string
  /** The URL of the referenced resource */
  url: string
}

export interface NamedAPIResourceList {
  /** The total number of resources available from this API */
  count: number
  /** The URL for the next page in the list */
  next: string | null
  /** The URL for the previous page in the list */
  previous: string | null
  /** A list of named API resources */
  results: NamedAPIResource[]
}

/**
 * The localized name for an API resource in a specific language
 */
export interface Name {
  /** The localized name for an API resource in a specific language */
  name: string
  /** The language this name is in */
  language: NamedAPIResource
}
