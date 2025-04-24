export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="w-4/5 border-t border-gray-600 mx-auto mb-4"></div>
      <p className="text-center text-gray-500 text-sm pb-4">
        © {new Date().getFullYear()} Jp Moura
      </p>
    </footer>
  )
}
