import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-brand-beige text-brand-green px-6">
      <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none mb-6">404</h1>
      <p className="text-xl md:text-2xl font-light mb-8 text-center max-w-md">
        หน้าที่คุณหามาไม่มีอยู่ หรืออาจถูกย้ายไปแล้ว
      </p>
      <Link
        href="/"
        className="bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:bg-brand-emerald transition-colors"
      >
        กลับหน้าแรก
      </Link>
    </main>
  );
}
