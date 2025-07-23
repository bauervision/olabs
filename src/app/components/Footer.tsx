// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} oLabs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
