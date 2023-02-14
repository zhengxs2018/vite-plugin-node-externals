import { ExternalsOptions, externals } from 'rollup-plugin-node-externals'

import type { Plugin } from 'vite'

function nodeExternals(options?: ExternalsOptions): Plugin {
  return {
    ...externals(options),
    name: 'vite-plugin-node-externals',
    enforce: 'pre', // https://cn.vitejs.dev/guide/api-plugin.html#plugin-ordering
  }
}

export type { ExternalsOptions }

export default nodeExternals
