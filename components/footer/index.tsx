import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider, Text, Link } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

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
                        href="https://pvpblaze.tebex.io"
                     >
                        <Icon icon="mingcute:shopping-cart-1-fill" fontSize={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://discord.gg/jHpVJHTtWt"
                     >
                        <Icon icon="mingcute:discord-fill" fontSize={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://www.youtube.com/channel/UC9XOBd7m8Nvf6Y_ift6cnXQ"
                     >
                        <Icon icon="mingcute:youtube-fill" fontSize={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://www.tiktok.com/@cmclient.official"
                     >
                        <Icon icon="mingcute:tiktok-fill" fontSize={24} />
                     </Link>
                     <Link
                        color="inherit"
                        target="_blank"
                        href="https://github.com/cmclient"
                     >
                        <Icon icon="mingcute:github-fill" fontSize={24} />
                     </Link>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Link href="https://pvpblaze.tebex.io/terms/checkout" css={{ color: '$accents8' }}>
                        Terms of Service
                     </Link>
                     <Link href="https://pvpblaze.tebex.io/terms/privacy" css={{ color: '$accents8' }}>
                        Privacy Policy
                     </Link>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        © Copyright 2025 <Link href="https://github.com/cmclient">CMCLIENT</Link>.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
