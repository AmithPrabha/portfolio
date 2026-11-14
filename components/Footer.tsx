import { FiArrowUp } from "react-icons/fi";
import { profile } from "@/lib/portfolio";

export default function Footer() {
  return <footer className="shell footer"><a className="wordmark" href="#home" aria-label="Amith Prabha, home">ap<span>.</span></a><p>Amith Prabha <span>·</span> {profile.location}</p><div className="footer-socials"><a href="https://x.com/amith_prabha" target="_blank" rel="noopener noreferrer">X</a><a href="https://www.instagram.com/amith_prabha/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.facebook.com/amithprabhaz" target="_blank" rel="noopener noreferrer">Facebook</a></div><a className="back-top" href="#home">Back to top <FiArrowUp aria-hidden /></a></footer>;
}
