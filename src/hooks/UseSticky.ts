import { useEffect, useState } from "react";

interface StickyState {
   sticky: boolean;
}

const UseSticky = (): StickyState => {
   const [sticky, setSticky] = useState(false);

   useEffect(() => {
      let ticking = false;

      const stickyHeader = (): void => {
         const scrollY = window.scrollY || window.pageYOffset;
         if (scrollY > 100) {
            setSticky(true);
         } else {
            setSticky(false);
         }
      };

      const requestTick = (): void => {
         if (!ticking) {
            requestAnimationFrame(() => {
               stickyHeader();
               ticking = false;
            });
            ticking = true;
         }
      };

      // Initial check
      stickyHeader();

      // Use passive event listener for better iOS performance
      window.addEventListener("scroll", requestTick, { passive: true });
      // Additional event for iOS elastic scrolling
      window.addEventListener("touchmove", requestTick, { passive: true });

      return (): void => {
         window.removeEventListener("scroll", requestTick);
         window.removeEventListener("touchmove", requestTick);
      };
   }, []);

   return {
      sticky,
   };
}

export default UseSticky
