

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <h1>Sports Academies</h1>
                </div>
                <div>
                    <span className="footer-title">SOCIAL LINK</span>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instragram</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Linkedin</a>
                </div>
                <div>
                    <span className="footer-title">COMPANY</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>

                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;