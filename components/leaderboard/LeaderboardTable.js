import { useState, useEffect } from "react";
import { Table, Badge, Row, Col, Tooltip, User, Text, Avatar, Loading, Pagination, Input } from "@nextui-org/react";
import { Flex } from '../styles/flex';

export const LeaderboardTable = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!users) {
        try {
          const response = await fetch("https://api.pvpblaze.net:2083/leaderboard");
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          setError("Failed to fetch users: " + error.message);
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [users]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const columns = [
    { name: "#", uid: "position" },
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "POINTS", uid: "points" },
    { name: "GUILD", uid: "guild" },
    { name: "K", uid: "kills" },
    { name: "D", uid: "deaths" },
    { name: "A", uid: "assists" },
    { name: "KDR", uid: "kdr" },
  ];

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        const avatarUrl = `https://minotar.net/helm/${user.nickname}/64.png`;
        return (
          <User squared src={avatarUrl} name={user.nickname} css={{ p: 0 }} />
        );

      case "position":
        return (<Text b size={14} css={{ tt: "capitalize" }}>
          #{user.position}
        </Text>);

      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                Members
              </Text>
            </Row>
          </Col>
        );

      case "points":
        return <Text b size={14} css={{ tt: "capitalize" }}>
          {cellValue} points
        </Text>

      case "guild":
        if (user.guild.tag) {
          const avatarUrl = `https://minotar.net/helm/${user.guild.owner}/32.png`;
          return (
            <Tooltip
              content={
                <Col>
                  <div>
                    <Text span css={{ color: '$accents8' }}>
                      Name:{' '}
                    </Text>
                    <Text span css={{ display: 'inline', color: 'primary' }}>
                      {user.guild.name}
                    </Text>
                  </div>
                  <div>
                    <Text span css={{ color: '$accents8' }}>
                      Owner:{' '}
                    </Text>
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <Avatar size={'xs'} src={avatarUrl} color="primary" bordered />
                      <Text span css={{ display: 'inline', color: 'primary', marginLeft: '4px' }}>
                        {user.guild.owner}
                      </Text>
                    </div>
                  </div>
                </Col>
              }
            >
              <Badge enableShadow disableOutline color="primary">{user.guild.tag}</Badge>
            </Tooltip>
          );
        }

        return <Badge enableShadow disableOutline color="error">NONE</Badge>

      case "kills":
        return <Badge enableShadow disableOutline color="primary">{user.kills}</Badge>

      case "deaths":
        return <Badge enableShadow disableOutline color="primary">{user.deaths}</Badge>

      case "assists":
        return <Badge enableShadow disableOutline color="primary">{user.assists}</Badge>

      case "kdr":
        return <Badge enableShadow disableOutline color="warning">{user.kdr | NaN}</Badge>

      default:
        return cellValue;
    }
  };

  if (loading) {
    return <Loading type="gradient"/>
  }

  if (error) {
    return <Badge enableShadow disableOutline color="error">{error}</Badge>;
  }

  const filteredUsers = users.filter((user) =>
    user.nickname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredUsers.length == 0) {
    return (
      <>
        <Badge enableShadow disableOutline color="warning">No players found.</Badge>
        <Input
          css={{ marginTop: "16px" }}
          placeholder="Search for player..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Pagination
          shadow
          total={0}
          pageSize={0}
          current={0}
          onChange={(page) => setCurrentPage(page)}
          css={{ marginTop: "16px" }}
        />
      </>
    );
  }

  const pages = Math.floor(filteredUsers.length / itemsPerPage);

  return (
    <>
      <Flex
        css={{
          '@media (max-width: 768px)': {
            width: '100%', // Adjust the width for smaller screens
          }
        }}
        direction={'column'}
        justify={'center'}
      >
        <Table
          aria-label="Leaderboard"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
          selectionMode="none"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}>
            {(item) => (
              <Table.Row key={item.position}>
                {(columnKey) => (
                  <Table.Cell key={columnKey}>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Flex>

      <Input
        aria-label="player"
        css={{ marginTop: "16px" }}
        placeholder="Search for player..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <Pagination
        shadow
        total={pages}
        pageSize={itemsPerPage}
        current={currentPage}
        onChange={(page) => setCurrentPage(page)}
        css={{ marginTop: "16px" }}
      />
    </>
  );
};