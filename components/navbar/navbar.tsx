import { Button, Link, Navbar, Switch, Text, Popover } from '@nextui-org/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React from 'react';
import { AcmeLogo } from './logo';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';
import { DiscordIcon } from '../icons/DiscordIcon';
import { StatusIcon } from '../icons/StatusIcon';

export const Nav = () => {
   const serverAddress = 'mc.pvpblaze.net';
   const [copied, setCopied] = React.useState(false);

   const handleCopy = () => {
      setCopied(true);

      // Reset the copied state after 3 seconds
      setTimeout(() => {
         setCopied(false);
      }, 3000);
   };

   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();
   const collapseItems = new Map([
      ['Home', '#'],
      ['Staff', '#staff'],
      ['Leaderboard', '#leaderboard']
   ]);

   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo width={100} height={100} />

            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '2rem',
               }}
            >
               <StatusIcon />
            </Navbar.Content>

            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '2rem',
               }}
            >
               <Navbar.Link isActive href="#">
                  Home
               </Navbar.Link>
               <Navbar.Link href="#leaderboard">Leaderboard</Navbar.Link>
               <Navbar.Link href="#staff">Staff</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {Array.from(collapseItems.entries()).map(([label, href], index) => (
               <Navbar.CollapseItem key={label}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href={href}
                  >
                     {label}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://discord.gg/jHpVJHTtWt"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            <Navbar.Item>
               <Popover>
                  <Popover.Trigger>
                     <Button auto flat>
                        Join now
                     </Button>
                  </Popover.Trigger>
                  <Popover.Content>
                     <CopyToClipboard text={serverAddress} onCopy={handleCopy}>
                        <Text css={{ p: "$6", cursor: 'pointer' }}>
                           {copied ? 'Copied to clipboard.' : serverAddress}
                        </Text>
                     </CopyToClipboard>
                  </Popover.Content>
               </Popover>
            </Navbar.Item>
            <Navbar.Item>
               <Button auto flat>
                  <Link href="https://pvpblaze.tebex.io/" target="_blank" rel="noopener noreferrer">
                     Store
                  </Link>
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://discord.gg/jHpVJHTtWt"
               >
                  <DiscordIcon fill="currentColor" size={24} />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
