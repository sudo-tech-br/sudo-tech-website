import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { SudoLogo } from "../assets/logos/SudoLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  { label: "Início", href: "#home", ariaLabel: "Início" },
  { label: "Serviços", href: "#servicos", ariaLabel: "Serviços" },
  { label: "Depoimentos", href: "#depoimentos", ariaLabel: "Depoimentos" },
  { label: "Preços", href: "#precos", ariaLabel: "Preços" },
  { label: "FAQ", href: "#FAQ", ariaLabel: "FAQ" },
];

const contactData = [
  { label: "WhatsApp", href: "https://wa.me/+5592992852143?text=Ol%C3%A1%2C%20gostaria%20saber%20sobre%20os%20servi%C3%A7os.", ariaLabel: "WhatsApp" },
  {
    label: "Email",
    href: "mailto:contato@sudotech.com.br",
    ariaLabel: "Email",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <SudoLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Sudo
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Seu site em tempo
                <a
                  href="https://sudo.junowoz.com"
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="DarkAdmin"
                >
                  expresso.
                </a>
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://facebook.com/sudobr"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/sudobr_"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.instagram.com/sudobr/"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Navegação
                </h3>
                <ul>
                  {footerData.map(({ label, href, ariaLabel }) => (
                    <li key={href} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={href}
                        aria-label={ariaLabel}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Contato</h3>
                <ul>
                  {contactData.map(({ label, href, ariaLabel }) => (
                    <li key={href} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={href}
                        aria-label={ariaLabel}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            2025 &copy; Sudo. Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
