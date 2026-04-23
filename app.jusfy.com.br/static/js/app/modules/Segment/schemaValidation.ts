import { z } from 'zod';

export const analyticsEventSchema = z.object({
  event: z.string().min(1, 'event é obrigatório'),
  properties: z.object({
    category: z.string().min(1, 'category é obrigatório'),
    event_meaning: z.string().min(1, 'event_meaning é obrigatório'),
    owner: z.string().min(1, 'owner é obrigatório'),
    relevant_user_activity: z.boolean(),
    event_text: z.string().optional(),
    category_name: z.string().optional(),
    menu_version: z.string().optional(),
    item_name: z.string().optional(),
    category_parent: z.string().nullable().optional(),
    target_version: z.string().optional(),
  }),
  context: z.object({
    groupId: z.string().min(1, 'context.groupId é obrigatório'),
    library: z.object({
      name: z.string().min(1, 'context.library.name é obrigatório'),
      componente: z.string().min(1, 'context.library.componente é obrigatório'),
    }),
  }),
});
