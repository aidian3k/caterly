import NavigationLink from "./NavigationLink";

export default function Navigation() {
  return (
    <nav className="bg-blue-300 p-4 flex-row flex gap-5 w-full drop-shadow-md items-center mb-4">
      <div>
        <h1 className="font-bold text-2xl">Caterly</h1>
      </div>
      <div className="flex-grow flex flex-row gap-2.5 justify-start">
        <NavigationLink label="Strona główna" path="dashboard" />
        <NavigationLink label="Lista posiłków" path="meals" />
        <NavigationLink label="Koszyk" path="cart" />
      </div>
    </nav>
  );
}
