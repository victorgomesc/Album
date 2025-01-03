import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="bg-pink-800 text-white py-6 h-24 px-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Título */}
                <h1 className="text-3xl font-bold">Nossa Historia de Amor</h1>

                {/* Menu */}
                <nav>
                    <ul className="flex space-x-6 text-2xl">
                        <li>
                            <a 
                                href="#home" 
                                className="hover:text-gray-200 transition-colors duration-200"
                            >
                                Início
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                className="hover:text-gray-200 transition-colors duration-200"
                            >
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                className="hover:text-gray-200 transition-colors duration-200"
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className="hover:text-gray-200 transition-colors duration-200"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header
