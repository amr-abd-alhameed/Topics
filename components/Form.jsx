"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function Form() {
  return (
    <Card className="block" color="transparent" shadow={false}>
      <h3 className=" font-semibold text-3xl mb-4">
        We'd love to hear from you.
      </h3>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6 rounded-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 text-p-color outline-none border-solid border-[#3ec8ac] border-2  rounded-[25px]"
          />
          <input
            type="mail"
            placeholder="Your Mail Address"
            className="p-4 text-p-color outline-none border-solid border-[#3ec8ac] border-2  rounded-[25px]"
          />
          <input
            type="text"
            placeholder="your message"
            className="pb-52 pt-6 px-6 w-full border-solid border-[#3ec8ac] border-2 h-10 block text-p-color outline-none  cube rounded-[25px]"
          />
        </div>

        <Button className="mt-6 bg-[#3ec8ac]" fullWidth>
          send
        </Button>
      </form>
    </Card>
  );
}
