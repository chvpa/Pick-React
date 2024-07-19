const Navigator = ({className}) => {
    return (
        <nav className={className}>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors"
            >
              Casos de Estudio
            </a>
            <a
              href="#"
              className="text-white hover:text-sky-400 transition-colors"
            >
              Servicio
            </a>
          </nav>
    )
}

export default Navigator;