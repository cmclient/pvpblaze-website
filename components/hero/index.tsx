import { Button, Link, Divider, Text, Popover, Image } from '@nextui-org/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { DiscordIcon } from '../icons/DiscordIcon';

export const Hero = () => {
   const serverAddress = 'mc.pvpblaze.net';
   const [copied, setCopied] = React.useState(false);

   const handleCopy = () => {
      setCopied(true);

      // Reset the copied state after 3 seconds
      setTimeout(() => {
         setCopied(false);
      }, 3000);
   };

   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="white"
                  >
                     PVP
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="#F5A524"
                  >
                     Blaze
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="white"
                  >
                     .NET
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  PvPBlaze is made for you! Looking for a fun Minecraft server to enjoy with friends? Check ours out - you won&apos;t be disappointed!
               </Text>

               <Flex
                  css={{
                     gap: '$4', // Reduced gap for better alignment
                     pt: '$4',
                     flexWrap: 'nowrap', // Ensures they stay in one line
                     alignItems: 'center', // Aligns items properly
                  }}
               >
                  <Popover>
                     <Popover.Trigger>
                        <Button auto>Join Now</Button>
                     </Popover.Trigger>
                     <Popover.Content>
                        <CopyToClipboard text={serverAddress} onCopy={handleCopy}>
                           <Text css={{ p: "$6", cursor: 'pointer' }}>
                              {copied ? 'Copied to clipboard.' : serverAddress}
                           </Text>
                        </CopyToClipboard>
                     </Popover.Content>
                  </Popover>

                  <Button auto flat as={Link} href="https://pvpblaze.tebex.io/" target="_blank" rel="noopener noreferrer">
                     Store
                  </Button>

                  {/* <Button auto animated bordered as={Link} href="https://pvpblaze.tebex.io/" target="_blank" rel="noopener noreferrer">
                     <DiscordIcon fill="currentColor" size={24} />
                  </Button> */}

                  <Link
                     color="inherit"
                     target="_blank"
                     href="https://discord.gg/jHpVJHTtWt"
                  >
                     <DiscordIcon fill="currentColor" size={24} />
                  </Link>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <Image src='player.png' alt='' />
            </Box>
         </Flex>
         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$10' }}
         />
      </>
   );
};
