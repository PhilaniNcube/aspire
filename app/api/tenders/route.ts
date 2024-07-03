import { revalidatePath } from "next/cache";

export async function POST(request:Request) {
  revalidatePath("/procurement");
  revalidatePath("/procurement/awarded");
  revalidatePath("/procurement/closed-tenders");

  return new Response("OK");
}
