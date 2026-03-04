import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="book" className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <p className="text-xl font-bold tracking-tight text-foreground mb-2">XZE Visual</p>
            <p className="text-sm text-muted-foreground">Animation production and creative visuals that captivate.</p>
          </div>

          <div className="flex gap-12">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Pages</p>
              <Link to="/" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Work</Link>
              <Link to="/pricing" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Pricing</Link>
              <Link to="/contact" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Contact</Link>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Social</p>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Twitter / X</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-foreground hover:text-muted-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} XZE Visual. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
