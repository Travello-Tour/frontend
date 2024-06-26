import { defu } from 'defu';
import type { UseFetchOptions } from 'nuxt/app';

export function useCustomFetch<T> (url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()
  // const userAuth = useCookie('apiToken')
  const defaults: UseFetchOptions<T> = {
    baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
    key: url,
    // mode: 'no-cors',
    // credentials: 'include',
    // headers: userAuth.value
    // ? { Authorization: `Bearer ${userAuth.value}`}
    // : {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onResponse ({request, response, options}) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
      // console.log(response)
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onResponseError ({request, response, options}) {
      // throw new myBusinessError()
      // console.log('err: ', response)
    }
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}