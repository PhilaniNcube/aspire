import type { Database } from "@/types";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
	try {
		const cookieStore = cookies();

		return createServerClient<Database>(
			process.env.NEXT_PUBLIC_SUPABASE_URL,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
			{
				cookies: {
					getAll() {
						return cookieStore.getAll();
					},
					setAll(cookiesToSet) {
						try {
							for (const { name, value, options } of cookiesToSet) {
								cookieStore.set(name, value, options);
							}
						} catch {
							// The `setAll` method was called from a Server Component.
							// This can be ignored if you have middleware refreshing
							// user sessions.
						}
					},
				},
			},
		);
	} catch (error) {
		// During build time, cookies() throws an error
		// Return a client with empty cookie handlers
		return createServerClient<Database>(
			process.env.NEXT_PUBLIC_SUPABASE_URL,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
			{
				cookies: {
					getAll() {
						return [];
					},
					setAll() {
						// No-op during build
					},
				},
			},
		);
	}
}
