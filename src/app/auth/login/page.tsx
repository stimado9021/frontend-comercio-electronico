import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white p-8 rounded shadow-md w-96 mt-48">
      <h2 className="text-4xl font-semibold mb-6 text-center">
        Iniciar sesión
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className=" btn-primary w-full " type="submit">
            Iniciar sesión
          </button>
        </div>
        <div className="w-full h-[220] bg-slate-700 my-10 "></div>
        <Link
          href="/auth/register"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Crear Cuenta
        </Link>
      </form>
    </div>
  );
}
