import { Typography, IconButton } from "@material-tailwind/react";
import { footerLinks, socialLinks } from "@/data";

export function SimpleFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center text-center justify-center gap-6 px-2 md:justify-between">
        <div className="w-full px-4">
          <ul className="flex items-center justify-center gap-6">
            {footerLinks.map(({ title, href, target }) => (
              <li key={title}>
                <Typography
                  as="a"
                  href={href}
                  target={target}
                  variant="small"
                  className="px-1 py-0.5 font-normal text-inherit transition-colors hover:text-blue-500"
                >
                  {title}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-3 flex justify-center gap-5 md:mb-0">
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
          <Typography variant="small" className="font-normal text-inherit mt-3">
            Copyright © {year} RentalMaster.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

SimpleFooter.displayName = "/src/widgets/layout/simple-footer.jsx";

export default SimpleFooter;
