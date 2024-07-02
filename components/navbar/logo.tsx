import React from 'react';
import {Image, Link} from '@nextui-org/react';

interface Props {
   width?: number;
   height?: number;
}

export const AcmeLogo = ({
   width = 36,
   height = 36
}: Props) => {
   return (
      <Link href=''>
         <Image src='logo.png' width={width} height={height} alt=''/>
      </Link>
   );
};