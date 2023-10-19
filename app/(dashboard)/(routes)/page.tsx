import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <p className="text-3xl  font-medium text-sky-700">Hello World!</p>
      <Button variant={"destructive"}>Click me</Button>
    </div>
  );
};

export default Home;
