'use client';

export default function ErrorEvents({ error }) {
  return (
    <main>
      <h2>Task failed succsesfully :/</h2>
      <p>{error}</p>
    </main>
  );
}
