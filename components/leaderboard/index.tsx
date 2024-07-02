import { Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';
import { LeaderboardTable } from './LeaderboardTable.js';

export const Leaderboard: React.FC<{ id: string }> = ({ id }) => {
   return (
      <>
         <Flex
            id={id}
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Leaderboard</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
               Best players of our server
            </Text>

            <LeaderboardTable />
         </Flex>

         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
         />
      </>
   );
};
