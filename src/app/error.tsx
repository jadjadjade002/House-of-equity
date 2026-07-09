"use client";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-brand-beige text-brand-green px-6">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
        เกิดข้อผิดพลาด
      </h1>
      <p className="text-xl md:text-2xl font-light mb-8 text-center max-w-md">
        กรุณาลองใหม่อีกครั้ง
      </p>
      <button
        onClick={() => unstable_retry()}
        className="bg-brand-green text-white px-8 py-3 rounded-full font-medium hover:bg-brand-emerald transition-colors"
      >
        ลองอีกครั้ง
      </button>
    </main>
  );
}
