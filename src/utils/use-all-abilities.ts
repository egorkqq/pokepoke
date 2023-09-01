import useSWR from 'swr'

import { getAllAbilities } from 'api/abilities'
import { NamedAPIResourceList } from 'api/common'

export const useAllAbilities = () => {
  const { data, isLoading, error } = useSWR<NamedAPIResourceList>(['abilities'], {
    fetcher: () => getAllAbilities(),
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
  })

  return {
    data,
    isLoading,
    error,
  }
}
