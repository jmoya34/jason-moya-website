
export default function SocialButton(){
    return (
        <div className="grid grid-flow-col auto-cols-max gap-4 justify-center pt-4 pb-4">
            <a href="https://github.com/jmoya34" target="_blank" rel="noopener noreferrer">
                <img className="hover:opacity-75" src={"/assets/github.png"} alt="Github Logo"/>
            </a>
            
            <a href="https://app.joinhandshake.com/profiles/mssgb3" target="_blank" rel="noopener noreferrer">
                <img className="hover:opacity-75" src={"/assets/handshake.png"} alt="Handshake Logo"/>
            </a>
            
            <a href="https://www.linkedin.com/in/jason-moya-4209b9238/" target="_blank" rel="noopener noreferrer">
                <img className="hover:opacity-75" src={"/assets/linkedin.png"} alt="LinkedIn Logo"/>
            </a>
                
            <a href="https://www.instagram.com/jmoya_kaz" target="_blank" rel="noopener noreferrer">
                <img className="hover:opacity-75" src={"/assets/instagram.png"} alt="Instagram Logo"/>
            </a>
                
        </div>
    );
}