import logoLinkedin from '../assets/logoLinkedin.png'
import logoFacebook from '../assets/logoFacebook.png'
import logoInstagram from '../assets/logoInstagram.png'
import S from './Style.module.scss'


export default function Footer() {
    return(
        <footer className={S.footer}>
            <nav>
                <a href="/"><img src={logoLinkedin} alt="Logo do Linkedin" /></a>
                <a href="/"><img src={logoFacebook} alt="Logo do Facebook" /></a>
                <a href="/"><img src={logoInstagram} alt="Logo do Instagram" /></a>
            </nav>
        </footer>
    )
}