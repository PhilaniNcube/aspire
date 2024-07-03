import { revalidatePath } from "next/cache";

export async function POST(request: Request) {

  const req = await request.json();
  console.log(req);

	revalidatePath("/publications", "layout");
	revalidatePath("/news", "layout");
	revalidatePath("/vacancies", "layout");
	revalidatePath("/documents", "layout");
	revalidatePath("/projects", "layout");
	revalidatePath("/", "layout");


	return new Response("OK");
}
