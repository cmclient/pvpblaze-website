import { Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from '../styles/flex';
import { Member } from './Member';

export const Staff: React.FC<{ id: string }> = ({ id }) => {
  return (
    <>
      <Flex
        id={id}
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>
            Meet the team of our server
          </Text>
          <Text h2>Staff</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Member nickname='Merv1k' discord='@merv1k' rank='Founder' color='error'/>
          <Member nickname='VeryGlodPlayer' discord='@rzeznikzblaviken.' rank='Owner' color='warning'/>
          <Member nickname='presidental_og' discord='@kuezese' rank='vOwner' color='success'/>
        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
