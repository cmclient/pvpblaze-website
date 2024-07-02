import { Divider, Text, Link } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { DiscordIcon } from '../icons/DiscordIcon';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{ width: '100%' }}>
            <Flex justify={'center'}>
               <AcmeLogo width={128} height={128} />
            </Flex>
            <Flex justify={'center'}>
               <Text span css={{ color: '$accents8' }}>
                  The PVPBlaze.net server is not associated with Mojang Studios in any way.
                  Income from the store is transferred to the service owner to maintain the server.
               </Text>
            </Flex>

            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                  }}
               />
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$10',
                     }}
                     wrap={'wrap'}
                  >
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://dc.pvpblaze.net"
                     >
                        <DiscordIcon fill="currentColor" size={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://dc.pvpblaze.net"
                     >
                        <DiscordIcon fill="currentColor" size={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://dc.pvpblaze.net"
                     >
                        <DiscordIcon fill="currentColor" size={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://dc.pvpblaze.net"
                     >
                        <DiscordIcon fill="currentColor" size={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://dc.pvpblaze.net"
                     >
                        <DiscordIcon fill="currentColor" size={24} />
                     </Link>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        Terms of Service
                     </Text>
                     <Text span css={{ color: '$accents8' }}>
                        Privacy Policy
                     </Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        © Copyright 2024 CMClient.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
