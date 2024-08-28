import { notFound } from "next/navigation";

type Props = {
  params: { page: string };
};

const ElectronicContents = ({ params }: Props) => {
  const { page } = params;

  switch (page) {
    case "mobile-card":
    case "online-card":
    case "internet-card":
      return "cards";

    case "shops":
    case "promotions":
    case "online-store":
      return "store";

    case "help":
    case "how-to-videos":
      return "help & video";

    default:
      return notFound();
  }
};

export default ElectronicContents;
