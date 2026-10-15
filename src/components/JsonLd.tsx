export default function JsonLd({ schema }: { schema: Record<string, any> }) {
  // Escape "<" so no string value can ever close the <script> tag early.
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
