import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">شروط الاستخدام</h1>
      <p className="mt-4 leading-8 text-mist-300">سيُضاف النص النهائي قبل الإطلاق. هذه صفحة مؤقتة.</p>
      <Link href="/" className="btn btn-ghost mt-8">العودة للرئيسية</Link>
    </main>
  );
}
