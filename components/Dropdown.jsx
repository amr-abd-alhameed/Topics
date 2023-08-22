// import { Fragment } from "react";// import { Menu, Transition } from "@headlessui/react";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
// import { IoIosArrowDown } from "react-icons/io";
// import Link from "next/link";
// export default function Dropdown({
//   className,
//   active,
//   textOne,
//   textTwo,
//   textThree,
//   textFour,
// }) {
//   return (
//     <Menu as="div" className={`relative inline-block text-left ${className}`}>
//       <div>
//         <Menu.Button
//           className={`inline-flex w-full justify-center gap-x-1.5 rounded-md py-2 ${
//             active ? "text-xl" : "text-base"
//           } uppercase hover:text-[#13547a] transition-colors duration-200 ring-inset border-none items-center`}
//         >
//           {textOne}
//           <IoIosArrowDown />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items
//           className={`absolute left-0 z-10 ${
//             active ? "mt-7" : "mt-14"
//           }  w-48 origin-top-right rounded-md bg-white shadow-lg  ring-opacity-5 focus:outline-none`}
//         >
//           <div className="py-1 ">
//             <Menu.Item>
//               {({ active }) => (
//                 <Link
//                   href="/topics-listing"
//                   className={classNames(
//                     active
//                       ? "bg-transparent  hover:text-[#13547a] transition-colors duration-200"
//                       : "text-gray-700",
//                     "block px-4 py-2 text-base uppercase text-gray-700"
//                   )}
//                 >
//                   {textTwo}
//                 </Link>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <Link
//                   href="/contact-form"
//                   className={classNames(
//                     active
//                       ? "bg-gray-100 hover:text-[#13547a] transition-colors duration-200"
//                       : "text-gray-700",
//                     "block px-4 py-2 text-base uppercase  text-gray-700"
//                   )}
//                 >
//                   {textThree}
//                 </Link>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <Link
//                   href="#"
//                   className={classNames(
//                     active
//                       ? "bg-gray-100 hover:text-[#13547a] transition-colors duration-200"
//                       : "text-gray-700",
//                     "block px-4 py-2 text-base uppercase  text-gray-700"
//                   )}
//                 >
//                   {textFour}
//                 </Link>
//               )}
//             </Menu.Item>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
