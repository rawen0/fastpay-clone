import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

const AccountTabs = (props: Props) => {
  return (
    <Tabs
      defaultValue="profile"
      className="h-full w-full"
    >
      <TabsList className="grid w-full grid-cols-2 text-lg p-0">
        <TabsTrigger
          value="profile"
          className="rounded-none data-[state=active]:bg-muted py-1.5 text-base h-full bg-white data-[state=active]:text-green-500 data-[state=active]:shadow-none"
        >
          Profile
        </TabsTrigger>
        <TabsTrigger
          value="security"
          className="rounded-none data-[state=active]:bg-muted py-1.5 text-base h-full bg-white data-[state=active]:text-green-500 data-[state=active]:shadow-none"
        >
          Security
        </TabsTrigger>
      </TabsList>
      <ScrollArea>
        <Profile />
      </ScrollArea>
    </Tabs>
  );
};

const Profile = () => {
  const components = {
    HeadInfo: () => (
      <div className="flex text-left space-x-4 items-center w-full">
        <Image
          src={"/user.jpeg"}
          width={48}
          height={48}
          alt="user image"
          className="w-14 h-14 rounded"
          priority
        />
        <div>
          <div className="font-semibold text-xs sm:text-sm">anya jhon</div>
          <div className="text-xs sm:text-sm">+964 770 246 3176</div>
        </div>
      </div>
    ),
    BodyInfo: () => (
      <div className="w-full py-6 space-y-4">
        {/* Full Name */}
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center">
          <div className="space-y-2 w-full">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              className="py-8 md:py-2"
              id="fullName"
              disabled
              placeholder="John Doe"
              value="John Doe"
            />
          </div>

          {/* Surname */}
          <div className="space-y-2 w-full">
            <Label htmlFor="surname">Surname</Label>
            <Input
              className="py-8 md:py-2"
              id="surname"
              disabled
              placeholder="Doe"
              value="Doe"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            className="py-8 md:py-2"
            id="dob"
            disabled
            type="date"
            value="1990-05-15"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            className="py-8 md:py-2"
            id="email"
            disabled
            type="email"
            value="john.doe@example.com"
          />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            className="py-8 md:py-2"
            id="address"
            disabled
            placeholder="123 Main St"
            value="123 Main St, New York"
          />
        </div>

        {/* ID Type */}
        <div className="space-y-2">
          <Label htmlFor="idType">ID Type</Label>
          <Input
            className="py-8 md:py-2"
            id="idType"
            disabled
            value="passport"
          />
        </div>
      </div>
    ),
  };
  return (
    <TabsContent
      value="profile"
      className="flex items-center w-full px-5 flex-col h-4/5 font-mono text-sm md:px-20"
    >
      <ScrollArea className="w-full pb-10 h-[75vh] md:h-full md:py-0">
        <components.HeadInfo />
        <components.BodyInfo />
      </ScrollArea>
    </TabsContent>
  );
};

export default AccountTabs;
