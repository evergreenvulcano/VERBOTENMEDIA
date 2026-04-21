import { createIntakeDocument, toErrorResponse } from "@/lib/github-content";
import { IntakeType } from "@/lib/types";

type IntakePageProps = {
  searchParams: Promise<{ ok?: string; error?: string; path?: string }>;
};

const TYPES: IntakeType[] = ["essay", "criticism", "literary", "fragment", "analysis"];

function todayString() {
  return new Date().toISOString().slice(0, 10);
}

export default async function IntakePage({ searchParams }: IntakePageProps) {
  const params = await searchParams;

  async function submit(formData: FormData) {
    "use server";

    try {
      await createIntakeDocument({
        title: String(formData.get("title") ?? ""),
        summary: String(formData.get("summary") ?? ""),
        body: String(formData.get("body") ?? ""),
        date: String(formData.get("date") ?? "") || undefined,
        type: (String(formData.get("type") ?? "") || undefined) as IntakeType | undefined,
        slug: String(formData.get("slug") ?? "") || undefined,
      });
    } catch (error) {
      const mapped = toErrorResponse(error);
      const message = encodeURIComponent(mapped.error);
      return Response.redirect(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/intake?error=${message}`, 302);
    }

    return Response.redirect(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/intake?ok=1`, 302);
  }

  return (
    <main>
      <h1>Inbox Intake</h1>
      <p>Submit normalized markdown directly to inbox/writings on the repository default branch.</p>

      {params.ok ? <div className="notice">Saved successfully.</div> : null}
      {params.error ? <div className="notice error">{params.error}</div> : null}

      <form action={submit}>
        <label>
          Title *
          <input name="title" required />
        </label>

        <label>
          Summary *
          <textarea name="summary" required rows={4} />
        </label>

        <label>
          Body *
          <textarea name="body" required />
        </label>

        <label>
          Date
          <input name="date" defaultValue={todayString()} placeholder="YYYY-MM-DD" />
        </label>

        <label>
          Type
          <select name="type" defaultValue="fragment">
            {TYPES.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>

        <label>
          Slug
          <input name="slug" placeholder="ascii-kebab-case (optional)" />
        </label>

        <button type="submit">Submit to inbox</button>
      </form>
    </main>
  );
}
