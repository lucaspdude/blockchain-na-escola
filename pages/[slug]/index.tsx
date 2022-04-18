import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Slug: NextPage = (props) => {
  console.log(props);

  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, [router]);

  return (
    <div>
      <h1 className="text-5xl">{router.query?.slug}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea non tempore
        necessitatibus itaque harum esse pariatur repellendus corrupti quis
        perspiciatis quibusdam, nobis hic dolore rem.
      </p>
    </div>
  );
};

export default Slug;
