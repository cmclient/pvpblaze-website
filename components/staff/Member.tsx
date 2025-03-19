import React from 'react';
import { Avatar, Badge, Card, Text } from '@nextui-org/react';
import { DiscordIcon } from '../icons/DiscordIcon';
import { Flex } from '../styles/flex';

interface Props {
    nickname?: string;
    discord?: string;
    rank?: string;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | undefined;
}

export const Member = ({
    nickname,
    discord,
    rank,
    color = "primary",
    ...props
}: Props) => {
    const avatarUrl = `https://minotar.net/helm/${nickname}/128.png`;

    return (
        <Card css={{ p: '$6', mw: '300px', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
            <Card.Body>
                <Avatar
                    css={{ size: "$40" }}
                    src={avatarUrl}
                    color="primary"
                    bordered
                />
                <Text css={{ display: 'contents' }} h2>
                    {nickname}
                </Text>
                <Flex
                    css={{ gap: '$3', px: '$6' }}
                >
                    <DiscordIcon fill='currentcolor' width={16} css={{ marginRight: '$2' }} />
                    <Text h6>{discord}</Text>
                </Flex>
                <Badge enableShadow disableOutline color={color}>{rank}</Badge>
            </Card.Body>
        </Card>
    );
};