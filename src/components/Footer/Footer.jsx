
const Footer = () => {
    return (
        <div>
            <footer className="footer px-32 py-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title ms-24">Services</span>
                    <a className="link link-hover ms-24">Tutorial making</a>
                    <a className="link link-hover ms-24">Home delivery</a>
                    <a className="link link-hover ms-24">Cooking class</a>
                    <a className="link link-hover ms-24">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title ms-24">Company</span>
                    <a className="link link-hover ms-24">About us</a>
                    <a className="link link-hover ms-24">Contact</a>
                    <a className="link link-hover ms-24">Jobs</a>
                </div>
                <div>
                    <span className="footer-title ms-24">Legal</span>
                    <a className="link link-hover ms-24">Terms of use</a>
                    <a className="link link-hover ms-24">Privacy policy</a>
                    <a className="link link-hover ms-24">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;