import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { footerLinks, socialLinks } from "@/data";

const year = new Date().getFullYear();

export function Footer({ socials, copyright }) {
  return (
    <footer className="relative px-4 pb-6 pt-8 bg-blue-gray-50/50">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center pt-6 text-center">
          <div className="w-full px-4">
            {footerLinks.map(({ title, href, target }) => (
              <Typography
                key={title}
                as="a"
                href={href}
                target={target}
                rel="noreferrer"
                variant="small"
                className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
              >
                {title}
              </Typography>
            ))}
            <div className="mx-auto mb-8 mt-6 flex justify-center gap-5 md:mb-0">
              {socialLinks.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "",
    },
    {
      color: "purple",
      name: "instagram",
      path: "",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "",
    },
    {
      color: "red",
      name: "google",
      path: "",
    },
    {
      color: "blue",
      name: "linkedin",
      path: "",
    },
  ],
  copyright: <>Copyright © {year} RentalMaster.</>,
};

Footer.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
