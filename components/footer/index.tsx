import { Divider, Text, Link } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { DiscordIcon } from '../icons/DiscordIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';
import { TikTokIcon } from '../icons/TikTokIcon';
import { ShopIcon } from '../icons/ShopIcon';
import { InstagramIcon } from '../icons/InstagramIcon';

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
                        href="https://www.instagram.com/pvpblaze2024/"
                     >
                        <InstagramIcon />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://www.youtube.com/channel/UC9XOBd7m8Nvf6Y_ift6cnXQ"
                     >
                        <YoutubeIcon />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://www.tiktok.com/@cmclient.official?is_from_webapp=1&sender_device=pc"
                     >
                        <TikTokIcon />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://pvpblaze.net/store"
                     >
                        <ShopIcon />
                     </Link>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        <Link href='static/tos.pdf'>Terms of Service</Link>
                     </Text>
                     <Text span css={{ color: '$accents8' }}>
                     <Link href='static/privacy.pdf'>Privacy Policy</Link>
                     </Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        © Copyright 2024 CMCLIENT.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
