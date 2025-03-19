import { Divider, Text, Link } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { DiscordIcon } from '../icons/DiscordIcon';
import { YouTubeIcon } from '../icons/YouTubeIcon';
import { TiktokIcon } from '../icons/TiktokIcon';

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
                  The PVPBLAZE.NET server is not associated with Mojang Studios in any way.
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
                        href="https://discord.gg/jHpVJHTtWt"
                     >
                        <DiscordIcon fill="currentColor" size={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://www.youtube.com/channel/UC9XOBd7m8Nvf6Y_ift6cnXQ"
                     >
                        <YouTubeIcon fill="currentColor" size={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://www.tiktok.com/@cmclient.official?is_from_webapp=1&sender_device=pc"
                     >
                        <TiktokIcon fill="currentColor" size={24} />
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
                        © Copyright 2025 PvPBlaze.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
