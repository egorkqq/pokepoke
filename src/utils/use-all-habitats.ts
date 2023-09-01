import useSWR from 'swr'

import { NamedAPIResourceList } from 'api/common'
import { getAllHabitats } from 'api/habitats'

export const useAllHabitats = () => {
  const { data, isLoading, error } = useSWR<NamedAPIResourceList>(['habitats'], {
    fetcher: () => getAllHabitats(),
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
