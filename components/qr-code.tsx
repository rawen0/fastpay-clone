import Image from "next/image";

type Props = {};

const QrCode = (props: Props) => {
  return (
    <Image
      width={56}
      height={56}
      alt="qr code"
      src={"/QRCode.svg"}
    />
  );
};

export default QrCode;
