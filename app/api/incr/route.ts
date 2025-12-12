import { type NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest): Promise<NextResponse> {
	const body = await req.json();
	const slug = body.slug as string | undefined;
  console.log({slug});
	if (!slug) {
		return new NextResponse("Slug not found", { status: 400 });
	}

	// Redis implementation disabled - returning success response
	return new NextResponse(null, { status: 202 });
}
