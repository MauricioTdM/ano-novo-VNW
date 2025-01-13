import logo from "../assets/logo.png"
import S from "./Style.module.scss"


export default function Header() {
    return(
        <header className={S.header}>
            <img src={logo} alt="Logo de Ano Novo" />
            <nav>
                <ul>
                    <li>Paz</li>
                    <li>Saúde</li>
                    <li>Alegria</li>
                </ul>
            </nav>
        </header>
    )
}