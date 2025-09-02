import { object, preprocess } from 'zod'
import { schema as base } from '../project'
import { defaults } from '../defaults'
import { elementsPreprocess } from './server-refinements'
import messages from '../../messages'

export const schema = base.merge(
  object({
    image: defaults.server.image.optional(),
    categories: preprocess(elementsPreprocess, defaults.ids.nonempty(messages.nonempty)),
  })
)
