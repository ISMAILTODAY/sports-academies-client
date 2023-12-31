

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <h1 className="text-3xl font-bold ">SPORTS ACADEMIES</h1>
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
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by SPORTS ACADEMIES</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;