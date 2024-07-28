import Link from "next/link";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

type Props = {};

const socialIcons = [
  <Facebook className="stroke-blue-600 fill-blue-600" />,
  <Youtube className="fill-red-600" />,
  <Twitter className="fill-blue-600" />,
  <Instagram />,
];

const SocialIcon = (props: Props) => {
  return socialIcons.map((SocialIcon, i) => (
    <Link
      key={i}
      href={"#"}
    >
      {SocialIcon}
    </Link>
  ));
};

export default SocialIcon;
