import {z} from "zod";

const envVariables = z.object({
	SANITY_PRODUCT_ID: z.string(),
	DB_PASSWORD: z.string(),
	NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
