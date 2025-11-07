import "../assets/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">PROJECT CONTRIBUTORS</p>

      <div className="footer__contributors">
        {/* Contributor 1 */}
        <div className="footer__contributor">
          <h3 className="footer__name">Suprakash Saha</h3>
          <a href="mailto:suprakash.link@gmail.com" className="footer__link">Email: suprakash.link@gmail.com</a>
          <a href="https://github.com/SuprakashSaha" className="footer__link" target="_blank" rel="noopener noreferrer">
            GitHub: SuprakashSaha
          </a>
          <a href="https://www.linkedin.com/in/suprakash-saha-83b99b2a6" className="footer__link" target="_blank" rel="noopener noreferrer">
            LinkedIn: suprakash-saha
          </a>
          <p className="footer__college">College: Future Institute of Technology</p>
          <p className="footer__stream">Stream: CSE (AI & ML)</p>
        </div>

        {/* Contributor 2 */}
        <div className="footer__contributor">
          <h3 className="footer__name">Rikk Bera</h3>
          <a href="mailto:rikkbera@gmail.com" className="footer__link">Email: rikkbera@gmail.com</a>
          <a href="https://github.com/Rikk-Bera" className="footer__link" target="_blank" rel="noopener noreferrer">
            GitHub: Rikk-Bera
          </a>
          <a href="https://www.linkedin.com/in/rikk-bera-07b023253/" className="footer__link" target="_blank" rel="noopener noreferrer">
            LinkedIn: rikk-bera
          </a>
          <p className="footer__college">College: Future Institute of Technology</p>
          <p className="footer__stream">Stream: CSE (AI & ML)</p>
        </div>

        {/* Contributor 3 */}
        <div className="footer__contributor">
          <h3 className="footer__name">Piyush Mitra</h3>
          <a href="mailto:piyushmitra698@gmail.com" className="footer__link">Email: piyushmitra698@gmail.com</a>
          <a href="https://github.com/PiyushMitra" className="footer__link" target="_blank" rel="noopener noreferrer">
            GitHub: PiyushMitra
          </a>
          <a href="http://www.linkedin.com/in/piyush-mitra-551118322" className="footer__link" target="_blank" rel="noopener noreferrer">
            LinkedIn: piyush-mitra
          </a>
          <p className="footer__college">College: Future Institute of Technology</p>
          <p className="footer__stream">Stream: CSE (AI & ML)</p>
        </div>

        {/* Contributor 4 */}
        <div className="footer__contributor">
          <h3 className="footer__name">Abhik Halder</h3>
          <a href="mailto:halderabhik77@gmail.com" className="footer__link">Email: halderabhik77@gmail.com</a>
          <a href="https://github.com/abyy05" className="footer__link" target="_blank" rel="noopener noreferrer">
            GitHub: abyy05
          </a>
          <a href="https://www.linkedin.com/in/abhik-halder-1347852a8/" className="footer__link" target="_blank" rel="noopener noreferrer">
            LinkedIn: abhik-halder
          </a>
          <p className="footer__college">College: Future Institute of Technology</p>
          <p className="footer__stream">Stream: CSE (AI & ML)</p>
        </div>
      </div>

      <p className="footer__credit">Made with React + WebAssembly</p>
    </footer>
  );
}
