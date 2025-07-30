import {
  Facebook,
  LucideCopyright,
  MailIcon,
  Twitch,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  const contact = [
    { Icon: Facebook, href: "" },
    { Icon: MailIcon, href: "" },
    { Icon: Twitch, href: "" },
    { Icon: Twitter, href: "" },
  ];
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col mt-30 justify-center items-center h-40 bg-primary/20 gap-3">
      <div className="flex flex-row gap-2">
        {contact.map(({ Icon, href }, key) => {
          return (
            <a
              key={key}
              href={href}
              className="border-foreground border-2 p-2 rounded-full hover:bg-background hover:scale-110"
            >
              <Icon />
            </a>
          );
        })}
      </div>
      <div className="flex gap-1">
        Copyright <LucideCopyright /> {year}. Designed by EldriTech
      </div>
    </div>
  );
};
