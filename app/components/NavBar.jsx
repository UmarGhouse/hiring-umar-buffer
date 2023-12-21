import { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";

export default function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false)
  };

  const handleClick = (id = '') => {
    router.push(`/#${id}`);
    handleCloseMenu();
  }
  
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      position="static"
      className="container mx-auto px-6 flex items-center justify-between"
    >
      <NavbarContent>
        <NavbarBrand>
          <Image src="/logo.svg" alt='Logo' width={50} height={50} onClick={() => handleClick()} className="cursor-pointer" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="w-full" justify="end">
        {/* MOBILE DRAWER BUTTON */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        {/* DESKTOP */}
        <div className="hidden sm:flex sm:items-center gap-4">
          <NavbarItem>
            <a href='#what-you-get' className='no-underline'>What you Get</a>
          </NavbarItem>
          <NavbarItem>
            <a href='#what-i-get' className='no-underline'>What I Get</a>
          </NavbarItem>
          <NavbarItem>
            <button className='py-2 px-4 bg-orange-75 text-white rounded-md hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-50' onClick={() => router.push('/#cta')}>Ready?</button>
          </NavbarItem>
        </div>
      </NavbarContent>

      {/* MOBILE DRAWER */}
      <NavbarMenu className="mt-12 flex flex-col items-start gap-y-4">
        <NavbarMenuItem>
          <a onClick={handleCloseMenu} href='#what-you-get' className='no-underline'>What you Get</a>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <a onClick={handleCloseMenu} href='#what-i-get' className='no-underline'>What I Get</a>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <button className='py-2 px-4 bg-orange-75 text-white rounded-md hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-50' onClick={() => handleClick('cta')}>Ready?</button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}