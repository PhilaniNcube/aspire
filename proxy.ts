import type { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function proxy(request: NextRequest) {
	return await updateSession(request);
}

export const config = {
	matcher: [
		/*
		 * Only run middleware on routes that require auth session management.
		 * Public pages (news, projects, documents, procurement, etc.) are excluded.
		 */
		"/admin/:path*",
		"/api/:path*",
		"/vacancies/:path*",
	],
};
