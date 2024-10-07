interface Dictionary {
  navbar: Navbar;
  home: Home;
  portfolio: Portfolio;
  skills: Skills;
  contact: Contact;
  footer: Footer;
}

interface Navbar {
  options: {
    name: string;
  }[];
}

interface Home {
  description: {
    first: string;
    second: string;
    third: string;
  };
}

interface Portfolio {
  title: string;
  options: string[];
  "button-options": {
    name: string;
  };
}

interface Skills {
  title: string;
}

interface Contact {
  title: string;
  form: {
    email: {
      name: string;
    };
    message: {
      name: string;
    };
    button: {
      name: string;
    };
  };
}

interface Footer {
  copyright: string;
}
