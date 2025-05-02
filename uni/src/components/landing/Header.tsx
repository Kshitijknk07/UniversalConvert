export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-black"></div>
        <div className="h-2 w-2 rounded-full bg-black"></div>
        <span className="ml-2 font-medium">UniversalConvert</span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-sm">EN</button>
        <a href="/contact" className="text-sm hover:underline">
          CONTACT US
        </a>
        <button className="flex flex-col space-y-1">
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
        </button>
      </div>
    </header>
  );
}
