export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      {/* Payment Methods Section */}
      <div className="border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-medium text-gray-900 mb-4">
            Métodos de pago
          </h3>
          <div className="flex gap-4">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">AMEX</span>
            </div>
            <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">MC</span>
            </div>
            <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">VISA</span>
            </div>
            <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">PP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customer Service */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Atención al Cliente
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Ayuda y contactos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Pedidos y envíos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Límites de importación
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Devoluciones y reembolsos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Pagos y precios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Pagos con criptomoneda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Términos y Condiciones de la Promoción
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Compromiso de ENTAZO con el cliente
                  </a>
                </li>
              </ul>
            </div>

            {/* About ENTAZO */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Acerca de ENTAZO
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Acerca de nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Partners de ENTAZO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Publicidad de ENTAZO
                  </a>
                </li>
              </ul>
            </div>

            {/* Discounts and Membership */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Descuentos y membresía
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Programa de afiliados
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Invitar a un amigo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Programa de Lealtad
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                X
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C18.624 0 24.017 5.384 24.017 12.017c0 6.624-5.384 12.017-12.017 12.017S-.017 18.641-.017 12.017C-.017 5.384 5.384-.017 12.017-.017zm5.568 8.912c-.054-.298-.216-.558-.432-.734-.216-.176-.486-.27-.756-.27-.27 0-.54.094-.756.27-.216.176-.378.436-.432.734l-.648 3.888c-.054.324-.162.648-.324.918-.162.27-.378.486-.648.648-.27.162-.594.243-.918.243s-.648-.081-.918-.243c-.27-.162-.486-.378-.648-.648-.162-.27-.27-.594-.324-.918l-.648-3.888c-.054-.298-.216-.558-.432-.734-.216-.176-.486-.27-.756-.27-.27 0-.54.094-.756.27-.216.176-.378.436-.432.734l-.648 3.888c-.054.324-.162.648-.324.918-.162.27-.378.486-.648.648-.27.162-.594.243-.918.243s-.648-.081-.918-.243c-.27-.162-.486-.378-.648-.648-.162-.27-.27-.594-.324-.918l-.648-3.888c-.054-.298-.216-.558-.432-.734-.216-.176-.486-.27-.756-.27-.27 0-.54.094-.756.27-.216.176-.378.436-.432.734l-.648 3.888c-.054.324-.162.648-.324.918-.162.27-.378.486-.648.648-.27.162-.594.243-.918.243s-.648-.081-.918-.243c-.27-.162-.486-.378-.648-.648-.162-.27-.27-.594-.324-.918l-.648-3.888c-.054-.298-.216-.558-.432-.734-.216-.176-.486-.27-.756-.27-.27 0-.54.094-.756.27-.216.176-.378.436-.432.734l-.648 3.888c-.054.324-.162.648-.324.918-.162.27-.378.486-.648.648-.27.162-.594.243-.918.243s-.648-.081-.918-.243c-.27-.162-.486-.378-.648-.648-.162-.27-.27-.594-.324-.918l-.648-3.888z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
