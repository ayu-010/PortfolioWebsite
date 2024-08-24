import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid,BentoGridItem } from "./ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { gridItems } from "@/data";
export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={item.id}
          title={item.title}
          description={item.description}
          header={<Skeleton img={item.img} />} // Pass img to Skeleton
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// export  default function BentoGridDemo() {
//   return (
//     <BentoGrid className="max-w-4xl mx-auto">
//       {items.map((item,i) => (
//         <BentoGridItem
//           key={item.id}
//           title={item.title}
//           description={item.description}
//           header={item.header}
//           icon={item.icon}
//           img={item.img}
//           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//         />
//       ))}
//     </BentoGrid>
//   );
// }
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
type SkeletonProps = {
  img?: string; // The img prop is optional and should be of type string
};
const Skeleton: React.FC<SkeletonProps> = ({ img }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {img ? (
      <img src={img} alt="thumbnail" className="w-full h-full object-cover rounded-xl" />
    ) : null}
  </div>
);


    const items = [
      {  
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton img="/b1.svg" />,  // Image provided
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        img: "/b1.svg",
      },
  {id: 2,
    title: "I'm very flexible with time zone communications",
    
    description: "Dive into the transformative power of technology.",
    header: <Skeleton img="/b1.svg" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    img: "/b2.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    header: <Skeleton img="/b3.svg" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    img: "/b1.svg",
  },
  {  id: 4,
    title: "Tech enthusiast with a passion for development.",
  
    description:
      "Understand the impact of effective communication in our lives.",
      header: <Skeleton img="/b1.svg" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    img: "/b5.svg",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton img="/b1.svg" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    img: "/b1.svg",
  },
  {id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    
    header: <Skeleton img="/b1.svg" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    img: "/b1.svg",
    
    
    
  },
  {
    
    id: 6,
    title: "Do you want to start a project together?",
    
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    img: "/b1.svg",
  },
];