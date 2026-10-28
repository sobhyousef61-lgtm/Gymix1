import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  { t: "إدارة المشتركين", d: "أضف مشتركيك وابحث بالاسم أو الهاتف واطّلع على ملف كل مشترك." },
  { t: "متابعة الاشتراكات", d: "اشتراك شهري أو ثلاثة أشهر أو سنة أو مدة مخصصة بأسعارك أنت." },
  { t: "تسجيل الدفعات النقدية", d: "سجّل الدفعة الكاملة أو الجزئية ويُحسب المتبقي تلقائياً." },
  { t: "تنبيهات انتهاء الاشتراكات", d: "اعرف من سينتهي اشتراكه قريباً قبل أن يتأخر التجديد." },
  { t: "تقارير الإيرادات المسجلة", d: "تقارير يومية وشهرية وضمن فترة تحددها بناءً على الدفعات المسجلة فعلاً." },
  { t: "الوصول من الهاتف", d: "مصمم ليعمل بسهولة على شاشة هاتفك أثناء وجودك في النادي." },
  { t: "حساب خاص لكل نادٍ", d: "بيانات ناديك منفصلة تماماً ولا يراها أي نادٍ آخر." },
];

const plans = [
  { name: "التجربة المجانية", period: "30 يوماً", price: "مجاناً", note: "تبدأ عند تسجيل ناديك" },
  { name: "شهر واحد", period: "30 يوماً", price: "150,000", note: "ليرة سورية" },
  { name: "ثلاثة أشهر", period: "3 أشهر", price: "400,000", note: "ليرة سورية" },
  { name: "سنة كاملة", period: "12 شهراً", price: "1,600,000", note: "ليرة سورية" },
];

const faqs = [
  { q: "هل أحتاج إلى كمبيوتر؟", a: "لا. GYMIX يعمل من متصفح هاتف Android مباشرة." },
  { q: "هل بيانات ناديي مرئية للأندية الأخرى؟", a: "لا. لكل نادٍ حساب وبيانات منفصلة." },
  { q: "كيف أدفع اشتراك GYMIX؟", a: "عبر تحويل شام كاش ثم رفع صورة الإيصال. يراجع فريقنا الطلب ويفعّل اشتراكك بعد التأكد من وصول التحويل." },
  { q: "ماذا يحدث بعد انتهاء الفترة المجانية؟", a: "تبقى بياناتك محفوظة ويمكنك تسجيل الدخول وطلب التجديد. تُفعَّل ميزات الإدارة بعد تفعيل اشتراكك." },
  { q: "هل يستقبل النظام مدفوعات الأعضاء إلكترونياً؟", a: "لا. العضو يدفع لك داخل النادي وأنت تسجّل الدفعة في النظام." },
];

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <>
      <Header />
      <main>
        {/* الهيرو */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 md:pt-24">
          <p className="mb-4 text-sm text-lime" dir="ltr">Your Gym. Under Control.</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            أدر ناديك الرياضي بسهولة مع GYMIX
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-mist-300">
            نظام بسيط يساعدك على إدارة المشتركين والاشتراكات والدفعات ومتابعة مواعيد التجديد من مكان واحد.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className="btn btn-primary">ابدأ تجربتك المجانية</Link>
            <Link href="/login" className="btn btn-ghost">تسجيل الدخول</Link>
          </div>
        </section>

        {/* الميزات */}
        <section id="features" className="scroll-mt-20 border-t border-ink-700 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-extrabold">كل ما يحتاجه ناديك</h2>
            <p className="mt-2 text-mist-300">أدوات عملية بدون تعقيد.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.t} className="rounded-2xl border border-ink-700 bg-ink-800 p-5">
                  <h3 className="text-lg font-bold text-lime">{f.t}</h3>
                  <p className="mt-2 leading-7 text-mist-300">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* الأسعار */}
        <section id="pricing" className="scroll-mt-20 border-t border-ink-700 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-extrabold">أسعار اشتراك GYMIX</h2>
            <p className="mt-2 text-mist-300">الأسعار بالليرة السورية.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((p, i) => (
                <div key={p.name} className={`rounded-2xl border p-5 ${i === 0 ? "border-lime bg-ink-700" : "border-ink-700 bg-ink-800"}`}>
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="text-sm text-mist">{p.period}</p>
                  <p className="mt-4 text-3xl font-extrabold">{p.price}</p>
                  <p className="text-sm text-mist">{p.note}</p>
                </div>
              ))}
            </div>
            <Link href="/register" className="btn btn-primary mt-8 w-full sm:w-auto">ابدأ تجربتك المجانية</Link>
          </div>
        </section>

        {/* الأسئلة الشائعة */}
        <section id="faq" className="scroll-mt-20 border-t border-ink-700 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-extrabold">الأسئلة الشائعة</h2>
            <div className="mt-8 grid gap-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-ink-700 bg-ink-800 p-5">
                  <summary className="cursor-pointer text-lg font-bold">{f.q}</summary>
                  <p className="mt-3 leading-7 text-mist-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* التواصل */}
        <section id="contact" className="scroll-mt-20 border-t border-ink-700 py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-extrabold">تواصل معنا</h2>
            {phone || email ? (
              <div className="mt-6 grid gap-3">
                {phone && <a href={`tel:${phone}`} className="btn btn-ghost" dir="ltr">{phone}</a>}
                {email && <a href={`mailto:${email}`} className="btn btn-ghost" dir="ltr">{email}</a>}
              </div>
            ) : (
              <p className="mt-4 text-mist-300">ستتوفر بيانات التواصل قريباً.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
