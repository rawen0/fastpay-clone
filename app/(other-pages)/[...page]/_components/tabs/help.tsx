import Search from "@/components/search";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import info from "@/constants/info";
import SocialIcon from "@/components/social-icon";

type Props = {};

const FQA = () => (
  <TabsContent
    value="faq"
    className="mt-0 mx-4 my-4 space-y-5  py-5 "
  >
    <Search className="ring-1 bg-white rounded ring-ring" />

    <ScrollArea className="h-96 max-sm:h-[75vh]">
      <Accordion type="multiple">
        <div className="max-md:last:pb-40">
          {Array.from({ length: 40 }).map((_, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`border-b-0`}
            >
              <div className="w-full bg-muted border-b border-slate-950  text-green-600 sticky top-0">
                {i}
              </div>
              <AccordionTrigger>Is it animated? {i}</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </ScrollArea>
  </TabsContent>
);

const ContactUs = () => {
  return (
    <TabsContent
      value="contact"
      className="flex justify-evenly items-center w-full px-5 flex-col h-4/5 font-mono text-sm"
    >
      <div className="space-y-6">
        {info.map((item, i) => (
          <h2
            key={i}
            className="flex items-center md:justify-center space-x-1 text-[var(--primary-text)]"
          >
            <item.Icon className="min-h-5 min-w-5" />
            <p className="sm:w-1/2 h-auto text-wrap">{item.label}</p>
          </h2>
        ))}
      </div>
      <div>
        <h3 className="uppercase text-[var(--primary-text)]">
          find us on social media
        </h3>
        <div className="flex justify-center space-x-5 mt-2">
          <SocialIcon />
        </div>
      </div>
    </TabsContent>
  );
};

const Help = (props: Props) => (
  <Tabs
    defaultValue="faq"
    className="h-full w-full"
  >
    <TabsList className="grid w-full grid-cols-2 text-lg p-0">
      <TabsTrigger
        value="faq"
        className="rounded-none data-[state=active]:bg-muted py-1.5 text-base h-full bg-white data-[state=active]:text-green-500 data-[state=active]:shadow-none"
      >
        FAQ
      </TabsTrigger>
      <TabsTrigger
        value="contact"
        className="rounded-none data-[state=active]:bg-muted py-1.5 text-base h-full bg-white data-[state=active]:text-green-500 data-[state=active]:shadow-none"
      >
        Contact Us
      </TabsTrigger>
    </TabsList>
    <FQA />
    <ContactUs />
  </Tabs>
);

export default Help;
