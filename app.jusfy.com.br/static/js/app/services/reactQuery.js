import {
    QueryClient
} from '@tanstack/react-query'
import {
    persistQueryClient
} from '@tanstack/react-query-persist-client'
import {
    createSyncStoragePersister
} from '@tanstack/query-sync-storage-persister'

export const MAX_CACHE_AGE_PERSIST_24_HOURS = 1000 * 60 * 60 * 24

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        },
    },
})

const persister =
    typeof window !== 'undefined' ?
    createSyncStoragePersister({
        storage: window.localStorage
    }) :
    undefined

export const initReactQueryPersist = () => {
    try {
        persistQueryClient({
            queryClient,
            persister,
            maxAge: MAX_CACHE_AGE_PERSIST_24_HOURS,
            buster: 'v1',
            dehydrateOptions: {
                shouldDehydrateQuery: (query) => query.meta ? .persist === true,
            }
        })
    } catch (error) {
        console.error('Failed to initialize React Query persistence:', error)
    }
}

export const clearCache = () => {
    queryClient.clear();
    persister.removeClient();
}